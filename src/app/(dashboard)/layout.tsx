// Layout compartido por todo el panel del barbero/dueño.
// Debe incluir: sidebar (3 rayitas) con Notificaciones, Perfil,
// Opciones, QR y Link, Reportes, y Configuración (solo OWNER).
// También debe mostrar alertas de notificaciones nuevas sin importar
// en qué sección esté el usuario (no solo dentro de /notificaciones).
//
// TODO: verificar sesión (NextAuth) + qué Empleado está activo
// (guardado en cookie/sesión tras pasar por /seleccionar-empleado).
// TODO: componente <Sidebar /> + componente <AlertaNotificacion />.

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* TODO: <Sidebar /> */}
      <main>{children}</main>
    </div>
  );
}
