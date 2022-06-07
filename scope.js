// scope

var musica = 'rock'

if (musica) {
 var musica = 'grunge'
 console.log('dentro del if', musica)
}

console.log('fuera del if', musica)

//scope con let

 musica = 'rock'

if (musica) {
 let musica = 'grunge'
 console.log('dentro del if', musica)
}

console.log('fuera del if', musica)
