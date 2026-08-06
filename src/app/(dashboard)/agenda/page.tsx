import Link from "next/link";
import { Plus, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Select } from "@/components/ui/Select";
import { Avatar } from "@/components/ui/Avatar";

// Vista de agenda del empleado activo: día / semana / mes.
// Datos de muestra hardcodeados solo para maquetar — el fetch real de
// Turno llega junto con la capa de datos.

const TURNOS_MUESTRA = [
  { hora: "09:00", cliente: "Martín Sosa", servicio: "Corte de pelo", precio: 450, estado: "confirmado" as const },
  { hora: "09:40", cliente: "Federico Díaz", servicio: "Corte + Barba", precio: 650, estado: "pendiente" as const },
  { hora: "10:30", cliente: "Lucas Pereira", servicio: "Barba", precio: 300, estado: "confirmado" as const },
  { hora: "11:15", cliente: "—", servicio: "—", precio: 0, estado: "libre" as const },
  { hora: "12:00", cliente: "Ignacio Rivas", servicio: "Corte de pelo", precio: 450, estado: "cancelado" as const },
];

const BADGE_POR_ESTADO = {
  confirmado: { tono: "exito" as const, label: "Confirmado" },
  pendiente: { tono: "acento" as const, label: "Pendiente" },
  cancelado: { tono: "peligro" as const, label: "Cancelado" },
  libre: { tono: "neutro" as const, label: "Libre" },
};

export default function AgendaPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl uppercase tracking-wide text-ink">Agenda</h1>
          <p className="text-sm text-ink-muted">Martes 5 de agosto — vista de muestra</p>
        </div>
        <Link href="/agenda/nuevo-turno">
          <Button variant="primario" size="md">
            <Plus size={16} />
            Nuevo turno
          </Button>
        </Link>
      </div>

      {/* Barra de filtros — solo interfaz, no filtra nada todavía */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex rounded-md border border-line p-0.5">
          {["Día", "Semana", "Mes"].map((vista, i) => (
            <button
              key={vista}
              type="button"
              className={`rounded-sm px-3 py-1.5 text-sm ${
                i === 0 ? "bg-accent-soft text-accent-strong" : "text-ink-muted hover:text-ink"
              }`}
            >
              {vista}
            </button>
          ))}
        </div>
        <Select className="w-44" defaultValue="llegada">
          <option value="llegada">Horario de llegada</option>
          <option value="mayor-valor">Mayor valor</option>
          <option value="menor-valor">Menor valor</option>
          <option value="servicio">Tipo de servicio</option>
        </Select>
      </div>

      <Card className="p-0">
        <div className="divide-y divide-line">
          {TURNOS_MUESTRA.map((t, i) => {
            const badge = BADGE_POR_ESTADO[t.estado];
            const libre = t.estado === "libre";
            return (
              <div key={i} className="flex items-center gap-4 p-4">
                <div className="flex w-16 items-center gap-1.5 font-mono text-sm text-ink-muted">
                  <Clock size={13} />
                  {t.hora}
                </div>

                {libre ? (
                  <span className="text-sm text-ink-muted">Horario disponible</span>
                ) : (
                  <>
                    <Avatar nombre={t.cliente} size="sm" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-ink">{t.cliente}</p>
                      <p className="truncate text-xs text-ink-muted">{t.servicio}</p>
                    </div>
                    <span className="font-mono text-sm text-ink">${t.precio}</span>
                  </>
                )}

                <Badge tono={badge.tono}>{badge.label}</Badge>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
