// Cron diario: TRIAL/ACTIVA -> EN_GRACIA -> DESACTIVADA (y reactivación al detectar pago).
// TODO: implementar en un paso futuro.

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { error: "No implementado todavía" },
    { status: 501 }
  );
}
