"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  Bell,
  User,
  Settings,
  QrCode,
  BarChart3,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { cn } from "@/lib/cn";

// Estructura de navegación — sin lógica de permisos todavía (eso llega
// junto con el login). "soloOwner" queda anotado para cuando exista el
// guard real, no filtra nada por ahora.
const NAV_ITEMS = [
  { href: "/agenda", label: "Agenda", icon: CalendarDays },
  { href: "/notificaciones", label: "Notificaciones", icon: Bell },
  { href: "/perfil", label: "Perfil", icon: User },
  { href: "/qr-link", label: "QR y link", icon: QrCode },
  { href: "/reportes", label: "Reportes", icon: BarChart3 },
  { href: "/opciones", label: "Opciones", icon: SlidersHorizontal },
] as const;

const NAV_CONFIGURACION = { href: "/configuracion/barberia", label: "Configuración", icon: Settings, soloOwner: true } as const;

interface SidebarProps {
  abierto: boolean;
  onCerrar: () => void;
}

export function Sidebar({ abierto, onCerrar }: SidebarProps) {
  const pathname = usePathname();

  const itemActivo = (href: string) => pathname?.startsWith(href);

  const contenido = (
    <nav className="flex h-full flex-col gap-1 p-4">
      <div className="mb-6 flex items-center justify-between px-2">
        <span className="font-display text-xl uppercase tracking-wide text-ink">
          Barber<span className="text-accent">OS</span>
        </span>
        {/* Botón de cerrar, solo visible en el drawer mobile */}
        <button
          onClick={onCerrar}
          aria-label="Cerrar menú"
          className="rounded-md p-1 text-ink-muted hover:text-ink lg:hidden"
        >
          <X size={18} />
        </button>
      </div>

      <p className="px-2 pb-1 font-display text-xs uppercase tracking-widest text-ink-muted">
        Panel
      </p>
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
        <SidebarLink key={href} href={href} label={label} icon={Icon} activo={Boolean(itemActivo(href))} />
      ))}

      <p className="mt-6 px-2 pb-1 font-display text-xs uppercase tracking-widest text-ink-muted">
        Administración
      </p>
      <SidebarLink
        href={NAV_CONFIGURACION.href}
        label={NAV_CONFIGURACION.label}
        icon={NAV_CONFIGURACION.icon}
        activo={Boolean(itemActivo("/configuracion"))}
      />
    </nav>
  );

  return (
    <>
      {/* Desktop: fija, siempre visible */}
      <aside className="hidden w-60 shrink-0 border-r border-line bg-surface-raised lg:block">
        {contenido}
      </aside>

      {/* Mobile: drawer off-canvas */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          abierto ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          onClick={onCerrar}
          className={cn(
            "absolute inset-0 bg-black/40 transition-opacity",
            abierto ? "opacity-100" : "opacity-0"
          )}
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 w-64 bg-surface-raised shadow-xl transition-transform",
            abierto ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {contenido}
        </aside>
      </div>
    </>
  );
}

function SidebarLink({
  href,
  label,
  icon: Icon,
  activo,
}: {
  href: string;
  label: string;
  icon: typeof CalendarDays;
  activo: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-2.5 py-2 text-sm transition-colors",
        activo
          ? "clip-corner-sm bg-accent-soft font-medium text-accent-strong"
          : "text-ink-muted hover:bg-surface-sunken hover:text-ink"
      )}
    >
      <Icon size={17} strokeWidth={activo ? 2.5 : 2} />
      {label}
    </Link>
  );
}
