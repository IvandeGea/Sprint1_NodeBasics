const { getEmployee, getSalary } = require("../app/n1_E3")

describe('getEmployee', () => {
    test('Debe retornar el nombre del empleado si el ID es valido', () => {
        return getEmployee(1).then((nombre) => {
            expect(nombre).toBe('Linux Torvalds');
        });
    });


    test('Activa el reject de la promesa si el ID no es valido', () => {
        return getEmployee(5).catch((error) => {
            expect(error.message).toBe(`The ID does not exist`);
        });
    });
});
describe('getSalary', () => {
    test('Debe retornar el salario del empleado si el ID es valido', () => {
        return getSalary({ id: 1 }).then((salario) => {
            expect(salario).toBe(4000);
        });
    });
    test('Activa el reject y retorna el error', () => {
        return getSalary({ id: 5 }).catch((error) => {
            expect(error.message).toBe(`No salary found for employee with ID`);
        });
    });
});