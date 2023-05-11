const { sumaNumber, doubleNumber } = require("../app/n2_E1")


// jest.useFakeTimers()
// jest.spyOn(global, 'setTimeout');

// test('waits 2 second before ending', () => {
//     const { funcionAsicrona, funcionQueRetornaPormesa } = require('../archivosProbar/n2_E1')
//     funcionAsicrona(funcionQueRetornaPormesa).then(resultado => resultado)

//     expect(setTimeout).toHaveBeenCalledTimes(1);
//     expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
// });



// test('should return the sum of doubleNumber(x), doubleNumber(y) and doubleNumber(z)', async () => {
//     console.error = jest.fn();
//     const promise = sumaNumber(2, 3, 5);
//     jest.advanceTimersByTime(2000);
//     const result = await promise;
//     expect(result).toBe('NIVELL 2 EXERCICI 1: 32');
//     expect(console.error).not.toHaveBeenCalled();
// });
// });


describe('doubleNumber', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('Debe devolver el doble de un número', async () => {
        const result = await doubleNumber(2);
        expect(result).toEqual(4);

        // Comprobar que se ha utilizado el temporizador correcto
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    }, 20000);

    test('Debe rechazar con un error si no se proporciona un número', async () => {
        await expect(doubleNumber('no es un número')).rejects.toThrow('La función doubleNumber necesita un número como parámetro');
    });
});
