import type { Metadata } from "next";
import { Oswald, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/theme/ThemeScript";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { BotonReportar } from "@/components/layout/BotonReportar";

// Tres roles tipográficos: display (títulos/logo), body (interfaz),
// mono (horarios, precios, duraciones). Ver globals.css para los tokens
// de color que los acompañan.
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

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
    <html
      lang="es"
      className={`${oswald.variable} ${publicSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          {children}
          {/* Visible en toda la app, según el documento de contexto */}
          <BotonReportar />
        </ThemeProvider>
      </body>
    </html>
  );
}
