const { getDatos } = require("../app/n1_E4")


describe('getDatos', () => {
    test('Debe lanzar un error si no hay datos', () => {
        return getDatos().catch((error) => {
            expect(error.message).toBe('No existen datos');
        });
    });

    test('Debe devolver los datos después de un retraso de 2 segundos', () => {


        const datos = [{ id: 1, salary: 4000 },
        { id: 2, salary: 1000 },
        { id: 3, salary: 2000 }];

        const startTime = Date.now();

        return getDatos().then((result) => {

            expect(result).toEqual(datos);
            expect(Date.now() - startTime).toBeGreaterThanOrEqual(2000);
        });
    });
});