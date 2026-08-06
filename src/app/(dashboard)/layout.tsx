"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";

// Layout compartido por todo el panel del barbero/dueño.
//
// Todavía NO incluye: verificación de sesión, selector real de empleado,
// ni alertas de notificaciones en vivo — eso se conecta cuando armemos
// login y notificaciones. Por ahora es la estructura visual.

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar abierto={menuAbierto} onCerrar={() => setMenuAbierto(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar onAbrirMenu={() => setMenuAbierto(true)} />
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
