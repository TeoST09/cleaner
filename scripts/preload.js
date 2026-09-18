const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("cleanerAPI", {
  analizarTemporales: () => ipcRenderer.invoke("cleaner:analyze-temp"),
  analizarPrefetch: () => ipcRenderer.invoke("cleaner:analyze-prefetch"),
  analizarTodo: () => ipcRenderer.invoke("cleaner:analyze-all"),
  limpiarTodo: () => ipcRenderer.invoke("cleaner:clean-all")
});
