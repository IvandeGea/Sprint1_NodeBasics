// Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.


const { Developer, createDeveloper } = require('../app/n2_E3');

describe('createDeveloper', () => {
    it('devuelve un objeto con el role del desarrollador', () => {
        const developer = createDeveloper('front-end');
        expect(FrontEndDeveloper).toEqual(expect.objectContaining({ name: `Front end Developer` }));
    });

    it('crea un objeto con el prototipo de la clase abstracta ClaseAbs', () => {
        const frontEndDeveloper = createDeveloper('front-end');
        expect(Object.getPrototypeOf(Developer)).toBe(Developer.prototype);
    });
});