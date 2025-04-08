/**
 * 参照:https://shadcnui-expansions.typeart.cc/docs/multiple-selector
 */
"use client";

import { Command as CommandPrimitive, useCommandState } from "cmdk";
import { X } from "lucide-react";
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  KeyboardEvent,
  ReactNode,
  Ref,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import { Badge } from "@/components/ui/badge";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";

export type Option = {
  value: string | number;
  label: string;
};

export type MultipleSelectorProps = {
  mustHaveOne?: boolean;
  name?: string;
  placeholder?: string;
  value?: Option[];
  defaultOptions?: Option[];
  options?: Option[];
  emptyIndicator?: ReactNode;
  maxSelected?: number; // 選択可能なオプションの最大数
  disabled?: boolean;
  hidePlaceholderWhenSelected?: boolean; // オプションが選択されている場合、プレースホルダーを非表示にする
  hideClearAllButton?: boolean; // すべてクリアボタンを非表示にする
  className?: string;
  badgeClassName?: string;
  commandProps?: ComponentPropsWithoutRef<typeof Command>;
  inputProps?: Omit<
    ComponentPropsWithoutRef<typeof CommandPrimitive.Input>,
    "value" | "placeholder" | "disabled"
  >;
  /**
   * 最初のアイテムが選択されるのはcmdkのデフォルトの動作。そのためデフォルトはtrue。
   * これはダミーアイテムを追加することでの回避策。
   *
   * @reference: https://github.com/pacocoursey/cmdk/issues/171
   */
  selectFirstItem?: boolean;
  onChange?: (options: Option[]) => void;
  onMaxSelected?: (maxLimit: number) => void; // 選択されたオプションの数が制限を超えた場合呼び出される
};

export type MultipleSelectorRef = {
  selectedValue: Option[];
  input: HTMLInputElement;
  focus: () => void;
  reset: () => void;
};

/**
 * shadcn/uiの`CommandEmpty`はcmdkの空の状態を正しくレンダリングしないため、
 * 独自に作成し、`cmdk`から`Empty`の実装をコピーしました。
 *
 * @reference: https://github.com/hsuanyi-chou/shadcn-ui-expansions/issues/34#issuecomment-1949561607
 **/
const CommandEmpty = forwardRef<HTMLDivElement, ComponentProps<typeof CommandPrimitive.Empty>>(
  ({ className, ...props }, forwardedRef) => {
    const render = useCommandState((state) => state.filtered.count === 0);

    if (!render) return null;

    return (
      <div
        ref={forwardedRef}
        className={cn("py-6 text-center text-sm", className)}
        cmdk-empty=""
        role="presentation"
        {...props}
      />
    );
  },
);

CommandEmpty.displayName = "CommandEmpty";

