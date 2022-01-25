import Animal from "../superclase/animal.js";

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  // metodo rugir
  Rugir() {
    const animalSound = new Audio(`../assets/sounds/${this.sonido}`);
    animalSound.play();
  }
}

export default Leon;
