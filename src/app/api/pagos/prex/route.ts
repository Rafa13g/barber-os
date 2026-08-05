// Placeholder: integración de pago con Prex (Uruguay), pendiente de credenciales.
// TODO: implementar en un paso futuro.

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { error: "No implementado todavía" },
    { status: 501 }
  );
}
