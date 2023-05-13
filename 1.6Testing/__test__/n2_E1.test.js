
const { sumaNumber, doubleNumber } = require('../app/n2_E1');

// Prueba para la función doubleNumber
describe('doubleNumber', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    test('debe devolver el doble del numero en 2 segundos', async () => {
        const inputNumber = 5;
        const expectedOutput = inputNumber * 2;
        const resultPromise = doubleNumber(inputNumber);
        jest.advanceTimersByTime(2000);
        const result = await resultPromise;
        expect(result).toEqual(expectedOutput);
    });

    test('debe lanzar un error si los argumentos no son numeros', async () => {
        const inputNumber = '5';
        const expectedErrorMessage = 'La función doubleNumber necesita un número como parámetro';
        const resultPromise = doubleNumber(inputNumber);
        jest.advanceTimersByTime(2000);
        await expect(resultPromise).rejects.toThrow(expectedErrorMessage);
    });
});



jest.useFakeTimers();

describe('sumaNumber', () => {
    test('debe devolver la suma de doble de los argumentos', async () => {
        const inputX = 2;
        const inputY = 3;
        const inputZ = 4;
        const expectedOutput = 18;
        jest.useFakeTimers();
        const resultPromise = sumaNumber(inputX, inputY, inputZ);
        jest.advanceTimersByTime(6000);
        const result = await resultPromise;
        expect(result).toBe(expectedOutput);
    }, 10000);


    test('debe lanzar un error si alguno de los argumentos no es un numero', async () => {
        // Define input values and expected error message
        const inputX = 2;
        const inputY = '3';
        const inputZ = 4;
        const expectedErrorMessage = 'Los valores de la función sumaNumber deben ser números';

        // Call sumaNumber and advance timers
        const resultPromise = sumaNumber(inputX, inputY, inputZ);
        jest.runAllTimers();

        // Check that the result promise rejects with the correct error message
        await expect(resultPromise).rejects.toThrow(expectedErrorMessage);
    });
});
