"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Trash2, Scissors } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card, CardEyebrow, CardTitle, CardDescription } from "@/components/ui/Card";
import { Switch } from "@/components/ui/Switch";

// Alta de una nueva barbería. Solo interfaz — el "agregar servicio" es
// puramente visual (estado local), no persiste nada. El submit real y
// la creación de Barberia + Usuario + Empleado(OWNER) llegan después.

const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

interface FilaServicio {
  id: number;
}

export default function RegistroPage() {
  const [servicios, setServicios] = useState<FilaServicio[]>([{ id: 1 }]);
  const [diasAbiertos, setDiasAbiertos] = useState<Record<string, boolean>>(
    Object.fromEntries(DIAS.map((d) => [d, d !== "Domingo"]))
  );

  function agregarServicio() {
    setServicios((prev) => [...prev, { id: Date.now() }]);
  }

  function quitarServicio(id: number) {
    setServicios((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col gap-6 px-4 py-12">
      <div className="flex flex-col items-center gap-2 text-center">
        <Scissors size={22} className="text-accent" />
        <h1 className="font-display text-2xl uppercase tracking-wide text-ink">
          Registrá tu barbería
        </h1>
        <p className="text-sm text-ink-muted">
          7 días gratis para probar BarberOS, sin tarjeta.
        </p>
      </div>

      <form className="flex flex-col gap-6">
        <Card>
          <CardEyebrow>Datos de la barbería</CardEyebrow>
          <CardTitle>Información general</CardTitle>
          <CardDescription>Estos datos se pueden editar después desde Configuración.</CardDescription>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input label="Nombre de la barbería" placeholder="Barbería El Corte" />
            <Input label="Teléfono" type="tel" placeholder="099 123 456" />
            <Input label="Ubicación" className="sm:col-span-2" placeholder="Calle 123, Salto" />
            <Input label="Instagram (opcional)" placeholder="@mibarberia" />
            <Input label="WhatsApp (opcional)" placeholder="099 123 456" />
          </div>
        </Card>

        <Card>
          <CardEyebrow>Cuenta de acceso</CardEyebrow>
          <CardTitle>Login</CardTitle>
          <CardDescription>Con esta cuenta van a ingresar todos los empleados de la barbería.</CardDescription>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input label="Email" type="email" placeholder="tubarberia@email.com" />
            <Input label="Contraseña" type="password" placeholder="••••••••" />
          </div>
        </Card>

        <Card>
          <CardEyebrow>Servicios</CardEyebrow>
          <CardTitle>¿Qué servicios ofrecés?</CardTitle>
          <CardDescription>Podés agregar precio y duración por barbero más adelante.</CardDescription>

          <div className="mt-4 flex flex-col gap-3">
            {servicios.map((s, i) => (
              <div key={s.id} className="flex items-end gap-2">
                <Input label={i === 0 ? "Servicio" : undefined} placeholder="Corte de pelo" className="flex-1" />
                <Input label={i === 0 ? "Precio" : undefined} type="number" placeholder="$" className="w-24" />
                <Input label={i === 0 ? "Duración (min)" : undefined} type="number" placeholder="30" className="w-28" />
                <Button
                  type="button"
                  variant="fantasma"
                  size="md"
                  onClick={() => quitarServicio(s.id)}
                  aria-label="Quitar servicio"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            ))}
          </div>

          <Button type="button" variant="secundario" size="sm" className="mt-3" onClick={agregarServicio}>
            <Plus size={14} />
            Agregar servicio
          </Button>
        </Card>

        <Card>
          <CardEyebrow>Horarios</CardEyebrow>
          <CardTitle>Días de atención</CardTitle>
          <CardDescription>Los horarios puntuales de cada barbero se ajustan en su perfil.</CardDescription>

          <div className="mt-4 flex flex-col divide-y divide-line">
            {DIAS.map((dia) => (
              <div key={dia} className="flex items-center justify-between py-2.5">
                <Switch
                  label={dia}
                  checked={diasAbiertos[dia]}
                  onChange={(valor) =>
                    setDiasAbiertos((prev) => ({ ...prev, [dia]: valor }))
                  }
                />
                {diasAbiertos[dia] && (
                  <div className="flex items-center gap-2">
                    <Input type="time" defaultValue="09:00" className="w-28" />
                    <span className="text-sm text-ink-muted">a</span>
                    <Input type="time" defaultValue="19:00" className="w-28" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardEyebrow>Opcional</CardEyebrow>
          <CardTitle>Algo más para contarnos</CardTitle>
          <Textarea className="mt-3" placeholder="Cantidad de empleados, algo particular de tu barbería, etc." />
        </Card>

        <Button type="submit" variant="primario" size="md" className="w-full">
          Crear mi barbería
        </Button>
      </form>

      <p className="text-center text-sm text-ink-muted">
        ¿Ya tenés cuenta?{" "}
        <Link href="/login" className="font-medium text-accent hover:text-accent-strong">
          Iniciar sesión
        </Link>
      </p>
    </div>
  );
}
