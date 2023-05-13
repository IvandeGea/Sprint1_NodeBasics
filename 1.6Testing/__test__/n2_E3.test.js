// Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.


const { Developer, createDeveloper, FrontEndDeveloper, BackEndDeveloper } = require('../app/n2_E3');

// Que no es pugui crear una instància de la classe abstracta Developer directament, sinó que en intentar-ho, es llanci un error.

// Que es puguin crear instàncies de les subclasses FrontEndDeveloper i BackEndDeveloper a través de la funció createDeveloper, i que aquestes instàncies tinguin els atributs i mètodes corresponents.

// Que en cridar a createDeveloper amb un tipus de desenvolupador invàlid, es llanci un error amb un missatge específic.

describe('Developer', () => {
    test('No se puede crear una instancia de la classe abstacta Developer ', () => {
        expect(() => {
            new Developer('Juan');
        }).toThrowError(new TypeError("Can't instantiate abstract class!"));
    });
});

describe('createDeveloper', () => {
    test('debe crear una instancia de FrontEndDeveloper', () => {
        const developer = createDeveloper('front-end', 'Juan');
        expect(developer instanceof FrontEndDeveloper).toBe(true);
        expect(developer.getName()).toBe('Juan');
        expect(developer.getRole()).toBe('Front End Developer');
    });

    test('debe crear una instancia de BackEndDeveloper', () => {
        const developer = createDeveloper('back-end', 'Alba');
        expect(developer instanceof BackEndDeveloper).toBe(true);
        expect(developer.getName()).toBe('Alba');
        expect(developer.getRole()).toBe('Back End Developer');
    });

    test('debe mandar un error si el role no es correcto', () => {
        expect(() => {
            createDeveloper('full-stack', 'Ivan');
        }).toThrowError(new Error('Invalid developer type!'));
    });
});
