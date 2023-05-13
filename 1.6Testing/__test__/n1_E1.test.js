const { sumar, restar, multiplicar, dividir } = require("../app/n1_E1")

/*
Escribir una funcion que al pasarle dos numeros:
-Muestre la suma de los dos numeros */

describe('Test de la función sumar', () => {
    const testCases = [
        { a: 2, b: 3, expected: 5 },
        { a: -2, b: 3, expected: 1 },
        { a: 0, b: 0, expected: 0 },
        { a: 1.5, b: 2.5, expected: 4 },
    ];

    testCases.forEach((testCase) => {
        test(`Sumar de ${testCase.a} y ${testCase.b} debe ser ${testCase.expected}`, () => {
            expect(sumar(testCase.a, testCase.b)).toBe(testCase.expected);
        });
    });

    test('Lanza un error si los parámetros no son números', () => {
        expect(() => sumar('2', 3)).toThrow('Los parámetros deben ser números');
    });

});

/* Escribir una funcion que al pasarle dos numeros:
 -Muestre la restar de los dos numeros */

describe('Test de la función restar', () => {
    const testCases = [
        { a: 2, b: 3, expected: -1 },
        { a: -2, b: 3, expected: -5 },
        { a: 0, b: 0, expected: 0 },
        { a: 3, b: 1, expected: 2 },
    ];

    testCases.forEach((testCase) => {
        test(`restar de ${testCase.a} y ${testCase.b} debe ser ${testCase.expected}`, () => {
            expect(restar(testCase.a, testCase.b)).toBe(testCase.expected);
        });
    });

    test('Lanza un error si los parámetros no son números', () => {
        expect(() => restar('2', 3)).toThrow('Los parámetros deben ser números');
    });

});

/* Escribir una funcion que al pasarle dos numeros:
 -Muestre la multiplicació de los dos numeros */

describe('Test de la función multiplicar', () => {
    const testCases = [
        { a: 2, b: 3, expected: 6 },
        { a: -2, b: 3, expected: -6 },
        { a: 0, b: 5, expected: 0 },
        { a: 3, b: 11, expected: 33 },
    ];

    testCases.forEach((testCase) => {
        test(`Multiplicar de ${testCase.a} y ${testCase.b} debe ser ${testCase.expected}`, () => {
            expect(multiplicar(testCase.a, testCase.b)).toBe(testCase.expected);
        });
    });

    test('Lanza un error si los parámetros no son números', () => {
        expect(() => multiplicar('2', 3)).toThrow('Los parámetros deben ser números');
    });

});

/* Escribir una funcion que al pasarle dos numeros:
 -Muestre la divición de los dos numeros */

describe('Test de la función Dividir', () => {
    const testCases = [
        { a: 4, b: 2, expected: 2 },
        { a: 20, b: 5, expected: 4 },
        { a: 33, b: 3, expected: 11 },
        { a: 1, b: 2, expected: 0.5 },
    ];

    testCases.forEach((testCase) => {
        test(`dividir de ${testCase.a} y ${testCase.b} debe ser ${testCase.expected}`, () => {
            expect(dividir(testCase.a, testCase.b)).toBe(testCase.expected);
        });
    });

    test('Lanza un error si los parámetros no son números', () => {
        expect(() => dividir('2', 3)).toThrow('Los parámetros deben ser números');
    });

});