import { Plus, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";

// Alta/baja de empleados. Solo OWNER. Datos de muestra.

const EMPLEADOS_MUESTRA = [
  { nombre: "Gonzalo Praderi", rol: "owner" as const },
  { nombre: "Nico Ferreira", rol: "employee" as const },
  { nombre: "Ale Cabrera", rol: "employee" as const },
];

export default function ConfiguracionEmpleadosPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl uppercase tracking-wide text-ink">Empleados</h1>
          <p className="text-sm text-ink-muted">Solo el dueño puede agregar o quitar empleados</p>
        </div>
        <Button variant="primario" size="md">
          <Plus size={16} />
          Agregar empleado
        </Button>
      </div>

      <Card className="p-0">
        <div className="divide-y divide-line">
          {EMPLEADOS_MUESTRA.map((e) => (
            <div key={e.nombre} className="flex items-center gap-3 p-4">
              <Avatar nombre={e.nombre} />
              <div className="flex-1">
                <p className="text-sm font-medium text-ink">{e.nombre}</p>
              </div>
              {e.rol === "owner" && (
                <Badge tono="acento">
                  <ShieldCheck size={12} className="mr-1 inline" />
                  Dueño
                </Badge>
              )}
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
