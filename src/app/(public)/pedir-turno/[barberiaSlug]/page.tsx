// Dentro de una barbería puntual: elegir barbero y luego servicio.
// TODO: fetch de empleados activos + sus EmpleadoServicio (precio/duración).

export default function ElegirBarberoYServicioPage({
  params,
}: {
  params: { barberiaSlug: string };
}) {
  return <main>{/* TODO: selector de barbero y servicio para {params.barberiaSlug} */}</main>;
}
