//import { toNamespacedPath } from "path/posix"

//en TS no hace falta el require, se usa el import
// const fns = require("date-fns") |-- ESTÁ MAL
// const faker = require("faker")  |

import {add, isBefore, formatISO} from 'date-fns';
import faker from 'faker';

/**
 * Suma de dos números
 * @param a
 * @param b
 * @returns suma los valores de a y b
 */

export const suma = (a: number, b: number): number => {
  return a + b;
};
export const duplicar = (a: number): number => {
  return a * 2;
}; // es lo mismo que: a*2 -- sin return ni llaves

/**
 * Función de registro
 * @param nombre
 * @returns Un objeto con el nombre introducido y valores aleatorios en los demás campos
 */
export const createUser = (nombre: string) => {
  const generateRandomDate = () => {
    const añoMinimo = -10;
    const añoMaximo = 10;
    const start = add(new Date(), {
      years: Math.floor(Math.random() * (añoMaximo - añoMinimo + 1) + añoMinimo)
    });
    return new Date(start);
  };
  const fecha = formatISO(generateRandomDate());
  const balanceRandom = () => {
    const total = (Math.random() * 15534).toFixed(2);
    return total;
  };
  const objectUser = {
    name: nombre,
    balance: balanceRandom(),
    acceptMarketing: Boolean(Math.random() < 0.5),
    createDate: fecha
  };
  return objectUser;
};

/**
 * Función de cadena de usuarios
 * @returns una lista de usuarios aleatorios creados con createUser

 */
export const getUsers = () => {
  const nameUsers = faker.datatype
    .array(Math.floor(Math.random() * 10))
    .map(() => faker.name.firstName())
    .map(createUser);
  return nameUsers;
};
// if (true == isBefore((x.createDate), new Date()) return x.createDate) -- Está mal

/**
 * Función de suma de balance
 * @returns La suma de balance de los usuarios creados ANTES de la ejecución de la función y que acepten marketing
 */
export const aggregateBalance2 = () => {
  return getUsers()
    .filter((user) => user.acceptMarketing === true)
    .filter((user) => isBefore(new Date(user.createDate), new Date()))
    .reduce((total, user) => total + parseFloat(user.balance), 0);
};

/**
 * Función de suma de balance
 * @returns La suma de balance de los usuarios creados ANTES de la ejecución de la función y que acepten marketing, mostrando la lista previamente.
 */
export const aggregateBalance = () => {
  const users = getUsers()
    .filter((user) => user.acceptMarketing === true)
    .filter((user) => isBefore(new Date(user.createDate), new Date()));
  const users2 = users.reduce(
    (total, user) => total + parseFloat(user.balance),
    0
  );
  return {users, users2};
};
