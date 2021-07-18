const milo = {
    ojos: "Marrones",
    raza: "Chucho",
    "cuanto-dinero-tiene": 0
}

console.log(milo["ojos"])

const prop = (objeto, categoria) => {
    return objeto[categoria]
}

console.log(prop(milo, "ojos"))