const MultipleSelector = forwardRef<MultipleSelectorRef, MultipleSelectorProps>(
  (
    {
      mustHaveOne = false,
      name,
      value,
      placeholder,
      defaultOptions: arrayDefaultOptions = [],
      options: arrayOptions = [],
      emptyIndicator,
      maxSelected = Number.MAX_SAFE_INTEGER,
      disabled,
      hidePlaceholderWhenSelected,
      hideClearAllButton = false,
      className,
      badgeClassName,
      commandProps,
      inputProps,
      selectFirstItem = true,
      onChange,
      onMaxSelected,
    }: MultipleSelectorProps,
    ref: Ref<MultipleSelectorRef>,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [onScrollbar, setOnScrollbar] = useState(false);
    const [selected, setSelected] = useState<Option[]>(value || []);
    const [options, setOptions] = useState<Option[]>(arrayOptions);
    const [inputValue, setInputValue] = useState("");
    const canRemove = !(mustHaveOne && selected.length === 1);
    const isMultiple = maxSelected !== 1;

    /**
     * ref経由で親コンポーネントに公開するメソッドやプロパティをカスタマイズ
     * https://ja.react.dev/reference/react/useImperativeHandle
     */
    useImperativeHandle(
      ref,
      () => ({
        selectedValue: [...selected],
        input: inputRef.current as HTMLInputElement,
        focus: () => inputRef?.current?.focus(),
        reset: () => setSelected([]),
      }),
      [selected],
    );

    /**
     * ドロップダウン外をクリックしたときにドロップダウンを閉じる
     */
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        inputRef.current.blur();
      }
    };

    const handleUnselect = useCallback(
      (option: Option) => {
        if (!canRemove) return;
        const newOptions = selected.filter((s) => s.value !== option.value);
        setSelected(newOptions);
        onChange?.(newOptions);
      },
      [onChange, selected, canRemove],
    );

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLDivElement>) => {
        const input = inputRef.current;
        if (!input) return;

        const isDeletableKey = e.key === "Delete" || e.key === "Backspace";
        const isInputEmpty = input.value === "" && selected.length > 0;

        // 削除可能なキーが押され、削除可能で、入力が空の場合、最後の選択項目を解除
        if (isDeletableKey && canRemove && isInputEmpty) {
          handleUnselect(selected[selected.length - 1]);
          return;
        }

        if (e.key === "Escape") {
          input.blur();
        }

        // Tabキーが押された時にドロップダウンを閉じて、次のフォーム要素にフォーカスを移動できるようにする
        if (e.key === "Tab") {
          setOpen(false);
          setOnScrollbar(false);
        }
      },
      [handleUnselect, selected, canRemove],
    );

    /**
     * ドロップダウンが開いている場合、ドロップダウン外をクリックしたときにドロップダウンを閉じる
     */
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
      if (open) {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchend", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchend", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchend", handleClickOutside);
      };
    }, [open]);

    /**
     * 選択されたオプションを更新
     */
    useEffect(() => {
      if (value) {
        setSelected(value);
      }
    }, [value]);

    /**
     * オプションを更新
     */
    useEffect(() => {
      if (!arrayOptions) return;
      const newOption = arrayOptions || [];
      if (JSON.stringify(newOption) !== JSON.stringify(options)) {
        setOptions(newOption);
      }
    }, [arrayOptions, options]);

    /**
     * 空の場合のアイテムを表示
     */
    const EmptyItem = useCallback(() => {
      if (!emptyIndicator) return undefined;
      return <CommandEmpty>{emptyIndicator}</CommandEmpty>;
    }, [emptyIndicator]);

    /**
     * 選択可能なオプションを取得
     */
    const selectables = useMemo<Option[]>(
      () => options.filter((option) => !selected.find((s) => s.value === option.value)),
      [options, selected],
    );

    /**
     * 長い文字列を貼り付けたときにセレクタがフリーズまたは遅延するのを避けるために使用
     */
    const commandFilter = useCallback(() => {
      if (commandProps?.filter) {
        return commandProps.filter;
      }
      return undefined;
    }, [commandProps?.filter]);

    return (
      <Command
        ref={dropdownRef}
        {...commandProps}
        onKeyDown={(e) => {
          handleKeyDown(e);
          commandProps?.onKeyDown?.(e);
        }}
        className={cn("h-auto overflow-visible bg-transparent", commandProps?.className)}
        shouldFilter
        filter={commandFilter()}
      >
        <div
          className={cn(
            "w-full min-h-10 rounded-lg border border-input text-base md:text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
            {
              "px-3 py-2": selected.length !== 0,
              "cursor-text": !disabled && selected.length !== 0,
            },
            className,
          )}
          onClick={() => {
            if (disabled) return;
            inputRef?.current?.focus();
          }}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (disabled) return;
            if (e.key === "Enter") {
              inputRef?.current?.focus();
            }
          }}
        >
          <div
            className={cn(
              "relative flex flex-wrap items-center gap-1 last:mb-0 pr-5 max-h-80 overflow-y-scroll",
              {
                "min-h-10": selected.length === 0,
              },
            )}
          >
            {selected.map((option) => {
              return (
                <Badge
                  key={option.value}
                  className={cn(
                    badgeClassName,
                    "text-primary/80 hover:text-primary-foreground data-[disabled]:bg-muted-foreground data-[disabled]:text-muted data-[disabled]:hover:bg-muted-foreground",
                  )}
                  data-disabled={disabled || undefined}
                >
                  {option.label}
                  <button
                    type="button"
                    className={cn(
                      "bg-[#BCBCBC] ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2",
                      disabled && "hidden",
                    )}
                    onKeyDown={(e) => {
                      if (mustHaveOne && selected.length === 1) {
                        return;
                      }
                      if (e.key === "Enter") {
                        handleUnselect(option);
                      }
                    }}
                    onClick={() => {
                      if (mustHaveOne && selected.length === 1) {
                        return;
                      }
                      handleUnselect(option);
                    }}
                  >
                    <X className="size-3 text-muted hover:text-muted-foreground" />
                  </button>
                </Badge>
              );
            })}
            <select
              id={name}
              name={name}
              value={selected.map((item) => String(item.value))}
              onChange={() => {}}
              className="hidden"
              multiple
            >
              {selected.map((item) => (
                <option key={item.value} value={String(item.value)} />
              ))}
            </select>
            <CommandPrimitive.Input
              {...inputProps}
              ref={inputRef}
              value={inputValue}
              disabled={disabled}
              onValueChange={(value) => {
                setInputValue(value);
                inputProps?.onValueChange?.(value);
              }}
              onBlur={(event) => {
                if (!onScrollbar) {
                  setOpen(false);
                }
                inputProps?.onBlur?.(event);
              }}
              onFocus={(event) => {
                setOpen(true);
                inputProps?.onFocus?.(event);
              }}
              placeholder={hidePlaceholderWhenSelected && selected.length !== 0 ? "" : placeholder}
              className={cn(
                "flex-1 bg-transparent outline-none placeholder:text-muted-foreground placeholder:truncate placeholder:font-normal",
                {
                  "w-full": hidePlaceholderWhenSelected,
                  "px-3 py-2": selected.length === 0,
                  "ml-1": selected.length !== 0,
                },
                inputProps?.className,
              )}
              data-1p-ignore
            />
            <button
              type="button"
              onClick={() => {
                const newSelected = mustHaveOne ? selected.slice(0, 1) : [];
                setSelected(newSelected);
                onChange?.(newSelected);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const newSelected = mustHaveOne ? selected.slice(0, 1) : [];
                  setSelected(newSelected);
                  inputRef?.current?.focus();
                }
              }}
              className={cn(
                "absolute right-0 size-5 p-0",
                (hideClearAllButton || disabled || selected.length < 1) && "hidden",
              )}
            >
              <X className="size-5 text-muted-foreground hover:text-foreground" />
            </button>
          </div>
        </div>
        <div className="relative">
          {open && (
            <CommandList
              className="absolute top-1 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in"
              onMouseLeave={() => {
                setOnScrollbar(false);
              }}
              onMouseEnter={() => {
                setOnScrollbar(true);
              }}
              onMouseUp={() => {
                inputRef?.current?.focus();
              }}
            >
              {EmptyItem()}
              {!selectFirstItem && <CommandItem value="-" className="hidden" />}
              {selectables.map((option) => (
                <CommandItem
                  key={option.value}
                  value={`${option.label}-${option.value}`}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onSelect={() => {
                    if (isMultiple && selected.length >= maxSelected) {
                      onMaxSelected?.(selected.length);
                      return;
                    }
                    setInputValue("");
                    const newOptions = isMultiple ? [...selected, option] : [option];
                    setSelected(newOptions);
                    onChange?.(newOptions);
                  }}
                  className="cursor-pointer"
                >
                  {option.label}
                </CommandItem>
              ))}
            </CommandList>
          )}
        </div>
      </Command>
    );
  },
);

MultipleSelector.displayName = "MultipleSelector";
export { MultipleSelector };
