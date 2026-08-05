// Handler de NextAuth. Auth opción A: una cuenta (Usuario) por barbería.
// TODO: configurar NextAuth con credenciales (email + password contra
// usuarios.passwordHash) en un paso futuro dedicado a login.

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { error: "NextAuth no configurado todavía" },
    { status: 501 }
  );
}

export async function POST() {
  return NextResponse.json(
    { error: "NextAuth no configurado todavía" },
    { status: 501 }
  );
}
