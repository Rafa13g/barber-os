"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardEyebrow, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Switch } from "@/components/ui/Switch";

// Horarios de atención generales y cierres de toda la barbería. Los
// horarios/vacaciones de cada empleado se editan en su perfil. Solo OWNER.

const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

export default function ConfiguracionHorariosPage() {
  const [diasAbiertos, setDiasAbiertos] = useState<Record<string, boolean>>(
    Object.fromEntries(DIAS.map((d) => [d, d !== "Domingo"]))
  );

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl uppercase tracking-wide text-ink">Horarios</h1>
        <p className="text-sm text-ink-muted">Horario general de atención de la barbería</p>
      </div>

      <Card>
        <div className="flex flex-col divide-y divide-line">
          {DIAS.map((dia) => (
            <div key={dia} className="flex items-center justify-between py-3">
              <Switch
                label={dia}
                checked={diasAbiertos[dia]}
                onChange={(valor) => setDiasAbiertos((prev) => ({ ...prev, [dia]: valor }))}
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
        <CardEyebrow>Cierre extraordinario</CardEyebrow>
        <CardTitle>Cerrar la barbería temporalmente</CardTitle>
        <div className="mt-4 flex items-end gap-4">
          <Input label="Desde" type="date" className="flex-1" />
          <Input label="Hasta" type="date" className="flex-1" />
        </div>
      </Card>

      <Button variant="primario" size="md" className="w-full">
        Guardar cambios
      </Button>
    </div>
  );
}
