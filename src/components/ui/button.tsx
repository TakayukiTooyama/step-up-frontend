import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "rounded-lg cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:bg-[#D3D3D3] disabled:text-white disabled:border-none overflow-hidden w-fit shrink-0",
  {
    variants: {
      size: {
        sm: "h-8 p-2",
        default: "h-10 px-4 py-2",
        lg: "h-10 px-8 py-3",
        icon: "size-10",
      },
      variant: {
        default: "bg-white text-primary-foreground border border-[#D3D3D3] hover:bg-[#F9F9FC]",
        primary: "bg-[#0259F0] text-white hover:bg-[#0972FF]",
        secondary:
          "bg-white text-[#0259F0] hover:bg-[#0259F0] hover:text-white border border-[#0259F0]",
        outline: "border hover:bg-[#0259F0] hover:text-white",
        ghost: "hover:bg-[#0259F0] hover:text-white",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-[#0259F0] underline-offset-4 hover:underline hover:text-[#0972FF] p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size,
      icon,
      iconPosition = "left",
      asChild = false,
      fullWidth = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), fullWidth && "w-full shrink")}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
