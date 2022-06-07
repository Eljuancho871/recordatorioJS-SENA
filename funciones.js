// tipos de funciones

//funcion declarativa

function saludar(nombre) {
 console.log('bienvenido' + nombre)
}
saludar('juan')
saludar('alejandro')
saludar('daniela')

//funcion exprecion

const cliente = function (nombrecliente) {
 console.log('mostrando datos del cliente: ' + nombrecliente)
}

cliente('juan')

//funciones con parametros

function actividad(nombre = 'wlater whiter', actividad = 'enseñar quimica') {
 console.log(
  `la personma ${nombre}, esta realizando la actividad ${actividad} `
 )
}
actividad('juan', 'aprendiendo javascript')
actividad('pedro', 'creando un sitio web')
actividad('antonio')
