// Grilla de horarios disponibles según el servicio elegido.
// Los horarios ocupados se muestran en gris (no seleccionables).
// TODO: calcular slots libres cruzando Horario + Cierre + Turno existentes.

export default function ElegirHorarioPage({
  params,
}: {
  params: { barberiaSlug: string };
}) {
  return <main>{/* TODO: grilla de horarios para {params.barberiaSlug} */}</main>;
}
