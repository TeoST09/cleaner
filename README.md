[![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Electron](https://img.shields.io/badge/Electron-44.x-0078D4?logo=electron&logoColor=white)](https://www.electronjs.org/)
[![Kaspersky Scanned](https://img.shields.io/badge/Kaspersky-Scanned-28A745?logo=kaspersky&logoColor=white)](https://www.kaspersky.com/)
[![VirusTotal](https://img.shields.io/badge/VirusTotal-Scanned-394EFF?logo=virustotal&logoColor=white)](https://www.virustotal.com/)

# Limpiador de Windows

Aplicación desarrollada con **Node.js, JavaScript y Electron** para analizar y eliminar archivos temporales de Windows y archivos `.pf` de la carpeta Prefetch.

## Descargas

Las versiones compiladas del programa se encuentran disponibles en **GitHub Releases**.

### Windows

| Versión | Descarga |
|---|---|
| Instalador | [Cleaner Setup](https://github.com/TeoST09/cleaner/releases/latest) |
| Consola | [Cleaner Consola](https://github.com/TeoST09/cleaner/releases/latest) |
| Portable x64 y x86 | [Cleaner x64, x86](https://github.com/TeoST09/cleaner/releases/latest) |

[Ver todas las versiones y archivos disponibles](https://github.com/TeoST09/cleaner/releases)

## Características

- Eliminar archivos temporales de Windows.
- Eliminar archivos `.pf` de la carpeta Prefetch.
- Analizar archivos temporales antes de realizar una limpieza.
- Analizar archivos de Prefetch.
- Realizar un análisis completo.
- Mostrar archivos que no pudieron eliminarse.
- Manejar errores relacionados con permisos y archivos en uso.
- Aplicación de escritorio mediante Electron.
- Versión de consola disponible.
- Instalador para Windows.
- Versión portable.
- Compatibilidad con Windows x86 y x64.

## Tecnologías

### Node.js

El proyecto utiliza Node.js para trabajar con el sistema de archivos y ejecutar la lógica principal de limpieza.

Entre los módulos utilizados se encuentran:

- `fs`
- `path`
- `os`
- `readline/promises`

### JavaScript

El proyecto utiliza diferentes características de JavaScript:

- Clases.
- Métodos asíncronos.
- `async/await`.
- Promesas.
- `try/catch`.
- Manipulación de archivos.
- Entrada de datos desde la terminal.

### Electron

Electron se utilizo para crear la aplicación de escritorio para Windows a partir del código JavaScript.

La aplicación de escritorio permite utilizar el limpiador como un programa de Windows sin necesidad de ejecutar directamente el código desde la terminal.

### Electron Forge

Electron Forge se utiliza para empaquetar la aplicación y generar los diferentes distribuibles para Windows.

## Versiones disponibles

El proyecto dispone de diferentes formas de ejecución y distribución.

### Cleaner Consola

`cleaner_consola.exe`

Versión ejecutable basada en la aplicación de terminal.

Permite utilizar las funciones principales del limpiador directamente desde CMD.

### Cleaner Setup

`Cleaner-Setup.exe`

Versión distribuida mediante **Squirrel.Windows**.

Este ejecutable proporciona una instalación rápida de la aplicación y permite disponer del programa en Windows sin tener que realizar manualmente una instalación tradicional.

### Versión portable

También se proporciona una versión comprimida de la aplicación que puede utilizarse sin realizar una instalación tradicional.

Se extrae el archivo `.zip` y se ejecuta el programa.

### Compatibilidad

La aplicación se distribuye en un único archivo comprimido compatible con sistemas Windows de arquitectura:

- x86 (32 bits)
- x64 (64 bits)

No es necesario descargar una versión diferente según la arquitectura del sistema.

## Requisitos

### Desde el código fuente

Para ejecutar el proyecto desde el código fuente necesitas:

- Windows
- Node.js 22.x o superior
- Bun
- CMD o PowerShell

Puedes comprobar la versión de Node.js mediante:

```bash
node --version
```

## Requisitos

### Desde el código fuente

Para ejecutar el proyecto desde el código fuente necesitas:

- Windows
- Node.js 22.x o superior
- CMD o PowerShell

Puedes comprobar la versión de Node.js mediante:

```bash
node --version
```

Clona el repositorio:

```bash
git clone https://github.com/TeoST09/cleaner.git
```
Entra en la carpeta:

```bash
cd cleaner
```
Instala las dependencias:

```bash
npm install
```

## Ejecución

Para ejecutar la versión de consola:

```bash
npm start
```

Este comando ejecuta el script definido en `package.json`:

```json
"scripts": {
  "start": "node clean.js"
}
```

Por lo tanto, `npm start` ejecuta directamente `clean.js`.

### Versiones compiladas

Las versiones compiladas de la aplicación no requieren instalar Node.js ni Bun para ejecutarse.

## Uso de la versión de consola

La versión de consola muestra un menú similar al siguiente:

```text
Bienvenido al programa de limpieza

[1] Archivos temporales
[2] Prefetch
[3] Analizar todo
[4] Limpiar terminal
[5] Salir

Selecciona una opción:
```

## Prefetch

Windows utiliza la carpeta Prefetch para almacenar información relacionada con la ejecución de aplicaciones.

Este programa permite analizar y eliminar archivos `.pf` de:

```text
C:\Windows\Prefetch
```

Debido a que esta ubicación pertenece al sistema, algunas operaciones pueden requerir permisos elevados.

## Seguridad

Las versiones distribuidas del programa han sido analizadas antes de su publicación mediante herramientas de seguridad.

Las comprobaciones realizadas incluyen:

- Kaspersky.
- VirusTotal.

En los análisis realizados no se obtuvieron detecciones de archivos maliciosos.

Aun así, se recomienda descargar el programa únicamente desde las fuentes oficiales del proyecto y verificar los archivos antes de ejecutarlos.

## Estructura del proyecto

La estructura actual del proyecto utiliza una organización similar a:

```text
cleaner/
│
├── scripts/
│   ├── app.js
│   ├── cleaner-service.js
│   ├── main.js
│   └── preload.js
│
├── clean.js
├── forge.config.js
├── index.html
├── LICENSE
├── package.json
├── .gitignore
├── README.MD
└── style.css

```

## Futuras mejoras
- [ ] Mostrar cuánto espacio se liberó.
- [ ] Agregar más opciones de limpieza.
- [ ] Mejorar la interfaz gráfica.
- [ ] Añadir información más detallada durante el análisis.
- [ ] Mejorar el sistema de distribución y actualización.
- [ ] Añadir nuevas herramientas de mantenimiento de Windows.

## Autor

**TeoST**

GitHub:

https://github.com/TeoST09

## Licencia

Este proyecto está distribuido bajo la licencia MIT.