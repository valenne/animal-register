import Animal from "../superclase/animal.js";

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  // metodo rugir
  Gruñir() {
    const animalSound = new Audio(`../assets/sounds/${this.sonido}`);
    animalSound.play();
  }
}

export default Oso;
