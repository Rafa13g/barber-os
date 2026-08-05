// Botón/apartado de "reportar error o sugerencia".
// Requisito del documento de contexto: debe estar SIEMPRE visible, en
// TODA la app (no solo en el inicio). Por eso vive en el layout raíz,
// no en una página puntual.
//
// TODO (paso futuro): conectar con /api/contacto para que envíe el
// mensaje a netloom.uy@gmail.com. Por ahora es solo el placeholder visual.

export function BotonReportar() {
  return (
    <button
      type="button"
      aria-label="Reportar un error o sugerencia"
      className="fixed bottom-4 right-4 z-50 rounded-full border px-4 py-2 text-sm shadow-md"
    >
      {/* TODO: abrir modal / navegar a /reportar */}
      Reportar
    </button>
  );
}
