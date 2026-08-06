import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Tono = "neutro" | "acento" | "exito" | "peligro";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tono?: Tono;
}

const tonoStyles: Record<Tono, string> = {
  neutro: "bg-surface-sunken text-ink-muted",
  acento: "bg-accent-soft text-accent-strong",
  exito: "bg-success-soft text-success",
  peligro: "bg-danger-soft text-danger",
};

export function Badge({ className, tono = "neutro", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium",
        tonoStyles[tono],
        className
      )}
      {...props}
    />
  );
}
