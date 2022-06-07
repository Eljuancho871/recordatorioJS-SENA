class Tarea {
 constructor(nombre, prioridad) {
  this.nombre = nombre
  this.prioridad = prioridad
 }

 mostrar() {
  return `${this.nombre} tiene un prioridad de ${this.prioridad}`
 }
}

let tarea = new Tarea('Aprendiendo Javascript', 'alta')
let tarea2 = new Tarea('Preparar cafe', 'media')
let tarea3 = new Tarea('pasear al perro', 'baja')

console.log(tarea.mostrar())
console.log(tarea2.mostrar())
console.log(tarea3.mostrar())
