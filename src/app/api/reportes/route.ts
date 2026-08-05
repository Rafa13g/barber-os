// Generar y descargar reporte en Excel (ReporteDescargable).
// TODO: implementar en un paso futuro.

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { error: "No implementado todavía" },
    { status: 501 }
  );
}
