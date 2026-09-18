const botonTema = document.getElementById("theme-toggle");
const iconoTema = document.getElementById("theme-icon");
const textoTema = document.getElementById("theme-text");
const mensaje = document.getElementById("app-message");
const temporales = document.getElementById("temp-files");
const prefetch = document.getElementById("prefetch-files");
const total = document.getElementById("space-to-clean");

function cambiarTema(tema) {
  const modoClaro = tema === "light";

  document.documentElement.classList.toggle("light", modoClaro);
  iconoTema.textContent = modoClaro ? "☾" : "☀";
  textoTema.textContent = modoClaro ? "Modo oscuro" : "Modo claro";
  localStorage.setItem("cleaner-theme", tema);
}

cambiarTema(localStorage.getItem("cleaner-theme") || "dark");

botonTema.addEventListener("click", () => {
  const modoClaro = document.documentElement.classList.contains("light");
  cambiarTema(modoClaro ? "dark" : "light");
});

function mostrarMensaje(texto, tipo = "") {
  mensaje.textContent = texto;
  mensaje.className = `app-message ${tipo}`;
}

function mostrarAnalisis(resultado) {
  if (!resultado.ok) {
    mostrarMensaje(resultado.mensaje, "error");
    return 0;
  }

  const texto = `${resultado.encontrados} archivos encontrados`;

  if (resultado.tipo === "temporales") temporales.textContent = texto;
  if (resultado.tipo === "prefetch") prefetch.textContent = texto;

  return resultado.encontrados;
}

async function analizarTemporales() {
  const resultado = await window.cleanerAPI.analizarTemporales();
  mostrarAnalisis(resultado);
  if (resultado.ok) mostrarMensaje("Archivos temporales analizados.", "success");
}

async function analizarPrefetch() {
  const resultado = await window.cleanerAPI.analizarPrefetch();
  mostrarAnalisis(resultado);
  if (resultado.ok) mostrarMensaje("Prefetch analizado.", "success");
}

async function analizarTodo() {
  const resultado = await window.cleanerAPI.analizarTodo();
  const cantidadTemporales = mostrarAnalisis(resultado.temporales);
  const cantidadPrefetch = mostrarAnalisis(resultado.prefetch);

  total.textContent = cantidadTemporales + cantidadPrefetch;
  if (resultado.temporales.ok && resultado.prefetch.ok) {
    mostrarMensaje("Análisis completo terminado.", "success");
  }
}

async function limpiarTodo() {
  const confirmar = confirm("¿Quieres eliminar los archivos encontrados?");
  if (!confirmar) return;

  const resultado = await window.cleanerAPI.limpiarTodo();

  if (resultado.temporales.ok) {
    temporales.textContent = `${resultado.temporales.eliminados} eliminados · ${resultado.temporales.omitidos} omitidos`;
  }

  if (resultado.prefetch.ok) {
    prefetch.textContent = `${resultado.prefetch.eliminados} eliminados · ${resultado.prefetch.omitidos} omitidos`;
  }

  const eliminados = (resultado.temporales.eliminados || 0) + (resultado.prefetch.eliminados || 0);
  total.textContent = eliminados;

  if (resultado.temporales.ok && resultado.prefetch.ok) {
    mostrarMensaje("Limpieza completa terminada.", "success");
  } else {
    const error = resultado.temporales.mensaje || resultado.prefetch.mensaje;
    mostrarMensaje(error, "error");
  }
}

document.querySelector('[data-action="analyze-temp"]').addEventListener("click", analizarTemporales);
document.querySelector('[data-action="analyze-prefetch"]').addEventListener("click", analizarPrefetch);
document.querySelector('[data-action="analyze-all"]').addEventListener("click", analizarTodo);
document.querySelector('[data-action="clean-all"]').addEventListener("click", limpiarTodo);
