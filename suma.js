const ramda = require("ramda")

const pruebaRamda = {
    foo: "bar"
}
const resultado = ramda.prop("foo", pruebaRamda)
console.log(resultado)

/**
 * Esto es la documentación para lo siguiente
 * @param {number} a 
 * @param {number} b 
 * @returns Suma estas dos cosas: a y b
 */

const sum = (a, b) => {
    if (typeof a === "string" || typeof b !== "number" ) return "blacsgsdfsdfsdbla"
    return  (a + b)
}