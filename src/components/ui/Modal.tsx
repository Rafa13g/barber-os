"use client";

import { type ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

interface ModalProps {
  abierto: boolean;
  onCerrar: () => void;
  titulo?: string;
  children: ReactNode;
  className?: string;
}

// Modal simple, sin portal externo (alcanza con fixed + z-index acá).
// Solo interfaz: no maneja foco atrapado ni animaciones complejas todavía.
export function Modal({ abierto, onCerrar, titulo, children, className }: ModalProps) {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onCerrar();
    }
    if (abierto) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [abierto, onCerrar]);

  if (!abierto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onCerrar}
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative w-full max-w-md rounded-lg border border-line bg-surface-raised p-6 shadow-xl",
          className
        )}
      >
        {titulo && (
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              {titulo}
            </h2>
            <button
              onClick={onCerrar}
              aria-label="Cerrar"
              className="rounded-md p-1 text-ink-muted hover:bg-surface-sunken hover:text-ink"
            >
              <X size={18} />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
