import type { Metadata } from "next";
import "./globals.css";
import { BotonReportar } from "@/components/layout/BotonReportar";

export const metadata: Metadata = {
  title: "BarberOS",
  description: "Gestión de turnos para barberías y peluquerías",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        {/* Visible en toda la app, según el documento de contexto */}
        <BotonReportar />
      </body>
    </html>
  );
}
