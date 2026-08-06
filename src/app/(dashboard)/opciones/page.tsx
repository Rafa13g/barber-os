"use client";

import { LogOut } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/Card";
import { Switch } from "@/components/ui/Switch";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/theme/ThemeProvider";

// Sonido on/off, tema claro/oscuro, cerrar sesión. El toggle de tema ya
// funciona de verdad (usa el ThemeProvider real); sonido es solo
// interfaz por ahora — falta el sistema de sonido en sí.

export default function OpcionesPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="mx-auto flex max-w-lg flex-col gap-6">
      <h1 className="font-display text-2xl uppercase tracking-wide text-ink">Opciones</h1>

      <Card>
        <CardTitle>Preferencias</CardTitle>
        <div className="mt-4 flex flex-col gap-4">
          <Switch label="Sonido de notificaciones" checked={true} onChange={() => {}} />
          <Switch
            label="Tema oscuro"
            checked={theme === "oscuro"}
            onChange={toggleTheme}
          />
        </div>
      </Card>

      <Card>
        <Button variant="peligro" size="md" className="w-full">
          <LogOut size={16} />
          Cerrar sesión
        </Button>
      </Card>
    </div>
  );
}
