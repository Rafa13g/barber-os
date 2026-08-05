// Recibe el formulario del botón 'Reportar' y lo envía a netloom.uy@gmail.com.
// TODO: implementar en un paso futuro.

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { error: "No implementado todavía" },
    { status: 501 }
  );
}
