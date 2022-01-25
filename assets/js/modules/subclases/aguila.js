import Animal from "../superclase/animal.js";

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  // metodo rugir
  Chillar() {
    const animalSound = new Audio(`../assets/sounds/${this.sonido}`);
    animalSound.play();
  }
}

export default Aguila;
