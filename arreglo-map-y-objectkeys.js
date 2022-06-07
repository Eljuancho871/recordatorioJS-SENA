//arreglos y foreach

const carrito = ['producto', 'producto2', 'producto3']
console.log(carrito)

const appcontenedor = document.getElementById('app')

let html = ''

carrito.forEach((producto) => {
 html += `<li>${producto}</liv>`
})

appcontenedor.innerHTML = html

//arreglos y map

carrito.map((producto) => {
 return 'el producto es' + producto
})

//objects keys

const persona = {
 nombre: 'danna',
 profesion: 'desarrollador web',
 edad: 16,
}
console.log(Object.keys(persona))
