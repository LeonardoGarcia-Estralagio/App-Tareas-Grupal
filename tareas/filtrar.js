const filtrar = function (estado) {
    const filtrado = this.tareas.filter(elem => elem.estado === estado)
    return filtrado;
}

module.exports = filtrar;