import Leon from "./modules/subclases/leon.js";
import Aguila from "./modules/subclases/aguila.js";
import Lobo from "./modules/subclases/lobo.js";
import Oso from "./modules/subclases/oso.js";
import Serpiente from "./modules/subclases/serpiente.js";
import animales from "./modules/imagen/consulta.js";

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
const nombreAnimal = document.getElementById("animal");
let grupoAnimales = [];

// recopilando datos del dom
document.getElementById("btnRegistrar").addEventListener("click", async () => {
  const response = await animales();
  // array de objetos
  const data = response.animales;

  const animal = nombreAnimal;
  const edad = document.getElementById("edad");
  const comentario = document.getElementById("comentarios");
  // imagen
  const preview = document.getElementById("preview");
  const imgBg = preview.style.backgroundImage;
  const imgSrc = imgBg.slice(5, imgBg.length - 2);

  // funcion que retorna el objeto completo segun nombre
  function animalObject(tipoAnimal) {
    return data.find((animal) => animal.name === tipoAnimal);
  }

  // define var, que albergara las clases de animales
  let animalClass;

  // crea la clase dependiendo el valor del elemento nombre animal
  if (animal.value === "Leon") {
    animalClass = new Leon(
      animal.value,
      edad.value,
      imgSrc,
      comentario.value,
      animalObject("Leon").sonido
    );
  } else if (animal.value === "Lobo") {
    animalClass = new Lobo(
      animal.value,
      edad.value,
      imgSrc,
      comentario.value,
      animalObject("Lobo").sonido
    );
  } else if (animal.value === "Oso") {
    animalClass = new Oso(
      animal.value,
      edad.value,
      imgSrc,
      comentario.value,
      animalObject("Oso").sonido
    );
  } else if (animal.value === "Serpiente") {
    animalClass = new Serpiente(
      animal.value,
      edad.value,
      imgSrc,
      comentario.value,
      animalObject("Serpiente").sonido
    );
  } else if (animal.value === "Aguila") {
    animalClass = new Aguila(
      animal.value,
      edad.value,
      imgSrc,
      comentario.value,
      animalObject("Aguila").sonido
    );
  }

  // validacion de datos
  if (animal.value && edad.value && imgSrc && comentario.value) {
    grupoAnimales.push(animalClass);
    // reseto formulario al registrar personaje
    animal.selectedIndex = 0;
    edad.selectedIndex = 0;
    comentario.value = "";
    preview.style.backgroundImage = "none";
    reloadtable();
  } else {
    alert("No dejes informacion en blanco 😥");
  }
});

// agrega informacion a la tabla
const reloadtable = () => {
  const animalesTemplate = document.getElementById("Animales");
  animalesTemplate.innerHTML = "";
  // console.log(grupoAnimales);
  grupoAnimales.forEach((p, i) => {
    animalesTemplate.innerHTML += `
    <div class="px-3 pb-2 animalInTable"  data-animal="${p.nombre}">
      <div class="card text-white bg-secondary mb-3">
        <img src="${p.img}" class="card-img-top" onclick="activarInformacion('${i}')"/>
        <div class="card-body">
        <button class="btn" onclick="activarSonido('${i}')" style="width: 100%; display: block; border: none">
        <svg xmlns="http://www.w3.org/2000/svg" style="width: 48px; height: 48px; stroke: white" class="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
        </button>
        </div>
      </div>
    </div>`;
  });
};

// sonido
window.activarSonido = (i) => {
  const animal = grupoAnimales[i];

  if (animal.nombre === "Leon") {
    animal.Rugir();
  } else if (animal.nombre === "Aguila") {
    animal.Chillar();
  } else if (animal.nombre === "Lobo") {
    animal.Aullar();
  } else if (animal.nombre === "Oso") {
    animal.Gruñir();
  } else if (animal.nombre === "Serpiente") {
    animal.Sisear();
  }
  reloadtable();
};

// funcion que permite un modal con informacion anexa

window.activarInformacion = (i) => {
  const animal = grupoAnimales[i];
  const modalTemplate = document.getElementById("modal-section");
  console.log(animal.comentarios);
  modalTemplate.innerHTML = "";
  console.log(animal);
  grupoAnimales.forEach((p) => {
    modalTemplate.innerHTML = `<div class="modal fade" id="myModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered w-25" role="document">
      <div class="modal-content bg-dark">
        <div class="modal-body">
          <img src="${p.img}" class="card-img-top" />
          <p class="mt-2"id="modalEdad" style="text-align: center; color: #fff;">Edad Estimada: ${animal.edad}</p>
          <p style="color: #fff; font-weight: bold;text-align: center;">Comentarios</p>
          <div class="modal-footer">
          <p style="text-align: center; color: #fff;">${animal.comentarios}</p>
          
          </div>
        </div>
      </div>
    </div>
  </div>`;

    // activar el modal popout
    $(document).ready(function () {
      $("#myModal").modal("show");
    });
  });
};
