import { CheckCircle2 } from "lucide-react";
import { Card, CardEyebrow, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

// Estado de la suscripción, historial de pagos, pagar/renovar.
// Datos de muestra — se conecta cuando armemos la lógica de pagos.

export default function ConfiguracionSuscripcionPage() {
  return (
    <div className="mx-auto flex max-w-lg flex-col gap-6">
      <h1 className="font-display text-2xl uppercase tracking-wide text-ink">Suscripción</h1>

      <Card>
        <div className="flex items-center justify-between">
          <CardEyebrow>Plan actual</CardEyebrow>
          <Badge tono="acento">Trial</Badge>
        </div>
        <CardTitle>Te quedan 4 días de prueba</CardTitle>
        <CardDescription>El 9 de agosto vas a tener que elegir un plan para seguir usando BarberOS.</CardDescription>

        <div className="mt-4 flex gap-3">
          <Button variant="primario" size="md" className="flex-1">
            Elegir plan mensual
          </Button>
          <Button variant="secundario" size="md" className="flex-1">
            Elegir plan anual
          </Button>
        </div>
      </Card>

      <Card>
        <CardEyebrow>Métodos de pago</CardEyebrow>
        <CardTitle>Disponibles</CardTitle>
        <div className="mt-3 flex flex-col gap-2 text-sm text-ink-muted">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-success" /> PayPal
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-success" /> Prex
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-success" /> BROU
          </span>
        </div>
      </Card>

      <Card>
        <CardEyebrow>Historial</CardEyebrow>
        <CardTitle>Pagos</CardTitle>
        <p className="mt-3 text-sm text-ink-muted">Todavía no tenés pagos registrados.</p>
      </Card>
    </div>
  );
}
