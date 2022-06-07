const descargarusuarios = (cantidad) =>
 new promise((reswolve, reject) => {
  //pasar la cantidad a la api

  const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`

  //llamado ajax

  xhr = new XMLHttpRequest()

  //abrir la conexion
  xhr.open('GET', api, true)
 })
