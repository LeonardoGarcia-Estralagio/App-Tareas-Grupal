const { leerJSON, escribirJSON } = require("../data");

module.exports = {
  tareas: leerJSON(),
  listar: require("./listar"),
  //agregar: require("./agregar"),
  //filtrar: require("./filtrar"),
  //editar: require("./editar"),
};
