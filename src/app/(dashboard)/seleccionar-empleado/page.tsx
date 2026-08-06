import Link from "next/link";
import { Scissors, LogOut } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";

// Tras el login, elegir "qué empleado soy". Lista de muestra —
// el fetch real de Empleado(activo=true) llega con la capa de datos.

const EMPLEADOS_MUESTRA = ["Gonzalo Praderi", "Nico Ferreira", "Ale Cabrera"];

export default function SeleccionarEmpleadoPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-surface px-4">
      <div className="flex flex-col items-center gap-2 text-center">
        <Scissors size={22} className="text-accent" />
        <h1 className="font-display text-2xl uppercase tracking-wide text-ink">
          ¿Quién sos?
        </h1>
        <p className="text-sm text-ink-muted">Elegí tu perfil para continuar</p>
      </div>

      <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-3">
        {EMPLEADOS_MUESTRA.map((nombre) => (
          <Link key={nombre} href="/agenda">
            <Card className="flex flex-col items-center gap-2 py-6 text-center transition-colors hover:border-accent">
              <Avatar nombre={nombre} size="lg" />
              <span className="text-sm font-medium text-ink">{nombre}</span>
            </Card>
          </Link>
        ))}
      </div>

      <Link href="/login" className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink">
        <LogOut size={14} />
        Cerrar sesión
      </Link>
    </div>
  );
}
