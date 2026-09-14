# Limpiador de Windows

Programa desarrollado en **Node.js** para limpiar archivos temporales de Windows y archivos `.pf` de la carpeta Prefetch.

El programa funciona desde la terminal y permite analizar y eliminar archivos de forma sencilla.

[![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?logo=node.js\&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript\&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Bash](https://img.shields.io/badge/Terminal-Bash-4EAA25?logo=gnubash\&logoColor=white)](https://www.gnu.org/software/bash/)

## Características

* Eliminar archivos temporales.
* Eliminar archivos `.pf` de Prefetch.
* Analizar archivos temporales.
* Analizar archivos de Prefetch.
* Limpiar temporales y Prefetch.
* Mostrar archivos que no pudieron eliminarse.
* Manejar errores de permisos.
* Interfaz mediante terminal.

## Requisitos

Para utilizar el programa necesitas:

* Windows
* Node.js 22.x o superior
* CMD o PowerShell

Puedes comprobar la versión de Node.js con:

```bash
node --version
```

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/TeoST09/cleaner
```

Entra en la carpeta del proyecto:

```bash
cd cleaner
```

No es necesario ejecutar `npm install`, ya que el programa utiliza módulos nativos de Node.js.

## Uso

Para iniciar el programa ejecuta:

```bash
node clean.js
```

### Ejecutable

También puedes ejecutar directamente el archivo:

```text
clean.exe
```

El programa mostrará un menú en la terminal:

```text
Bienvenido al programa de limpieza

[1] Archivos temporales
[2] Prefetch
[3] Analizar todo
[4] Limpiar terminal
[5] Salir

Selecciona una opción:
```

## Opciones

### 1. Archivos temporales

Analiza la carpeta temporal del sistema y muestra la cantidad de elementos encontrados.

Después te pregunta si quieres eliminar los archivos:

```text
¿Estás seguro que quieres eliminar Archivos temporales?, (s/n):
```

Si introduces `s`, comenzará la limpieza.

El programa muestra cuántos archivos fueron eliminados y cuántos no pudieron eliminarse porque estaban en uso.

### 2. Prefetch

Analiza la carpeta:

```text
C:\Windows\Prefetch
```

Busca todos los archivos que tengan la extensión `.pf` y muestra cuántos se encontraron.

Y te pregunta si quieres eliminarlos.

Esta opción puede requerir ejecutar la terminal como **Administrador**.

### 3. Analizar todo

Realiza un análisis de las dos ubicaciones:

* Carpeta temporal.
* Carpeta Prefetch.

Esta opción solamente analiza los archivos y no elimina nada.

### 4. Limpiar terminal

Limpia el contenido actual de la terminal utilizando:

```javascript
console.clear();
```

### 5. Salir

Cierra el programa y finaliza la ejecución.

## Ejemplo

Una limpieza puede mostrar algo como:

```text
Limpiando archivos temporales...

Iniciando la eliminación de 150 archivos...

¡Limpieza de Archivos temporales completada!
Archivos eliminados con éxito: 137
Archivos omitidos (en uso por el sistema): 13
```

Los archivos que estén siendo utilizados por Windows no se eliminan y se cuentan como archivos omitidos.

## Tecnologías

### Node.js

El proyecto está desarrollado utilizando Node.js y sus módulos nativos:

* `fs`
* `path`
* `os`
* `readline/promises`

### JavaScript

Se utilizan diferentes características de JavaScript como:

* Clases.
* Métodos asíncronos.
* `async/await`.
* Promesas.
* `try/catch`.
* Manipulación de archivos.
* Entrada de datos desde la terminal.

### Terminal

El programa utiliza la terminal para mostrar el menú y recibir las opciones seleccionadas por el usuario.

## Estructura

```text
Limpiador-Windows/
│
├── index.js
└── README.md
```

## Importante

Este programa elimina archivos directamente del sistema.

Algunas operaciones pueden necesitar permisos de Administrador, especialmente al trabajar con:

```text
C:\Windows\Prefetch
```

También pueden existir archivos que estén siendo utilizados por Windows. Estos archivos se omiten y el programa continúa con la limpieza.

## Objetivo

Este proyecto fue realizado como práctica para mejorar mis conocimientos de JavaScript y Node.js, especialmente en el manejo de archivos, programación asíncrona y creación de programas para terminal.

## Futuras mejoras

* [ ] Mostrar el tamaño de los archivos antes de eliminarlos.
* [ ] Mostrar cuánto espacio se liberó.
* [ ] Agregar más opciones de limpieza.

## Autor

TeoST
