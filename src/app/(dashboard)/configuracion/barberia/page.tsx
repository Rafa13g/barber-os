import { Camera } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card, CardEyebrow, CardTitle } from "@/components/ui/Card";
import { Select } from "@/components/ui/Select";

// Datos generales de la barbería. Solo OWNER (el guard de rol se agrega
// junto con el login). Solo interfaz por ahora.

export default function ConfiguracionBarberiaPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl uppercase tracking-wide text-ink">Configuración</h1>
        <p className="text-sm text-ink-muted">Datos de la barbería — solo el dueño puede editarlos</p>
      </div>

      <Card>
        <CardEyebrow>Imágenes</CardEyebrow>
        <CardTitle>Logo y portada</CardTitle>
        <div className="mt-4 flex gap-4">
          <button
            type="button"
            className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-md border border-dashed border-line text-ink-muted hover:border-accent hover:text-accent"
          >
            <Camera size={18} />
            <span className="text-xs">Logo</span>
          </button>
          <button
            type="button"
            className="flex h-20 flex-1 flex-col items-center justify-center gap-1 rounded-md border border-dashed border-line text-ink-muted hover:border-accent hover:text-accent"
          >
            <Camera size={18} />
            <span className="text-xs">Portada</span>
          </button>
        </div>
      </Card>

      <Card>
        <CardEyebrow>General</CardEyebrow>
        <CardTitle>Información</CardTitle>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input label="Nombre" defaultValue="Mi Barbería" />
          <Input label="Teléfono" defaultValue="099 123 456" />
          <Input label="Ubicación" className="sm:col-span-2" defaultValue="Calle 123, Salto" />
          <Input label="Instagram" defaultValue="@mibarberia" />
          <Input label="WhatsApp" defaultValue="099 123 456" />
        </div>
      </Card>

      <Card>
        <CardEyebrow>Estado</CardEyebrow>
        <CardTitle>Disponibilidad del local</CardTitle>
        <div className="mt-4 flex items-end gap-4">
          <Select label="Estado" className="flex-1" defaultValue="activa">
            <option value="activa">Activa</option>
            <option value="cerrada">Cerrada temporalmente</option>
          </Select>
          <Input label="Hasta" type="date" className="flex-1" />
        </div>
        <Textarea label="Motivo (opcional)" className="mt-4" placeholder="Ej: vacaciones de invierno" />
      </Card>

      <Button variant="primario" size="md" className="w-full">
        Guardar cambios
      </Button>
    </div>
  );
}
