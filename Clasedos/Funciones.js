function User (name, lastName, pet, books){
    this.name = name;
    this.lastName = lastName;
    this.pet = pet;
    this.books = books;

    this.getFullName = () => {
        return `${this.name} ${this.lastName}`;
    }
    
    this.addpet = (petName,pet) => {
        this.pet.push({ petName: petName, pet: pet });
    }

    this.getpets = () => {
        return this.pets.length;
    }

    this.addBook = (book, autor) => {
        this.books.push({name: book, autor: autor});
    }

    this.getBooks = () => {
        return this.books.map((libro) => libro.name);
    }
}
let usuario = new User('Leonardo', 'De Los Santos', [({petName:"Lila",pet:"Gato"})], [({ name: "El arte de la guerra", autor: "Sun Tzu" })]);

console.log(usuario);
usuario.addpet("pancho","perro");
console.log(usuario.getFullName());   