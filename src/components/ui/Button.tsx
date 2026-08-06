import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primario" | "secundario" | "fantasma" | "peligro";
type Size = "sm" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variantStyles: Record<Variant, string> = {
  // El botón primario lleva el elemento de firma (esquina cortada).
  primario:
    "clip-corner-sm bg-accent text-on-accent hover:bg-accent-strong",
  secundario:
    "rounded-md border border-line bg-transparent text-ink hover:border-accent hover:text-accent",
  fantasma: "rounded-md text-ink-muted hover:bg-surface-sunken hover:text-ink",
  peligro: "rounded-md bg-danger text-white hover:opacity-90",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primario", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
