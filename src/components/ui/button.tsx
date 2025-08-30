import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-md)] [font:var(--font-text-s-medium)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-background-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background-primary)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-background-brand)] text-[var(--color-content-primary-inverse)] hover:bg-[var(--color-background-brand-hover)]",
        destructive:
          "bg-[var(--color-background-negative)] text-[var(--color-content-primary-inverse)] hover:bg-[var(--color-background-negative-hover)]",
        outline:
          "border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] hover:bg-[var(--color-background-hover)] hover:text-[var(--color-content-primary)]",
        secondary:
          "bg-[var(--color-background-hover)] text-[var(--color-content-primary)] hover:bg-[var(--color-background-pressed)]",
        ghost:
          "hover:bg-[var(--color-background-hover)] hover:text-[var(--color-content-primary)]",
        link: "text-[var(--color-content-link)] underline-offset-4 hover:underline hover:text-[var(--color-content-link-hover)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-[var(--radius-md)] px-3",
        lg: "h-11 rounded-[var(--radius-md)] px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
