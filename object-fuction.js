//metodos o funciones en un objeto

const persona = {
 nombre: 'danna',
 profesion: 'desarrollador web',
 edad: 16,
 musicarock: true,
 mostrarinformacion: function () {
  console.log(
   `${this.nombre} es ${this.profesion} y su edad es de ${this.edad}`
  )
 },
}

persona.mostrarinformacion()
