
class Usuario {
    constructor(nombre, apellido, pet, libros) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pet = pet;
        this.libros = libros;
    }
    getFullName = () => {
        return `Nombre: ${this.nombre} - Apellido: ${this.apellido}`;
    }

    addMascota = (petName,pet) => {
        this.pet.push({ petName: petName, pet: pet });
    }

    getMascotas = () => {
        return this.mascotas.length;
    }

    addBook = (book, autor) => {
        this.libros.push({ nombre: book, autor: autor });
    }

    getBooks = () => {
        return this.libros.map((libro) => libro.nombre);
    }
}

let usuario = new Usuario('Leonardo', 'De Los Santos', [({petName:"Lila",pet:"Gato"})], [({ nombre: "El arte de la guerra", autor: "Sun Tzu" })]);


console.log(usuario);
usuario.addMascota("pancho","perro");
console.log(usuario);