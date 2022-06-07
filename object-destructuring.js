//destructurando un objeto

const aprendiendoJs = {
    version:{
        nueva:'ES6',
        anterior: 'ESS'
    },
}

// extraer valores de un objeto 

console.log(aprendiendoJs)

//versiones anteriores

let version = aprendiendoJs.version.nueva
let frameworks = aprendiendoJs.frameworks[1]

console.log(version)

//destructurado forma nueva

let(version, frameworks) = aprendiendoJs
console.log(version)
console.log(frameworks)