
const doubleNumber = (number) => {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number') {
            reject(new Error("La función doubleNumber necesita un número como parámetro"));
        } else {
            setTimeout(() => {
                resolve(number * 2);
            }, 2000);
        }
    });
};

const sumaNumber = async (x, y, z) => {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
        throw new Error("Los valores de la función sumaNumber deben ser números");
    }

    const [x2, y2, z2] = await Promise.all([doubleNumber(x), doubleNumber(y), doubleNumber(z)]);

    const suma = x2 + y2 + z2;

    return suma;
};

module.exports = { sumaNumber, doubleNumber }
