const hola = (dato1 , rango) => {
    const isVip = "VIP"
    const saludo1 = "Qué pasa crack "
    const saludo2 = "Vamos ahí "
    if (rango === isVip) return saludo2 + dato1
    return saludo1 + dato1
}

console.log(hola("Maga", "VI2P"))

