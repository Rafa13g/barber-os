"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";

// Carga manual de un turno (botón "+" de la agenda), para clientes que
// no quieren usar la app. Solo interfaz — el submit no crea nada todavía.

export default function NuevoTurnoManualPage() {
  return (
    <div className="mx-auto flex max-w-lg flex-col gap-6">
      <Link href="/agenda" className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink">
        <ArrowLeft size={15} />
        Volver a la agenda
      </Link>

      <div>
        <h1 className="font-display text-2xl uppercase tracking-wide text-ink">Nuevo turno</h1>
        <p className="text-sm text-ink-muted">Cargalo manualmente si el cliente no usa la app</p>
      </div>

      <Card>
        <form className="flex flex-col gap-4">
          <Input label="Nombre completo del cliente" placeholder="Juan Pérez" />
          <Input label="Teléfono" type="tel" placeholder="099 123 456" />

          <div className="grid grid-cols-2 gap-4">
            <Select label="Barbero">
              <option>Vos</option>
              <option>Otro empleado</option>
            </Select>
            <Select label="Servicio">
              <option>Corte de pelo</option>
              <option>Corte + Barba</option>
              <option>Barba</option>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input label="Fecha" type="date" />
            <Input label="Hora" type="time" />
          </div>

          <Textarea label="Descripción (opcional)" placeholder="Ej: degradado medio, con línea" />

          <Button type="submit" variant="primario" size="md" className="mt-1 w-full">
            Guardar turno
          </Button>
        </form>
      </Card>
    </div>
  );
}
