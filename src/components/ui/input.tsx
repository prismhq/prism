import * as React from "react";

import { cn } from "../../lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-[var(--color-content-primary)] placeholder:text-[var(--color-content-secondary)] selection:bg-[var(--color-background-brand)] selection:text-[var(--color-content-primary-inverse)] dark:bg-[var(--color-background-primary)]/30 border-[var(--color-border-primary)] flex h-9 w-full min-w-0 rounded-[var(--radius-md)] border bg-transparent px-3 py-1 [font:var(--font-text-m-regular)] shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:[font:var(--font-text-s-medium)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:[font:var(--font-text-s-regular)]",
        "focus-visible:border-[var(--color-border-focus)] focus-visible:ring-[var(--color-border-focus)]/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-[var(--color-background-negative)]/20 dark:aria-invalid:ring-[var(--color-background-negative)]/40 aria-invalid:border-[var(--color-content-negative)]",
        className
      )}
      {...props}
    />
  );
}

export { Input };
