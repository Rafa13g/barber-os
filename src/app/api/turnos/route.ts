// Crear turno (POST, cliente público) / listar turnos (GET, dashboard).
// TODO: implementar en un paso futuro.

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { error: "No implementado todavía" },
    { status: 501 }
  );
}
