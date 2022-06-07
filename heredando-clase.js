class Tarea {
 constructor(nombre, prioridad) {
  this.nombre = nombre
  this.prioridad = prioridad
 }

 mostrar() {
  console.log(`${this.nombre} tiene un prioridad de ${this.prioridad}`)
 }
}

class ComprasPendientes extends Tarea {
 constructor(nombre, prioridad, cantidad) {
  super(nombre, prioridad)
  this.cantidad = cantidad
 }

 mostrar() {
  super.mostrar()
  console.log(`y la cantidad de ${this.cantidad}`)
 }

 hola() {
  return 'hola'
 }
}

let tarea = new Tarea('Aprendiendo Javascript', 'alta')
let tarea2 = new Tarea('Preparar cafe', 'media')
let tarea3 = new Tarea('pasear al perro', 'baja')

console.log(tarea.mostrar())
console.log(tarea2.mostrar())
console.log(tarea3.mostrar())

//Compras

let compra1 = new ComprasPendientes('jabon', 'urgente', 3)
compra1.mostrar()
compra1.hola()
