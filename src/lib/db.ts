import { PrismaClient } from "@prisma/client";

// En desarrollo, Next.js recarga módulos en cada cambio (hot-reload).
// Sin este patrón, cada recarga crearía una nueva instancia de PrismaClient
// y, con ella, un nuevo pool de conexiones — hasta agotar las conexiones
// disponibles en Supabase. Guardamos la instancia en el objeto global para
// reutilizarla entre recargas.

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
