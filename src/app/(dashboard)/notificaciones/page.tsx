import { Bell, CalendarX, CreditCard, Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

// Listado de notificaciones. Datos de muestra — el fetch real de
// Notificacion llega junto con la capa de datos.

const NOTIFICACIONES_MUESTRA = [
  {
    icono: CreditCard,
    titulo: "Tu suscripción vence en 3 días",
    mensaje: "Renová antes del 8/8 para que tu barbería no se desactive.",
    prioridad: "alta" as const,
    leida: false,
  },
  {
    icono: CalendarX,
    titulo: "Turno cancelado",
    mensaje: "Federico Díaz canceló su turno de las 14:00.",
    prioridad: "media" as const,
    leida: false,
  },
  {
    icono: Star,
    titulo: "Nueva reseña",
    mensaje: "Recibiste una reseña de 5 estrellas de Lucas Pereira.",
    prioridad: "baja" as const,
    leida: true,
  },
];

const BADGE_POR_PRIORIDAD = {
  alta: { tono: "peligro" as const, label: "Alta" },
  media: { tono: "acento" as const, label: "Media" },
  baja: { tono: "neutro" as const, label: "Baja" },
};

export default function NotificacionesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl uppercase tracking-wide text-ink">Notificaciones</h1>
        <p className="text-sm text-ink-muted">Vista de muestra</p>
      </div>

      <Card className="p-0">
        <div className="divide-y divide-line">
          {NOTIFICACIONES_MUESTRA.map((n, i) => {
            const badge = BADGE_POR_PRIORIDAD[n.prioridad];
            const Icono = n.icono;
            return (
              <div
                key={i}
                className={cn("flex items-start gap-3 p-4", !n.leida && "bg-accent-soft/30")}
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-sunken text-ink-muted">
                  <Icono size={15} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-ink">{n.titulo}</p>
                    {!n.leida && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                  </div>
                  <p className="mt-0.5 text-sm text-ink-muted">{n.mensaje}</p>
                </div>
                <Badge tono={badge.tono}>{badge.label}</Badge>
              </div>
            );
          })}
        </div>
      </Card>

      {NOTIFICACIONES_MUESTRA.length === 0 && (
        <Card className="flex flex-col items-center gap-2 py-14 text-center">
          <Bell size={24} className="text-ink-muted" />
          <p className="text-sm text-ink-muted">No tenés notificaciones</p>
        </Card>
      )}
    </div>
  );
}
