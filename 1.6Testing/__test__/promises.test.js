/*
- Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

- Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).

-Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.*/


const { getData, getEmployee, getSalary } = require("../../Promeses")
const { getDatos } = require("../../AsyncAwait")


test('getData() retorna data despues de 1 segundo', () => {
    return getData().then(data => {
        expect(data).toBeDefined();
    });
});

test('getData() lanza un error si DataTransfer está vacío', () => {
    expect.assertions(1);
    return getData().catch(err => {
        expect(err.message).toMatch(/Data is empty/);
    });
});




// Funcion getEmployee
//
describe(`Test de la Funcion getEmployee`, () => {
    [{
        id: 1,
        name: 'Linux Torvalds', expected: `Linux Torvalds`
    }, {
        id: 2,
        name: 'Bill Gates', expected: `Bill Gates`
    }, {
        id: 3,
        name: 'Jeff Bezos', expected: `Jedd Bezos`
    }];

    testCases.forEach((testCase) => {
        test(`getEmploye de ${testCase.id} debe ser ${testCase.expected}`, () => {
            expect(getEmployee(testCase.id)).toBe(testCase.expected)
        });
    })

    test('Lanza un error si el parámetro no es un números', () => {
        expect(() => dividir('2')).toThrow('Los parámetros deben ser números');
    });

})
//Funcion getSalary
// Tiene que relacionar el id Con el salario

describe(`Test de la Funcion getSalary`, () => {
    [{
        id: 1,
        salary: 4000, expected: 4000
    }, {
        id: 2,
        salary: 1000, expected: 1000
    }, {
        id: 3,
        salary: 2000, expected: 2000
    }];

    testCases.forEach((testCase) => {
        test(`getSalary de ${testCase.id} debe ser ${testCase.expected}`, () => {
            expect(getSalary(testCase.id)).toBe(testCase.expected)
        });
    })

    test('Lanza un error si el parámetro no es un números', () => {
        expect(() => dividir('2')).toThrow('Los parámetros deben ser números');
    });

})

//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.

//Tiene que testear que devuelve  un array de objetos.
//testear que si esta vacio devuelve un error.
