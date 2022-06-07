//objetos

//objetos literal

const persona = {
 nombre: 'juan',
 profesion: 'desarrollador web',
 edad: 16,
}

console.log(persona)
console.log(persona.nombre)
console.log(persona.profesion)
console.log(persona.edad)
console.log(persona['edad'])

//objetos constructor

function tareas(nombre, urgencia) {
 this.nombre = nombre
 this.urgencia = urgencia
}

//crear una nueva tarea

const tarea1 = new tareas('aprender javascript y react', 'urgente')
const tarea2 = new tareas('preparar cafe', 'uregente')
const tarea3 = new tareas('conocer a mis suegros', 'baja')

console.log(tarea1)
console.log(tarea2)
console.log(tarea3)
console.log(tarea4)
