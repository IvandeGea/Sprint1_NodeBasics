const sumar = ((a, b) => {
    const operacion = a + b

    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Los parámetros deben ser números.");
    }

    return operacion;
})

const restar = ((a, b) => {
    const operacion = a - b

    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Los parámetros deben ser números.");
    }
    return operacion;
})

const multiplicar = ((a, b) => {
    const operacion = a * b

    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Los parámetros deben ser números.");
    }
    return operacion;
})

const dividir = ((a, b) => {
    const operacion = a / b

    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Los parámetros deben ser números.");
    }
    return operacion;
})

console.log(multiplicar(2, 3))
console.log(sumar(2, 3))


module.exports = {
    sumar,
    restar,
    dividir,
    multiplicar
}