// Punto de entrada al escanear el QR único de una barbería.
// TODO: resolver {codigo} -> slugPublico y redirigir a /pedir-turno/[slug].

export default function EntradaQrPage({
  params,
}: {
  params: { codigo: string };
}) {
  return <main>{/* TODO: redirección según {params.codigo} */}</main>;
}
