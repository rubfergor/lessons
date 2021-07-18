//import {duplicar} from "./utils"

const prueba = [0.5,1,2,3,4,5]
const resultado = []

// const resultado = prueba.map(a => duplicar(a*2))

// console.log(resultado)

for (let index = 0; index < prueba.length; index++) {
   resultado[index] = prueba[index]*2    
}

console.log(resultado)

export{}