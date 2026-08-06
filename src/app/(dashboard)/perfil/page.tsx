"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardEyebrow, CardTitle } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";

// Perfil del empleado activo: nombre, foto, servicios propios,
// vacaciones, horarios. Los datos generales de la barbería NO se
// editan acá (eso es /configuracion/barberia, solo para OWNER).
// Solo interfaz — estado local, no persiste nada todavía.

export default function PerfilPage() {
  const [nombre, setNombre] = useState("Nombre del empleado");
  const [vacaciones, setVacaciones] = useState<{ id: number; desde: string; hasta: string }[]>([]);

  function agregarVacacion() {
    setVacaciones((prev) => [...prev, { id: Date.now(), desde: "", hasta: "" }]);
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <h1 className="font-display text-2xl uppercase tracking-wide text-ink">Mi perfil</h1>

      <Card>
        <div className="flex items-center gap-4">
          <Avatar nombre={nombre} size="lg" />
          <div>
            <Button type="button" variant="secundario" size="sm">
              Cambiar foto
            </Button>
          </div>
        </div>
        <Input
          label="Nombre"
          className="mt-4"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </Card>

      <Card>
        <CardEyebrow>Mis servicios</CardEyebrow>
        <CardTitle>Precio y duración</CardTitle>
        <div className="mt-4 flex flex-col divide-y divide-line">
          {[
            { nombre: "Corte de pelo", precio: 450, duracion: 30 },
            { nombre: "Corte + Barba", precio: 650, duracion: 45 },
          ].map((s) => (
            <div key={s.nombre} className="flex items-center justify-between py-3">
              <span className="text-sm text-ink">{s.nombre}</span>
              <div className="flex items-center gap-2">
                <Input type="number" defaultValue={s.precio} className="w-24" />
                <Input type="number" defaultValue={s.duracion} className="w-20" />
                <span className="text-xs text-ink-muted">min</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <CardEyebrow>Vacaciones</CardEyebrow>
        <CardTitle>Días que no vas a trabajar</CardTitle>

        <div className="mt-4 flex flex-col gap-3">
          {vacaciones.map((v) => (
            <div key={v.id} className="flex items-end gap-2">
              <Input label="Desde" type="date" className="flex-1" />
              <Input label="Hasta" type="date" className="flex-1" />
              <Button
                type="button"
                variant="fantasma"
                size="md"
                onClick={() => setVacaciones((prev) => prev.filter((x) => x.id !== v.id))}
                aria-label="Quitar"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
        </div>

        <Button type="button" variant="secundario" size="sm" className="mt-3" onClick={agregarVacacion}>
          <Plus size={14} />
          Agregar período
        </Button>
      </Card>

      <Button type="button" variant="primario" size="md" className="w-full">
        Guardar cambios
      </Button>
    </div>
  );
}
