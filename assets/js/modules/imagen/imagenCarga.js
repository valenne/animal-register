import animales from "./consulta.js";

const nombreAnimal = document.getElementById("animal");
document.getElementById("animal").addEventListener("change", async () => {
  const response = await animales();
  // array de objetos
  const data = response.animales;

  const animal = nombreAnimal;
  const preview = document.getElementById("preview");
  let link = "http://127.0.0.1:5501";

  if (animal.value === "Leon") {
    preview.style.backgroundImage = `url(
      ${link}/assets/imgs/${data[0].imagen})`;
  } else if (animal.value === "Lobo") {
    preview.style.backgroundImage = `url(
      ${link}/assets/imgs/${data[1].imagen}`;
  } else if (animal.value === "Oso") {
    preview.style.backgroundImage = `url(
      ${link}/assets/imgs/${data[2].imagen}
    )`;
  } else if (animal.value === "Serpiente") {
    preview.style.backgroundImage = `url(${link}/assets/imgs/${data[3].imagen})`;
  } else if (animal.value === "Aguila") {
    preview.style.backgroundImage = `url(${link}/assets/imgs/${data[4].imagen})`;
  }
});
