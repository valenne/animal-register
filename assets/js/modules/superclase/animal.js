class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }

  // getters
  // atr: nombre
  get nombre() {
    return this._nombre;
  }
  // atr: edad
  get edad() {
    return this._edad;
  }
  // atr: img
  get img() {
    return this._img;
  }
  // atr: sonido
  get sonido() {
    return this._sonido;
  }
  get comentarios() {
    return this._comentarios;
  }

  // setter
  // atr: comentarios

  set comentarios(nuevo_comentario) {
    this._comentarios = nuevo_comentario;
  }
}

export default Animal;
