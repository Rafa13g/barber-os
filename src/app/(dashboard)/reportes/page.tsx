import { Download, Users, DollarSign, Scissors } from "lucide-react";
import { Card, CardEyebrow, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

// Reportes: clientes atendidos, ganancias, etc. Empleado ve el propio;
// solo OWNER ve el de toda la barbería. Datos de muestra hardcodeados.

const METRICAS = [
  { icono: Users, label: "Clientes atendidos", valor: "128", periodo: "este mes" },
  { icono: DollarSign, label: "Ganancias", valor: "$54.200", periodo: "este mes" },
  { icono: Scissors, label: "Servicio más pedido", valor: "Corte + Barba", periodo: "" },
];

export default function ReportesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl uppercase tracking-wide text-ink">Reportes</h1>
          <p className="text-sm text-ink-muted">Vista de muestra — datos ficticios</p>
        </div>
        <div className="flex items-center gap-2">
          <Select className="w-40" defaultValue="mio">
            <option value="mio">Mi reporte</option>
            <option value="barberia">Toda la barbería</option>
          </Select>
          <Button variant="secundario" size="md">
            <Download size={15} />
            Excel
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {METRICAS.map(({ icono: Icono, label, valor, periodo }) => (
          <Card key={label}>
            <div className="flex items-center gap-2 text-ink-muted">
              <Icono size={16} />
              <span className="text-sm">{label}</span>
            </div>
            <p className="mt-2 font-display text-2xl text-ink">{valor}</p>
            {periodo && <p className="text-xs text-ink-muted">{periodo}</p>}
          </Card>
        ))}
      </div>

      <Card>
        <CardEyebrow>Detalle</CardEyebrow>
        <CardTitle>Turnos completados</CardTitle>
        <div className="mt-4 flex flex-col divide-y divide-line">
          {[
            { fecha: "04/08", cliente: "Martín Sosa", servicio: "Corte de pelo", monto: 450 },
            { fecha: "04/08", cliente: "Lucas Pereira", servicio: "Barba", monto: 300 },
            { fecha: "03/08", cliente: "Federico Díaz", servicio: "Corte + Barba", monto: 650 },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between py-2.5 text-sm">
              <span className="w-14 font-mono text-ink-muted">{r.fecha}</span>
              <span className="flex-1 text-ink">{r.cliente}</span>
              <span className="text-ink-muted">{r.servicio}</span>
              <span className="w-16 text-right font-mono text-ink">${r.monto}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
