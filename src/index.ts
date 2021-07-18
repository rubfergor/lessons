//import {suma as suma2} from "./utils"
//import hola from "./utils"  --> si fuese un export default

//import {duplicar} from "./utils"
//console.log(duplicar(3))

//const prueba = [0,1,2,3,4,5]
// const resultado = []

//const resultado = prueba.map(a => duplicar(a)).map(a => a+1)
//console.log(resultado)

//ES LO MISMO QUE:

//for (let a = 0; a < prueba.length; a++) { // a++ es como a = a + 1
//     resultado[a] = prueba[a]*2
//}
//console.log(resultado)

//const filtrado = prueba.filter(i => i > 0)
//console.log(prueba)
//console.log(filtrado)

//export{} si no se está importando o exportando nada

//--------------------------------------------------------------------------------

//import {createUser} from "./utils"
//console.log(createUser("Baleny"))
//console.log(createUser("Ellie"))
//console.log(createUser("David"))

//import {getUsers} from './utils';
//console.log(getUsers());

import {aggregateBalance as balance} from './utils';
console.log(balance());
