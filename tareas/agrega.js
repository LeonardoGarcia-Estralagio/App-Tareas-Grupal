const Tarea = require("./Tarea");
const {escribirJSON} = require("../data")
const agregar = function (clase, titulo) {
    const tareas = this.tareas;
    let tarea = new Tarea(clase, titulo);

    tareas.push(tarea);
    escribirJSON(tareas);
    return `La tarea ${tarea.titulo} de la clase ${tarea.clase} se agregó exitosamente.`;
  }

module.exports = agregar