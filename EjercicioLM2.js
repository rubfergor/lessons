const saludo = (nombre, categoria) => {
    const isVip = 'VIP'
    const bienvenido = 'Bienvenido a nuestro portal, '
    if (categoria === isVip) return bienvenido + nombre + ', Usuario VIP'
    return bienvenido + nombre
}

console.log(saludo('LM', 'VIP'))
console.log(saludo('Ike', 'hola'))
