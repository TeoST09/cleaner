
if (require("electron-squirrel-startup")) {
  app.quit();
}

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const Limpiador = require("./cleaner-service");

const limpiador = new Limpiador();

function createWindow() {
  const window = new BrowserWindow({
    width: 1000,
    height: 760,
    minWidth: 760,
    minHeight: 620,
    backgroundColor: "#0a1020",
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  window.loadFile(path.join(__dirname, "..", "index.html"));
}

app.whenReady().then(() => {
  ipcMain.handle("cleaner:analyze-temp", () => limpiador.analizarTemporales());
  ipcMain.handle("cleaner:analyze-prefetch", () => limpiador.analizarPrefetch());
  ipcMain.handle("cleaner:analyze-all", () => limpiador.analizarTodo());
  ipcMain.handle("cleaner:clean-all", () => limpiador.limpiarTodo());

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
