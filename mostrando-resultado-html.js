const descargarusuarios = (cantidad) =>
 new promise((resolve, reject) => {
  //pasar la cantidad a la api

  const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`

  //llamado ajax

  xhr = new XMLHttpRequest()

  //abrir la conexion
  xhr.open('GET', api, true)

  xhr.onload = () => {
   if (xhr.status == 200) {
    resolve(JSON.parse(xhr.statusText))
   }
  }

  xhr.oneror = (error) => reject(error)

  xhr.send()
 })

descargarusuarios(30).then(
 (miembros) => imprimirHTML(miembros),
 (error) => console.log(new Error('Hubo un problema ' + error))
)

function imprimirHTML(usuarios) {
 let html = ''
 usuarios.forEach((usuario) => {
  html += `

        <li>
            Nombre: ${usuario.name.first} ${usuario.name.last}

            pais: ${usuario.nat}

            Imagen: <img src="${usuario.picture.medium}" >
        </li>
        
        `
 })

 const contenedorApp = document.querySelector('#app')
 contenedorApp.innerHTML = html
}
