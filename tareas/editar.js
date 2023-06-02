const { leerJSON,escribirJSON } = require("../data");



const editar = function (clase, estado) {
    const tareas = leerJSON()
    const tarea = tareas.find((tarea) => tarea.clase === clase);
    if (!tarea) {
      return `ERROR:La clase ${clase} no se encuentra`;
    }
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.clase === clase) {
        tarea.estado = estado.toLowerCase();
      }
      return tarea;
    });
    escribirJSON(tareasActualizadas);
    return `El estado de la clase ${tarea.titulo} ahora es ${estado}`;
  }
  module.exports = editar