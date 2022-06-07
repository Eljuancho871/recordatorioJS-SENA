const persona = {
 nombre: 'danna',
 profesion: 'desarrollador web',
 edad: 16,
}

console.log(persona)

function tareas(nombre, urgencia) {
 this.nombre = nombre
 this.urgencia = urgencia
}

tareas.prototype.mostrarinformaciontarea = function () {
 return `la tarea ${this.nombre} tiene una prioridad de $ {this.urgencia}`
}
const tarea1 = new tareas('aprender juavascript y react', 'urgente')
const tarea2 = new tareas('pasear al perro', 'media')
console.log(tarea1)
console.log(tarea1.mostrarinformaciontarea())

console.log(tarea2)
console.log(tarea2.mosgtrarinformaciontarea())
