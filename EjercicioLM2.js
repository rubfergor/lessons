const fns = require("date-fns")

const saludo = (nombre, categoria) => {
    const isVip = 'VIP'
    const bienvenido = 'Bienvenido a nuestro portal, '
    const hoyEs = ', su inicio de sesión se ha producido el día '
    const date = fns.format(new Date(), 'dd-MM-yyyy')
    const preHora = ', a las '
    const hora = fns.format(new Date(), 'pp')
    if (categoria === isVip) return bienvenido + nombre + ', Usuario VIP' + hoyEs + date + preHora + hora
    return bienvenido + nombre + hoyEs + date + preHora + hora
}

//console.log(saludo('LM', 'VIP'))
//console.log(saludo('Ike', 'hola'))



const balanceRandom = () => {
    const total = (Math.random()*15000).toFixed(2)
    return total
}



const generateRandomDate = () => { 
    const añoMinimo = -10
    const añoMaximo = +10
    const start = fns.add(new Date(), {
        years: Math.floor(Math.random() * (añoMaximo - añoMinimo + 1) + añoMinimo)
    })
    return new Date(start)
}

console.log(generateRandomDate())


