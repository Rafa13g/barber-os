"use client";

import { QrCode, Copy, Star } from "lucide-react";
import { Card, CardEyebrow, CardTitle, CardDescription } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

// QR y link únicos de la barbería. El QR real se genera a partir del
// link (no se guarda en base) — acá va un placeholder visual.

export default function QrYLinkPage() {
  const linkMuestra = "barberos.app/b/mi-barberia";

  return (
    <div className="mx-auto flex max-w-lg flex-col gap-6">
      <h1 className="font-display text-2xl uppercase tracking-wide text-ink">QR y link</h1>

      <Card className="flex flex-col items-center gap-4 text-center">
        <CardEyebrow>Compartir</CardEyebrow>
        <CardTitle>Tu código para pedir turno</CardTitle>
        <CardDescription>
          Compartilo en tus redes o pegalo en el local. Lleva directo a pedir
          turno o dejar una reseña.
        </CardDescription>

        <div className="flex h-40 w-40 items-center justify-center rounded-md border border-dashed border-line bg-surface-sunken">
          <QrCode size={64} className="text-ink-muted" />
        </div>

        <div className="flex w-full items-center gap-2">
          <Input value={linkMuestra} readOnly className="flex-1 font-mono text-sm" />
          <Button type="button" variant="secundario" size="md" aria-label="Copiar link">
            <Copy size={16} />
          </Button>
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-2">
          <Star size={16} className="text-accent" />
          <CardTitle>Reseñas</CardTitle>
        </div>
        <CardDescription>
          Las reseñas que dejen tus clientes desde este link van a aparecer acá.
        </CardDescription>
      </Card>
    </div>
  );
}
