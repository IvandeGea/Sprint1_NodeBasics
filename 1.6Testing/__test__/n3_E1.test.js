const fs = require('fs');
const path = require('path');
const { getEmployee, getSalary } = require("../app/n3_E1");

jest.mock('fs', () => ({
    readFileSync: jest.fn(() => '{"employees":[{"id":1,"name":"Juan","salary":50000},{"id":2,"name":"Rosa","salary":50000}]}'),
}));
// Construir ruta absoluta al archivo JSON
const filePath = path.resolve(__dirname, '..', 'app', 'n3_E1.json');

describe('Tests de la funcion getEmployee ', () => {
    test('debe devolver el nombre el empleado con el id llamado', async () => {
        const result = await getEmployee(1);
        expect(result).toBe('Juan');
    });

    test('debe lanzar un error si el id no existe', async () => {
        try {
            await getEmployee(3);
        } catch (error) {
            expect(error).toBe('The ID does not exist.');
        }
    });
});

describe('Tests de la funcion getSalary', () => {
    test('debe devolver el salario del empleado con el id llamado', async () => {
        const result = await getSalary(2);
        expect(result).toBe(50000);
    });

    test('debe lanzar un error si el id no existe', async () => {
        try {
            await getSalary(4);
        } catch (error) {
            expect(error).toBe('No salary found for employee with this ID');
        }
    });
});
