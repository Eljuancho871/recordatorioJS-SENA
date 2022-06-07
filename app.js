import nombreTarea from './dulos.ES6.js'
import crearTarea, { tareaCompleta } from './exportando funciones.js'
import Tarea from './exportando-clases.js'

console.log(nombreTarea)

const tarea1 = crearTarea('pasear al perro', 'media')

console.log(tarea1)
tareaCompleta()

const tareaClases = new Tarea('Aprender Javascript', 'urgente')
