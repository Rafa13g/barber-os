import Link from "next/link";
import { CalendarCheck, LogIn, Scissors } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Pantalla de inicio pública. Solo interfaz — los botones ya apuntan a
// las rutas reales, pero esas rutas todavía no tienen lógica de negocio.

export default function InicioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <div className="mb-3 flex items-center gap-2 text-accent">
          <Scissors size={22} />
        </div>
        <h1 className="font-display text-4xl uppercase tracking-wide text-ink sm:text-5xl">
          Barber<span className="text-accent">OS</span>
        </h1>
        <p className="mt-3 max-w-md text-ink-muted">
          Turnos, clientes y agenda para barberías y peluquerías — todo en un
          solo lugar.
        </p>

        <div className="mt-10 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
          <Link href="/pedir-turno" className="flex-1">
            <Button variant="primario" size="md" className="w-full">
              <CalendarCheck size={16} />
              Pedir turno
            </Button>
          </Link>
          <Link href="/login" className="flex-1">
            <Button variant="secundario" size="md" className="w-full">
              <LogIn size={16} />
              Iniciar sesión
            </Button>
          </Link>
        </div>

        <Link href="/registro" className="mt-4 text-sm text-ink-muted hover:text-accent">
          ¿Tenés una barbería? Registrala acá
        </Link>
      </main>

      <footer className="flex flex-col items-center gap-2 border-t border-line px-4 py-6 text-center text-xs text-ink-muted">
        <Link href="/terminos" className="hover:text-accent">
          Términos y condiciones
        </Link>
        <span>
          Creado por{" "}
          <a
            href="https://netloom.uy"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-ink hover:text-accent"
          >
            NETLOOM
          </a>
        </span>
      </footer>
    </div>
  );
}
