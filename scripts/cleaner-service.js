const fs = require("fs");
const path = require("path");
const os = require("os");

class Limpiador {
  constructor() {
    this.temporales = os.tmpdir();
    this.prefetch = "C:\\Windows\\Prefetch";
  }

  async analizarTemporales() {
    try {
      const archivos = await fs.promises.readdir(this.temporales);

      return {
        ok: true,
        tipo: "temporales",
        encontrados: archivos.length
      };
    } catch (error) {
      return this.error("los archivos temporales", "temporales", error);
    }
  }

  async analizarPrefetch() {
    try {
      const archivos = await fs.promises.readdir(this.prefetch);
      const archivosPf = archivos.filter((archivo) => archivo.toLowerCase().endsWith(".pf"));

      return {
        ok: true,
        tipo: "prefetch",
        encontrados: archivosPf.length
      };
    } catch (error) {
      return this.error("Prefetch", "prefetch", error);
    }
  }

  async analizarTodo() {
    const temporales = await this.analizarTemporales();
    const prefetch = await this.analizarPrefetch();

    return { temporales, prefetch };
  }

  async limpiarTemporales() {
    try {
      const archivos = await fs.promises.readdir(this.temporales);
      let eliminados = 0;
      let omitidos = 0;

      for (const archivo of archivos) {
        try {
          await fs.promises.unlink(path.join(this.temporales, archivo));
          eliminados++;
        } catch {
          omitidos++;
        }
      }

      return { ok: true, tipo: "temporales", eliminados, omitidos };
    } catch (error) {
      return this.error("los archivos temporales", "temporales", error);
    }
  }

  async limpiarPrefetch() {
    try {
      const archivos = await fs.promises.readdir(this.prefetch);
      const archivosPf = archivos.filter((archivo) => archivo.toLowerCase().endsWith(".pf"));
      let eliminados = 0;
      let omitidos = 0;

      for (const archivo of archivosPf) {
        try {
          await fs.promises.unlink(path.join(this.prefetch, archivo));
          eliminados++;
        } catch {
          omitidos++;
        }
      }

      return { ok: true, tipo: "prefetch", eliminados, omitidos };
    } catch (error) {
      return this.error("Prefetch", "prefetch", error);
    }
  }

  async limpiarTodo() {
    const temporales = await this.limpiarTemporales();
    const prefetch = await this.limpiarPrefetch();

    return { temporales, prefetch };
  }

  error(carpeta, tipo, error) {
    const permisos = error.code === "EACCES" || error.code === "EPERM";
    const mensaje = permisos
      ? `No tienes permisos para acceder a ${carpeta}.`
      : `No se pudo acceder a ${carpeta}: ${error.message}`;

    return { ok: false, tipo, mensaje };
  }
}

module.exports = Limpiador;
