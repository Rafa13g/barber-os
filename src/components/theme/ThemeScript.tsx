// Script inline que corre ANTES de que React hidrate. Lee la preferencia
// guardada (o el modo del sistema operativo si nunca se eligió una) y
// aplica la clase "dark" al <html> de inmediato — así se evita el
// "flash" de tema incorrecto al recargar la página.
//
// Se inyecta con dangerouslySetInnerHTML porque es la única forma de
// garantizar que corra antes del primer paint en Next.js App Router.

const THEME_SCRIPT = `
(function () {
  try {
    var guardado = localStorage.getItem("barberos-tema");
    var esOscuro = guardado
      ? guardado === "oscuro"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (esOscuro) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
