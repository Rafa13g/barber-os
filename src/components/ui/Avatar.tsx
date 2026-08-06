import { cn } from "@/lib/cn";

interface AvatarProps {
  nombre: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-16 w-16 text-lg",
};

function iniciales(nombre: string) {
  return nombre
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

// Placeholder visual — cuando exista fotoPerfilUrl real, esto se
// reemplaza por <img> con fallback a las iniciales.
export function Avatar({ nombre, size = "md", className }: AvatarProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-accent-soft font-display text-accent-strong",
        sizeStyles[size],
        className
      )}
    >
      {iniciales(nombre) || "?"}
    </div>
  );
}
