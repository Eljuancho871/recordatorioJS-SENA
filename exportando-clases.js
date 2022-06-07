export default class Tarea {
 constructor(nombre, prioridad) {
  this.nombre = nombre
  this.prioridad = prioridad
 }

 mostrar() {
  console.log(`${this.nombre} tiene un prioridad de ${this.prioridad}`)
 }
}
