import Link from "next/link";
import { Scissors } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";

// Login de la cuenta de la barbería (email + password). Auth opción A:
// una sola cuenta por barbería. Solo interfaz — el submit no hace nada
// todavía, se conecta cuando armemos NextAuth.

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="w-full max-w-sm">
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <Scissors size={22} className="text-accent" />
          <h1 className="font-display text-2xl uppercase tracking-wide text-ink">
            Barber<span className="text-accent">OS</span>
          </h1>
          <p className="text-sm text-ink-muted">Ingresá con la cuenta de tu barbería</p>
        </div>

        <Card>
          <form className="flex flex-col gap-4">
            <Input label="Email" type="email" placeholder="tubarberia@email.com" />
            <Input label="Contraseña" type="password" placeholder="••••••••" />

            <Button type="submit" variant="primario" size="md" className="mt-1 w-full">
              Ingresar
            </Button>
          </form>
        </Card>

        <p className="mt-4 text-center text-sm text-ink-muted">
          ¿No tenés cuenta todavía?{" "}
          <Link href="/registro" className="font-medium text-accent hover:text-accent-strong">
            Registrá tu barbería
          </Link>
        </p>
      </div>
    </div>
  );
}
