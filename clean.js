const fs = require("fs");
const path = require("path");
const os = require("os");
const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const tempDir = os.tmpdir();
const prefetchDir = 'C:\\Windows\\Prefetch';

class limpiar{
    constructor(){
        this.prefetchDir = 'C:\\Windows\\Prefetch';
    }

    async eliminarPrefetch (){
        console.log('Optimizando SysMain...');
        try{
            const archivos = await fs.promises.readdir(this.prefetchDir);
            
        
            const archivosPf = archivos.filter(archivo => archivo.toLowerCase().endsWith('.pf'));
            
            if (archivosPf.length === 0) {
                console.log('No hay archivos de Prefetch para eliminar.');
                return;
            }

            console.log(`\nIniciando la eliminación de ${archivosPf.length} archivos...`);
            let eliminados = 0;
            let bloqueados = 0;

            for (const archivo of archivosPf){
                const rutaCompleta = path.join(this.prefetchDir, archivo);

                try{
                    await fs.promises.unlink(rutaCompleta);
                    eliminados++;
                }catch(error){
                    bloqueados++;
                }
            }

            console.log(`\n✨ ¡Limpieza completada!`);
            console.log(` Archivos eliminados con éxito: ${eliminados}`);
            console.log(` Archivos omitidos (en uso por el sistema): ${bloqueados}`);
        }catch (error) {
            if (error.code === 'EACCES') {
                console.error("\n❌ Error: No tienes permisos de Administrador para borrar en Prefetch.");
            } else {
                console.error("\n❌ Ocurrió un error general:", error.message);
            }
        }
    }

    async eliminarTemporales (){
        console.log('Limpiando archivos temporales...');
        try{
             const temporales = await fs.promises.readdir(tempDir);

            if(temporales.length === 0){
                console.log('No hay archivos temporales para eliminar');
                return;
            }

            console.log(`\n Iniciando la eliminación de ${temporales.length} archivos...`)

            let eliminados = 0;
            let bloqueados = 0;

            for (const temporal of temporales){
                const rutaCompleta = path.join(tempDir, temporal)
                try{
                    await fs.promises.unlink(rutaCompleta);
                    eliminados++;
                }catch (error) {
                    bloqueados++
                }
            }

            console.log(`\n✨ ¡Limpieza de Archivos temporales completada!`);
            console.log(` Archivos eliminados con éxito: ${eliminados}`);
            console.log(` Archivos omitidos (en uso por el sistema): ${bloqueados}`);
        }catch(error){
            console.error("\n Error general al leer la carpeta temporal:", error.message);
        }
    }

    async analizarTodo(){
        console.log('=================================================================')
        console.log('Analizando todo el sistema...');
        await leerTemporales();
        await leerPrefetch();
        console.log('=================================================================')
    }

    async borrarArchivo(archivo){
        if(archivo == 'temporales'){
            await this.eliminarTemporales();
        }else{
            await this.eliminarPrefetch();
        } 
    }

    async eliminarTodos(){
        await this.eliminarPrefetch();
        await this.eliminarTemporales();
    }
}

const limpiador = new limpiar();

async function leerTemporales(){
    try{
        const archivos = await fs.promises.readdir(tempDir);

        console.log(`\nSe encontraron ${archivos.length} elementos en la carpeta temporal.`);
    }catch(error){
        console.error('Error al leer la carpeta temporal', error.message);
    }

}

async function leerPrefetch() {
    try{
    const archivos = await fs.promises.readdir(prefetchDir);

    const archivosPf = archivos.filter(archivo => archivo.toLowerCase().endsWith('.pf'));
        
    console.log(`\nSe encontraron ${archivosPf.length} archivos .pf en Prefetch.`);
    }catch(error){
        if (error.code === 'EACCES') {
            console.error("\n Error: No tienes permisos para acceder a Prefetch.");
            console.error("Por favor, ejecuta tu consola de comandos (CMD/PowerShell) como ADMINISTRADOR.");
        } else {
            console.error("\n Error al leer Prefetch:", error.message);
            console.error("Por favor, ejecuta tu consola de comandos (CMD/PowerShell) como ADMINISTRADOR.");
        }
    }

}

async function preguntarArchivo(nombre){
    const elegir = await rl.question(`¿Estás seguro que quieres eliminar ${nombre}?, (s/n):`);


    if(elegir.toLowerCase() === 's') {
        if(nombre.trim() == 'Archivos temporales'){
            await limpiador.borrarArchivo('temporales')
        }else{
            await limpiador.borrarArchivo('SysMain')  
        }
    }
}

async function menu (){

    let salir = false;

    while(!salir){
        console.log('')
        console.log('Bienvenido al programa de limpieza');
        console.log('[1] Archivos temporales');
        console.log('[2] Prefetch');
        console.log('[3] Analizar todo');
        console.log('[4] Limpiar terminal');
        console.log('[5] Salir')

        const opcion = await rl.question('Selecciona una opción: ')
        
        console.log('');
        switch (opcion.trim()) {
        case '1':  
            await leerTemporales();
            await preguntarArchivo('Archivos temporales')
            break;
        case '2':
            await leerPrefetch();
            await preguntarArchivo('SysMain')
            break;
        case '3':
            await limpiador.analizarTodo()
            break;
        case '4':
            console.clear();
            break;
        case '5':
            console.log('Saliendo del limpiador, Adios!');
            salir = true;
            break;
        default:
            console.log('Opción no válida, intenta de nuevo.');
        }
    }

    rl.close();

}

menu()