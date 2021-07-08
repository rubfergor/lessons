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