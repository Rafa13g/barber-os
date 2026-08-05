-- CreateEnum
CREATE TYPE "RolEmpleado" AS ENUM ('OWNER', 'EMPLOYEE');

-- CreateEnum
CREATE TYPE "EstadoBarberia" AS ENUM ('ACTIVA', 'CERRADA_TEMPORAL', 'DESACTIVADA_POR_PAGO');

-- CreateEnum
CREATE TYPE "EstadoTurno" AS ENUM ('PENDIENTE', 'CONFIRMADO', 'COMPLETADO', 'CANCELADO', 'NO_ASISTIO');

-- CreateEnum
CREATE TYPE "EstadoSuscripcion" AS ENUM ('TRIAL', 'ACTIVA', 'EN_GRACIA', 'DESACTIVADA', 'CANCELADA');

-- CreateEnum
CREATE TYPE "TipoPlan" AS ENUM ('MENSUAL', 'ANUAL');

-- CreateEnum
CREATE TYPE "ProveedorPago" AS ENUM ('PAYPAL', 'PREX', 'BROU');

-- CreateEnum
CREATE TYPE "EstadoPago" AS ENUM ('PENDIENTE', 'APROBADO', 'RECHAZADO', 'REEMBOLSADO');

-- CreateEnum
CREATE TYPE "TipoNotificacion" AS ENUM ('SUSCRIPCION_POR_VENCER', 'SUSCRIPCION_EN_GRACIA', 'SUSCRIPCION_DESACTIVADA', 'NUEVO_TURNO', 'TURNO_CANCELADO', 'NUEVA_RESENA', 'OTRO');

-- CreateEnum
CREATE TYPE "PrioridadNotificacion" AS ENUM ('BAJA', 'MEDIA', 'ALTA');

-- CreateEnum
CREATE TYPE "AlcanceCierre" AS ENUM ('EMPLEADO', 'BARBERIA');

-- CreateEnum
CREATE TYPE "DiaSemana" AS ENUM ('LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO');

-- CreateEnum
CREATE TYPE "Tema" AS ENUM ('CLARO', 'OSCURO');

-- CreateEnum
CREATE TYPE "Moneda" AS ENUM ('UYU', 'USD', 'ARS', 'BRL', 'EUR');

