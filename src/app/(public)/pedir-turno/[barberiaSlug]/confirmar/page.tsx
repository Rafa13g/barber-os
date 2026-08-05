// Formulario final: nombre completo, teléfono, descripción de lo que
// quiere el cliente. Al confirmar, crea el Turno (y el Cliente si no
// existía ya con ese teléfono en esta barbería).
// TODO: formulario + POST a /api/turnos.

export default function ConfirmarTurnoPage({
  params,
}: {
  params: { barberiaSlug: string };
}) {
  return <main>{/* TODO: formulario de confirmación para {params.barberiaSlug} */}</main>;
}
