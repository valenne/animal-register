const animales = async () => {
  try {
    //     se comunica con el servidor
    const response = await fetch("http://localhost:5501/animales.json");
    //     se revisa informacion de estado de la solicitud
    // console.log(response);
    //     comprobacion de codigo recibidos por la api
    if (response.status === 200) {
      //     recibe el objeto json
      const data = await response.json();
      return data;
      //       si el status es 200, se sigue trabajando en esta seccion
    } else if (response.status === 401) {
      console.log("Un error 401 a ocurrido");
    } else if (response.status === 404) {
      console.log("el error 404, no existe informacion");
    } else {
      console.log("Un error no conocido a sucedido");
    }
  } catch (error) {
    console.log(error);
  }
};

export default animales;
