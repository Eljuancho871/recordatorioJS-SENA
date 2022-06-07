//template string

const nombre = 'danna'
const trabajo = 'desarrollador web'

//concatenacion javascript

console.log('nombre ' + nombre + ' , trabajo: ' + trabajo)
console.log('nombre: ${nombre}, trabajo: ${trabajo}')

//concatenar con multiples lineas

const concatenarApp = document.getElementById('app')
let html = '<ul>' + '<li>nombre:' + nombre + '</li>'
'<li>trabajo:' + trabajo + '</li>'
;('</ul>')

let html2 = `
         
         <ul>
             <li>nombre: ${nombre}</li>
             <li>trabajo: ${trabajo}</li>
             </ul>
`

concatenarApp.innerHTML = html2
