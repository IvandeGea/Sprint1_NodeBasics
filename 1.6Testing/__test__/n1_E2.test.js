const { printMessage } = require("../app/n1_E2")
/*
- Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.
*/

test(`printMessage devuelve "The parameter received is a string." cuando el parametro es de tipo string`, () => {
    const callback = jest.fn();
    printMessage(`hola`, callback);
    expect(callback).toHaveBeenCalledWith(`The parameter received is a string`);
});

test(`printMessage devuelve"The parameter received is not a string" cuando el parametro no es un String`, () => {
    const callback = jest.fn()
    printMessage(4, callback);
    expect(callback).toHaveBeenCalledWith(`The parameter received is not a string`)
});