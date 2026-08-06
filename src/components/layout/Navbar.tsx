"use client";

import { Menu, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

interface NavbarProps {
  onAbrirMenu: () => void;
}

export function Navbar({ onAbrirMenu }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-line bg-surface-raised px-4 lg:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onAbrirMenu}
          aria-label="Abrir menú"
          className="rounded-md p-2 text-ink-muted hover:bg-surface-sunken hover:text-ink lg:hidden"
        >
          <Menu size={20} />
        </button>

        {/* Selector de barbería/empleado activo — placeholder visual,
            se conecta a la sesión real cuando armemos el login. */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-md border border-line px-3 py-1.5 text-sm text-ink hover:border-accent"
        >
          <span className="font-medium">Mi Barbería</span>
          <ChevronDown size={15} className="text-ink-muted" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        {/* Avatar del empleado activo — placeholder */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft font-display text-sm text-accent-strong">
          ?
        </div>
      </div>
    </header>
  );
}
