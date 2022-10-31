class Usuario{

    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}.`); 
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }

    conuntMascotas(){
        console.log(`La cantidad de mascotas que tiene ${this.nombre} es: ${this.mascotas.length}.`);
    }

    addBook(nombreDelLibro, autorDelLibro){
        this.libros.push([{
            nombre: nombreDelLibro, 
            autor: autorDelLibro
        }])
    }

    getBookNames(){
        const nombreDelLibro = this.libros.map(libro=> libro.nombre)
        console.log(`los libros que tiene ${this.nombre} son: ${nombreDelLibro}`);
    }
}

const persona1 = new Usuario("Pedro", "Gonzalez",[{nombre: "el señor de los anillos", autor: "ghahsgd"},{nombre: "el señor de los anillos 2", autor: "ghahsgd"}], ["Perro", "Gato", "Pez"])
const persona2 = new Usuario("Sandra", "perez",[{nombre: "harry poter", autor: "ghahsgd"},{nombre: "harry poter 2", autor: "ghahsgd"}], ["Perro", "Pajaro"])

persona1.getFullName()
persona1.conuntMascotas()
persona1.getBookNames()
persona2.getFullName()
persona2.conuntMascotas()
persona2.getBookNames()