const filtrar = function (estado) {
    const tareasFiltradas = this.tareas.filter(
      (tarea) => tarea.estado === estado
    );
    if (!tareasFiltradas.length) {
      return console.log(`INFO: No hay tareas con el estado: '${estado}'`);
    }
    this.listar(tareasFiltradas);
}
    module.exports = filtrar