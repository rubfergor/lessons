const ramda = require("ramda")

const pruebaRamda = {
    foo: 'bar'
}
const resultado = ramda.prop('foo', pruebaRamda)
console.log(resultado)

/**
 * Operación de suma
 * @param {number} a 
 * @param {number} b 
 * @returns la suma de a + b
 */

const suma = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') return 'Por favor, introduzca números'
    return (a + b)
}
 
const date = new Date()
console.log(date.toISOString())


