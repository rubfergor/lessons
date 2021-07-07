const baleny = {
    nivel: '17',
    poderDivino: '7%',
    esGuapo: true,
}

const rashid = {
    nivel: '18',
    poderDivino: '0%',
    esGuapo: false,
    "cuanto-dinero-tiene": '0'
}


const prop = (objeto, categoria) => {
    return objeto[categoria]
}

console.log(prop(rashid, 'nivel'))