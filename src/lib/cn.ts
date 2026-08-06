import { clsx, type ClassValue } from "clsx";

// Helper mínimo para combinar clases condicionalmente. Si más adelante
// necesitamos resolver conflictos de utilidades de Tailwind (ej. dos
// "p-4"/"p-2" pisándose), se puede sumar tailwind-merge acá sin tocar
// los componentes que ya usan cn().
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
