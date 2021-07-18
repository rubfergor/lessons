const string = "aeaea"
const number = 23
const boolean = true 
const array = [1, 2, 3, 4]
const object = {
    foo: "bar",
    bar:{
        foo:true
    }
}

console.log(object.bar.foo)

const sum = (a, b) => {
    const c = 2
    return  (a + b) * c
}

const method = {
    sumar: sum
}

console.log(method.sumar(1, 2))
