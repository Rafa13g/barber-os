import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

// Catálogo de servicios de la barbería (precio/duración base). El
// ajuste por barbero se hace en /perfil, no acá. Solo OWNER. Muestra.

const SERVICIOS_MUESTRA = [
  { nombre: "Corte de pelo", precio: 450, duracion: 30, activo: true },
  { nombre: "Corte + Barba", precio: 650, duracion: 45, activo: true },
  { nombre: "Barba", precio: 300, duracion: 20, activo: true },
  { nombre: "Coloración", precio: 900, duracion: 60, activo: false },
];

export default function ConfiguracionServiciosPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl uppercase tracking-wide text-ink">Servicios</h1>
          <p className="text-sm text-ink-muted">Catálogo general de la barbería</p>
        </div>
        <Button variant="primario" size="md">
          <Plus size={16} />
          Nuevo servicio
        </Button>
      </div>

      <Card className="p-0">
        <div className="divide-y divide-line">
          {SERVICIOS_MUESTRA.map((s) => (
            <div key={s.nombre} className="flex items-center gap-4 p-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-ink">{s.nombre}</p>
                <p className="font-mono text-xs text-ink-muted">{s.duracion} min</p>
              </div>
              <span className="font-mono text-sm text-ink">${s.precio}</span>
              <Badge tono={s.activo ? "exito" : "neutro"}>
                {s.activo ? "Activo" : "Inactivo"}
              </Badge>
              <Button variant="fantasma" size="sm">
                Editar
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
