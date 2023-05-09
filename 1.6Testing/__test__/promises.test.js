const { getData, getEmployee, getSalary } = require("../../Promeses")


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

test("")