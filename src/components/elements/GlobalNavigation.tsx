"use client";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCaretRight } from "react-icons/fa6";

const navigationItems = [
  {
    title: "基礎編",
    items: [
      { title: "1-1", url: "/01-basic/1-1" },
      { title: "1-1-tips", url: "/01-basic/1-1-tips" },
      { title: "1-2", url: "/01-basic/1-2" },
      { title: "1-3", url: "/01-basic/1-3" },
      { title: "1-4", url: "/01-basic/1-4" },
      { title: "1-5", url: "/01-basic/1-5" },
    ],
  },
  {
    title: "応用編",
    items: [
      { title: "2-1", url: "/02-advanced/2-1" },
      { title: "2-2", url: "/02-advanced/2-2" },
      { title: "2-3", url: "/02-advanced/2-3" },
      { title: "2-4", url: "/02-advanced/2-4" },
      { title: "2-5", url: "/02-advanced/2-5" },
    ],
  },
];

const commonStyle = "w-full cursor-pointer hover:bg-white hover:drop-shadow rounded-md";
const navItemStyle = "text-base font-normal p-2";
const navSubItemStyle = "px-2 py-1";
const collapsibleStyle = "flex items-center justify-between";
const iconStyle = "size-4";
const iconTitleRowStyle = "flex items-center gap-3";
const currentPageStyle = "bg-white drop-shadow rounded-md";

export const GlobalNavigation = () => {
  const pathname = usePathname();

  /**
   * 現在のパスとナビゲーション項目のURLが一致するかを判定する関数
   */
  const isCurrentPage = (currentPath: string, itemUrl: string): boolean => {
    // nullやundefinedのチェック
    if (!currentPath || !itemUrl) return false;

    const pathSegments = currentPath.split("/").filter(Boolean);
    const itemSegments = itemUrl.split("/").filter(Boolean);

    // 空の配列になる場合の対応
    if (pathSegments.length === 0 || itemSegments.length === 0) return false;

    // 最初のセグメントが一致するかの確認
    if (pathSegments[0] === itemSegments[0]) {
      // 2つ目のセグメントがあるかの確認
      if (pathSegments.length > 1 && itemSegments.length > 1) {
        return pathSegments[1] === itemSegments[1];
      }
      // 2つ目のセグメントがない場合は最初のセグメントだけで判定
      return true;
    }
    return false;
  };

  return (
    <Sidebar className="bg-[#F9F9FC] z-50">
      <SidebarHeader className="mt-2 pt-4 pb-2 pl-4 pr-6">
        <Link
          href="/"
          className="hover:cursor-pointer hover:opacity-70 size-full flex items-center gap-2 font-bold"
        >
          React/Next研修
        </Link>
      </SidebarHeader>

      <SidebarContent className="gap-0">
        {navigationItems.map((section) => (
          <SidebarGroup key={section.title}>
            <Collapsible defaultOpen className="group/collapsible">
              {/* 折りたたみボタン */}
              <CollapsibleTrigger className={cn(commonStyle, navItemStyle, collapsibleStyle)}>
                <div className={iconTitleRowStyle}>{section.title}</div>
                {/* NOTE:閉じている時は右向き、開いている時下向きになるようにアイコンを回転 */}
                <FaCaretRight
                  className={cn(
                    "transition-transform group-data-[state=open]/collapsible:rotate-90",
                    iconStyle,
                  )}
                />
              </CollapsibleTrigger>

              {/* 折りたたまれた各ページのリンク */}
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenuSub className="border-l-2">
                    {section.items.map((item) => (
                      <SidebarMenuSubItem
                        key={item.title}
                        className={cn(
                          commonStyle,
                          navSubItemStyle,
                          isCurrentPage(pathname, item.url) && currentPageStyle,
                        )}
                      >
                        <SidebarMenuSubButton
                          asChild
                          className="hover:bg-white data-[active=true]:bg-white "
                        >
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
