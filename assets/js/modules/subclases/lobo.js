import Animal from "../superclase/animal.js";

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  // metodo rugir
  Aullar() {
    const animalSound = new Audio(`../assets/sounds/${this.sonido}`);
    animalSound.play();
  }
}

export default Lobo;
