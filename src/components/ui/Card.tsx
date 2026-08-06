import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-line bg-surface-raised p-5",
        className
      )}
      {...props}
    />
  );
}

export function CardEyebrow({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  // Etiqueta pequeña con la esquina cortada — reutiliza el elemento de
  // firma para marcar la categoría/estado de una card (ej. "SERVICIO").
  return (
    <span
      className={cn(
        "clip-corner-sm mb-2 inline-block bg-accent-soft px-2 py-0.5 font-display text-xs uppercase tracking-wide text-accent-strong",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-display text-lg uppercase tracking-wide text-ink", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("mt-1 text-sm text-ink-muted", className)} {...props} />
  );
}
