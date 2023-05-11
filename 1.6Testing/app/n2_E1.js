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
    try {

        if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
            throw new Error("Los valores de la función sumaNumber deben ser números");
        }

        const dobleX = await doubleNumber(x);
        const dobleY = await doubleNumber(y);
        const dobleZ = await doubleNumber(z);

        return `NIVELL 2 EXERCICI 1: ${dobleX + dobleY + dobleZ}`;

    } catch (error) {
        console.error(error.message)
    }
};

(async () => {
    try {
        const result = await sumaNumber(2, 3, 5);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
})();

module.exports = { sumaNumber, doubleNumber }