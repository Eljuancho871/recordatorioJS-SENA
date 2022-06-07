//metodos en arreglos

const personas = [
 { nombre: 'juan', edad: 16, aprendiendo: 'javascript ' },
 { nombre: 'pablo', edad: 14, aprendiendo: 'PHP' },
 { nombre: 'daniela', edad: 21, aprendiendo: 'adobe' },
 { nombre: 'karen', edad: 30, aprendiendo: 'pyhon' },
 { nombre: 'miguel', edad: 35, aprendiendo: 'reactJS' },
]

console.log(personas)

//mayores de 28 años

const mayores = personas.filter((persona) => {
 return persona.edad > 20
})

console.log(mayores)

//que aprende daniela y su edad
const daniela = personas.find((persona) => {
 return persona.nombre == 'daniela'
})

console.log(daniela)
