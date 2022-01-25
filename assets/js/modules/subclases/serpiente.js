import Animal from "../superclase/animal.js";

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  // metodo rugir
  Sisear() {
    const animalSound = new Audio(`../assets/sounds/${this.sonido}`);
    animalSound.play();
  }
}

export default Serpiente;
