const fs = require('fs')

class Contenedor {

    constructor(nombre){
    
        this.nombre = nombre
    
    }

    async save (obj) {
    
        try {

            // Verificamos si existe un archivo
            const producto = await fs.promises.readFile(`./${this.nombre}.txt`, 'utf-8');

            // parseamos el archivo
            const archivoParse = JSON.parse(producto);

            // agregamos la funcion para obtener el id mas alto
            const ultimoId = archivoParse.reverse();

            // pusheamos el nuevo objeto al array de archivoParse y con el id sumado + 1
            archivoParse.push({...obj, id: ultimoId[0].id + 1 });

            // Agregamos nuevamente la lista de productos con los nuevos productos
            fs.promises.writeFile(`./${this.nombre}.txt`, JSON.stringify(archivoParse, null , 2))
                .then(() => console.log('Se creo exitosamente el nuevo producto con el id: ' + (ultimoId[0].id + 1) ))
                .catch((error) => console.log('Hubo un error al crearse el producto ' + error))

        }
        catch (error) {

            // Si no existe el archivo, creamos por primera vez la lista de productos
            fs.promises.writeFile(`./${this.nombre}.txt`, JSON.stringify([{...obj, id:1}], null , 2))
                .then(() => console.log('Se creo exitosamente el primer producto con el id: ' + 1))
                .catch((error) => console.log('Hubo un error al crearse el producto ' + error))

        }
        
    }

    async getById (id) {

        try {

            // leemos el archivo
            const producto = await fs.promises.readFile(`./${this.nombre}.txt`, 'utf-8');

            // parseamos el archivo
            const archivoParse = JSON.parse(producto);

            // buscamos el id
            const productoEncontrado = archivoParse.find(archivo => archivo.id === id)
            
            // si el id no fue creado o no se encuentra mostramos el siguiente error
            if(!productoEncontrado) {
                throw new Error(null)
            }

            // si se encunetrta el id lo muestro
            console.log(productoEncontrado)

        } catch (error) {

            console.log(error)

        }
    }

    async getAll () {
        try {
            // leemos el archivo
            const producto = await fs.promises.readFile(`./${this.nombre}.txt`, 'utf-8');

            // parseamos el archivo
            const archivoParse = JSON.parse(producto);

            // mostramos los productos
            console.log(archivoParse)

        } catch (error) {

            console.log('El archivo no existe ' + error)

        }
    }

    async deleteById (id) {

        try {

            // leemos el archivo
            const producto = await fs.promises.readFile(`./${this.nombre}.txt`, 'utf-8');

            // parseamos el archivo
            const archivoParse = JSON.parse(producto)

            // se filtra y busca el id
            const productoEncontrado = archivoParse.find(archivo => archivo.id === id)
            if(!productoEncontrado) {
                throw new Error('No fue encontrado el producto')
            }

            // se guarda sin el producto
            let nuevoArray = archivoParse.filter(archivo => archivo.id !== id)
            
            // se guarda el archivo sin el producto
            fs.promises.writeFile(`./${this.nombre}.txt`, JSON.stringify(nuevoArray, null, 2))
                .then(() => console.log('El producto fue eliminado exitosamente'))
                .catch((error) => console.log('Hubo un error al borrase el producto ' + error))

        } catch (error) {
            console.log('El producto no existe', error)
        }
    }

    async deleteAll () {
        try {
            // leemos el archivo
            await fs.promises.readFile(`./${this.nombre}.txt`, 'utf-8')

            // Se sobrescribe con un array vacio
            fs.promises.writeFile(`./${this.nombre}.txt`, JSON.stringify([], null, 2))
                .then(() => console.log('Todos los producto fueron eliminados'))
                .catch(() => console.log('Hubo un error al eliminar el contenido'))

        } catch (error) {
            console.log('El archivo no existe ' + error)
        }
    }
    

}

const productos = new Contenedor('productos')
productos.save({title:'titulo1', price:30, thumbnail: 'titulo1'})
productos.save({title:'titulo2', price:20, thumbnail: 'titulo2'})
productos.save({title:'titulo3', price:35, thumbnail: 'titulo3'})
productos.getById(1)
productos.getAll()
productos.deleteById(3)
productos.deleteAll()
