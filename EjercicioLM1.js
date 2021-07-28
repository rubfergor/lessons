/**
 * Operación de suma
 * @param {number} a
 * @param {number} b
 * @returns la suma de a + b
 */

const suma = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number')
    return 'Por favor, introduzca números';
  return a + b;
};

const dadoDe20 = () => {
  const resultado = Math.floor(Math.random() * (20 + 1) + 1);
  return resultado;
};

const arrayDadoDe20 = (numDeTiradas) => {
  const cadena = Array(numDeTiradas).fill(null).map(dadoDe20);
  return cadena;
};

const impactaDadoDe20 = (numDeTiradas) => {
  const cadena = arrayDadoDe20(numDeTiradas).filter((num) => num > 10);
  return cadena;
};

const fns = require('date-fns');

const registerDate = fns
  .add(new Date(), {
    years: Math.floor(Math.random() * (0 - -5 + 1) + -5)
  })
  .toISOString();

console.log(registerDate);
