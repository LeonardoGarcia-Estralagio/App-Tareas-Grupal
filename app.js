const { argv } = require("process");
const moduloTareas = require("./tareas");
let respuesta;

switch (argv[2].toLowerCase()) {
  case "listar":
    moduloTareas.listar();
    break;
  case "agregar":
    if ([argv[3], argv[4]].includes(undefined)) {
      console.log("El número y título de la clase son obligatorios");
      break;
    }
    if (isNaN(argv[3]) || argv[3] < 1) {
      console.log("El numero de la clase no es valido".red);
      break;
    }
    respuesta = moduloTareas.agreagar(+argv[3], argv[4]);
    console.log(respuesta);
    break;
  case "filtrar":
    const estados = ["pendiente", "en proceso", "terminada"];
    if (!argv[3]) {
      console.log("Debes indicar el estado que deseas filtrar");
      break;
    }
    if (!estados.includes(argv[3].toLowerCase())) {
      console.log(
        "El estado debe ser uno de los siguentes pendiente | en proceso | terminada"
      );
      break;
    }
    moduloTareas.filtrar(argv[3].toLowerCase());
    break;
  case "editar":
    if ([argv[3], argv[4]].includes(undefined)) {
      console.log("El número y el nuevo estado son obligatorios");
      break;
    }
    if (isNaN(argv[3]) || argv[3] < 1) {
      console.log("El numero de la clase no es valido");
      break;
    }
    respuesta = moduloTareas.editar(+argv[3], argv[4]);

    console.log(respuesta);
    break;
  default:
    break;
}
