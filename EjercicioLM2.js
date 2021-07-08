const format = require("date-fns")

const saludo = (nombre, categoria) => {
    const isVip = 'VIP'
    const bienvenido = 'Bienvenido a nuestro portal, '
    const hoyEs = ', su inicio de sesión se ha producido el día '
    const date = format.format(new Date(), 'dd-MM-yyyy')
    const preHora = ', a las '
    const hora = format.format(new Date(), 'pp')
    if (categoria === isVip) return bienvenido + nombre + ', Usuario VIP' + hoyEs + date + preHora + hora
    return bienvenido + nombre + hoyEs + date + preHora + hora
}

console.log(saludo('LM', 'VIP'))
console.log(saludo('Ike', 'hola'))
