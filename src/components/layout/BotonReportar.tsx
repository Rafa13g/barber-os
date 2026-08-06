// Botón/apartado de "reportar error o sugerencia".
// Requisito del documento de contexto: debe estar SIEMPRE visible, en
// TODA la app (no solo en el inicio). Por eso vive en el layout raíz,
// no en una página puntual.
//
// TODO (paso futuro): conectar con /api/contacto para que envíe el
// mensaje a netloom.uy@gmail.com. Por ahora es solo el placeholder visual.

import { MessageCircleWarning } from "lucide-react";

export function BotonReportar() {
  return (
    <button
      type="button"
      aria-label="Reportar un error o sugerencia"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-line bg-surface-raised px-4 py-2.5 text-sm font-medium text-ink-muted shadow-lg transition-colors hover:border-accent hover:text-accent"
    >
      {/* TODO: abrir modal / navegar a /reportar */}
      <MessageCircleWarning size={16} />
      Reportar
    </button>
  );
}