-- CreateTable
CREATE TABLE "barberias" (
    "id" UUID NOT NULL,
    "slugPublico" VARCHAR(60) NOT NULL,
    "nombre" VARCHAR(120) NOT NULL,
    "ubicacion" VARCHAR(255),
    "latitud" DECIMAL(9,6),
    "longitud" DECIMAL(9,6),
    "telefono" VARCHAR(20) NOT NULL,
    "redesSociales" JSONB NOT NULL DEFAULT '{}',
    "logoUrl" VARCHAR(255),
    "portadaUrl" VARCHAR(255),
    "estado" "EstadoBarberia" NOT NULL DEFAULT 'ACTIVA',
    "motivoCierre" VARCHAR(255),
    "cierreHasta" DATE,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,
    "eliminadoEn" TIMESTAMP(3),
    "eliminadoPor" UUID,

    CONSTRAINT "barberias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" UUID NOT NULL,
    "barberiaId" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "passwordHash" VARCHAR(255) NOT NULL,
    "ultimoLoginEn" TIMESTAMP(3),
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empleados" (
    "id" UUID NOT NULL,
    "barberiaId" UUID NOT NULL,
    "nombre" VARCHAR(120) NOT NULL,
    "fotoPerfilUrl" VARCHAR(255),
    "rol" "RolEmpleado" NOT NULL DEFAULT 'EMPLOYEE',
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,
    "eliminadoEn" TIMESTAMP(3),
    "eliminadoPor" UUID,

    CONSTRAINT "empleados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" UUID NOT NULL,
    "barberiaId" UUID NOT NULL,
    "nombreCompleto" VARCHAR(120) NOT NULL,
    "telefono" VARCHAR(20) NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,
    "eliminadoEn" TIMESTAMP(3),
    "eliminadoPor" UUID,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servicios" (
    "id" UUID NOT NULL,
    "barberiaId" UUID NOT NULL,
    "nombre" VARCHAR(80) NOT NULL,
    "descripcion" VARCHAR(255),
    "precioBase" DECIMAL(10,2) NOT NULL,
    "moneda" "Moneda" NOT NULL DEFAULT 'UYU',
    "duracionBaseMinutos" INTEGER NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,
    "eliminadoEn" TIMESTAMP(3),
    "eliminadoPor" UUID,

    CONSTRAINT "servicios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empleado_servicios" (
    "id" UUID NOT NULL,
    "empleadoId" UUID NOT NULL,
    "servicioId" UUID NOT NULL,
    "precio" DECIMAL(10,2),
    "duracionMinutos" INTEGER,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "empleado_servicios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "turnos" (
    "id" UUID NOT NULL,
    "codigoPublico" VARCHAR(40) NOT NULL,
    "barberiaId" UUID NOT NULL,
    "empleadoId" UUID NOT NULL,
    "servicioId" UUID NOT NULL,
    "clienteId" UUID NOT NULL,
    "fechaHoraInicio" TIMESTAMP(3) NOT NULL,
    "fechaHoraFin" TIMESTAMP(3) NOT NULL,
    "precioFinal" DECIMAL(10,2) NOT NULL,
    "moneda" "Moneda" NOT NULL DEFAULT 'UYU',
    "duracionFinalMinutos" INTEGER,
    "descripcionCliente" VARCHAR(500),
    "observacionesInternas" TEXT,
    "estado" "EstadoTurno" NOT NULL DEFAULT 'PENDIENTE',
    "creadoManualmente" BOOLEAN NOT NULL DEFAULT false,
    "creadoPorEmpleadoId" UUID,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "turnos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "horarios" (
    "id" UUID NOT NULL,
    "empleadoId" UUID NOT NULL,
    "diaSemana" "DiaSemana" NOT NULL,
    "horaInicio" TIME NOT NULL,
    "horaFin" TIME NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "horarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cierres" (
    "id" UUID NOT NULL,
    "alcance" "AlcanceCierre" NOT NULL,
    "barberiaId" UUID NOT NULL,
    "empleadoId" UUID,
    "fechaInicio" DATE NOT NULL,
    "fechaFin" DATE NOT NULL,
    "motivo" VARCHAR(255),
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cierres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resenas" (
    "id" UUID NOT NULL,
    "barberiaId" UUID NOT NULL,
    "clienteId" UUID NOT NULL,
    "turnoId" UUID,
    "puntuacion" SMALLINT NOT NULL,
    "comentario" VARCHAR(500),
    "creadaEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadaEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resenas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificaciones" (
    "id" UUID NOT NULL,
    "usuarioId" UUID NOT NULL,
    "tipo" "TipoNotificacion" NOT NULL,
    "prioridad" "PrioridadNotificacion" NOT NULL DEFAULT 'MEDIA',
    "titulo" VARCHAR(120) NOT NULL,
    "mensaje" VARCHAR(500) NOT NULL,
    "leida" BOOLEAN NOT NULL DEFAULT false,
    "fechaExpiracion" TIMESTAMP(3),
    "datosExtra" JSONB,
    "creadaEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadaEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notificaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planes" (
    "id" UUID NOT NULL,
    "tipo" "TipoPlan" NOT NULL,
    "nombre" VARCHAR(60) NOT NULL,
    "precio" DECIMAL(10,2),
    "moneda" "Moneda" NOT NULL DEFAULT 'UYU',
    "duracionDias" INTEGER NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "planes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suscripciones" (
    "id" UUID NOT NULL,
    "barberiaId" UUID NOT NULL,
    "planId" UUID,
    "estado" "EstadoSuscripcion" NOT NULL DEFAULT 'TRIAL',
    "fechaInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaVencimiento" TIMESTAMP(3) NOT NULL,
    "fechaFinGracia" TIMESTAMP(3),
    "notificado80Porciento" BOOLEAN NOT NULL DEFAULT false,
    "notificadoVencimiento" BOOLEAN NOT NULL DEFAULT false,
    "creadaEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadaEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "suscripciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagos" (
    "id" UUID NOT NULL,
    "suscripcionId" UUID NOT NULL,
    "proveedor" "ProveedorPago" NOT NULL,
    "monto" DECIMAL(10,2) NOT NULL,
    "moneda" "Moneda" NOT NULL DEFAULT 'UYU',
    "estado" "EstadoPago" NOT NULL DEFAULT 'PENDIENTE',
    "referenciaExterna" VARCHAR(255),
    "pagadoEn" TIMESTAMP(3),
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pagos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reportes_descargables" (
    "id" UUID NOT NULL,
    "barberiaId" UUID NOT NULL,
    "empleadoId" UUID,
    "periodoDesde" DATE NOT NULL,
    "periodoHasta" DATE NOT NULL,
    "archivoUrl" VARCHAR(255) NOT NULL,
    "generadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reportes_descargables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "configuraciones_usuario" (
    "id" UUID NOT NULL,
    "usuarioId" UUID NOT NULL,
    "tema" "Tema" NOT NULL DEFAULT 'CLARO',
    "sonidoActivado" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "configuraciones_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auditorias" (
    "id" UUID NOT NULL,
    "usuarioId" UUID,
    "barberiaId" UUID NOT NULL,
    "accion" VARCHAR(60) NOT NULL,
    "entidad" VARCHAR(60) NOT NULL,
    "entidadId" UUID NOT NULL,
    "datosAnteriores" JSONB,
    "datosNuevos" JSONB,
    "versionEsquema" INTEGER NOT NULL DEFAULT 1,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "auditorias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "barberias_slugPublico_key" ON "barberias"("slugPublico");

-- CreateIndex
CREATE INDEX "barberias_estado_idx" ON "barberias"("estado");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_barberiaId_key" ON "usuarios"("barberiaId");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE INDEX "empleados_barberiaId_activo_idx" ON "empleados"("barberiaId", "activo");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_barberiaId_telefono_key" ON "clientes"("barberiaId", "telefono");

-- CreateIndex
CREATE INDEX "servicios_barberiaId_activo_idx" ON "servicios"("barberiaId", "activo");

-- CreateIndex
CREATE UNIQUE INDEX "empleado_servicios_empleadoId_servicioId_key" ON "empleado_servicios"("empleadoId", "servicioId");

-- CreateIndex
CREATE UNIQUE INDEX "turnos_codigoPublico_key" ON "turnos"("codigoPublico");

-- CreateIndex
CREATE INDEX "turnos_empleadoId_fechaHoraInicio_idx" ON "turnos"("empleadoId", "fechaHoraInicio");

-- CreateIndex
CREATE INDEX "turnos_barberiaId_fechaHoraInicio_idx" ON "turnos"("barberiaId", "fechaHoraInicio");

-- CreateIndex
CREATE INDEX "turnos_estado_idx" ON "turnos"("estado");

-- CreateIndex
CREATE INDEX "turnos_clienteId_fechaHoraInicio_idx" ON "turnos"("clienteId", "fechaHoraInicio");

-- CreateIndex
CREATE INDEX "horarios_empleadoId_diaSemana_idx" ON "horarios"("empleadoId", "diaSemana");

-- CreateIndex
CREATE INDEX "cierres_empleadoId_fechaInicio_fechaFin_idx" ON "cierres"("empleadoId", "fechaInicio", "fechaFin");

-- CreateIndex
CREATE INDEX "cierres_barberiaId_fechaInicio_fechaFin_idx" ON "cierres"("barberiaId", "fechaInicio", "fechaFin");

-- CreateIndex
CREATE UNIQUE INDEX "resenas_turnoId_key" ON "resenas"("turnoId");

-- CreateIndex
CREATE INDEX "resenas_barberiaId_creadaEn_idx" ON "resenas"("barberiaId", "creadaEn");

-- CreateIndex
CREATE INDEX "notificaciones_usuarioId_leida_creadaEn_idx" ON "notificaciones"("usuarioId", "leida", "creadaEn");

-- CreateIndex
CREATE INDEX "notificaciones_usuarioId_prioridad_leida_idx" ON "notificaciones"("usuarioId", "prioridad", "leida");

-- CreateIndex
CREATE INDEX "suscripciones_barberiaId_creadaEn_idx" ON "suscripciones"("barberiaId", "creadaEn");

-- CreateIndex
CREATE INDEX "suscripciones_estado_fechaVencimiento_idx" ON "suscripciones"("estado", "fechaVencimiento");

-- CreateIndex
CREATE INDEX "pagos_suscripcionId_estado_idx" ON "pagos"("suscripcionId", "estado");

-- CreateIndex
CREATE UNIQUE INDEX "pagos_proveedor_referenciaExterna_key" ON "pagos"("proveedor", "referenciaExterna");

-- CreateIndex
CREATE INDEX "reportes_descargables_barberiaId_periodoDesde_periodoHasta_idx" ON "reportes_descargables"("barberiaId", "periodoDesde", "periodoHasta");

-- CreateIndex
CREATE UNIQUE INDEX "configuraciones_usuario_usuarioId_key" ON "configuraciones_usuario"("usuarioId");

-- CreateIndex
CREATE INDEX "auditorias_entidad_entidadId_creadoEn_idx" ON "auditorias"("entidad", "entidadId", "creadoEn");

-- CreateIndex
CREATE INDEX "auditorias_barberiaId_creadoEn_idx" ON "auditorias"("barberiaId", "creadoEn");

-- CreateIndex
CREATE INDEX "auditorias_usuarioId_creadoEn_idx" ON "auditorias"("usuarioId", "creadoEn");

-- AddForeignKey
ALTER TABLE "barberias" ADD CONSTRAINT "barberias_eliminadoPor_fkey" FOREIGN KEY ("eliminadoPor") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_barberiaId_fkey" FOREIGN KEY ("barberiaId") REFERENCES "barberias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empleados" ADD CONSTRAINT "empleados_barberiaId_fkey" FOREIGN KEY ("barberiaId") REFERENCES "barberias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empleados" ADD CONSTRAINT "empleados_eliminadoPor_fkey" FOREIGN KEY ("eliminadoPor") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientes" ADD CONSTRAINT "clientes_barberiaId_fkey" FOREIGN KEY ("barberiaId") REFERENCES "barberias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientes" ADD CONSTRAINT "clientes_eliminadoPor_fkey" FOREIGN KEY ("eliminadoPor") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicios" ADD CONSTRAINT "servicios_barberiaId_fkey" FOREIGN KEY ("barberiaId") REFERENCES "barberias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicios" ADD CONSTRAINT "servicios_eliminadoPor_fkey" FOREIGN KEY ("eliminadoPor") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empleado_servicios" ADD CONSTRAINT "empleado_servicios_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "empleados"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empleado_servicios" ADD CONSTRAINT "empleado_servicios_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "servicios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turnos" ADD CONSTRAINT "turnos_barberiaId_fkey" FOREIGN KEY ("barberiaId") REFERENCES "barberias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turnos" ADD CONSTRAINT "turnos_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "empleados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turnos" ADD CONSTRAINT "turnos_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "servicios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turnos" ADD CONSTRAINT "turnos_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turnos" ADD CONSTRAINT "turnos_creadoPorEmpleadoId_fkey" FOREIGN KEY ("creadoPorEmpleadoId") REFERENCES "empleados"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "horarios" ADD CONSTRAINT "horarios_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "empleados"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cierres" ADD CONSTRAINT "cierres_barberiaId_fkey" FOREIGN KEY ("barberiaId") REFERENCES "barberias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cierres" ADD CONSTRAINT "cierres_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "empleados"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resenas" ADD CONSTRAINT "resenas_barberiaId_fkey" FOREIGN KEY ("barberiaId") REFERENCES "barberias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resenas" ADD CONSTRAINT "resenas_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resenas" ADD CONSTRAINT "resenas_turnoId_fkey" FOREIGN KEY ("turnoId") REFERENCES "turnos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificaciones" ADD CONSTRAINT "notificaciones_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suscripciones" ADD CONSTRAINT "suscripciones_barberiaId_fkey" FOREIGN KEY ("barberiaId") REFERENCES "barberias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suscripciones" ADD CONSTRAINT "suscripciones_planId_fkey" FOREIGN KEY ("planId") REFERENCES "planes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagos" ADD CONSTRAINT "pagos_suscripcionId_fkey" FOREIGN KEY ("suscripcionId") REFERENCES "suscripciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reportes_descargables" ADD CONSTRAINT "reportes_descargables_barberiaId_fkey" FOREIGN KEY ("barberiaId") REFERENCES "barberias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reportes_descargables" ADD CONSTRAINT "reportes_descargables_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "empleados"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configuraciones_usuario" ADD CONSTRAINT "configuraciones_usuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auditorias" ADD CONSTRAINT "auditorias_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auditorias" ADD CONSTRAINT "auditorias_barberiaId_fkey" FOREIGN KEY ("barberiaId") REFERENCES "barberias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
