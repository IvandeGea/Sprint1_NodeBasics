const { Person } = require("../app/n2_E2")


jest.mock("../app/n2_E2", () => {
    const originalModule = jest.requireActual("../app/n2_E2");

    return {
        ...originalModule,

        Persona: jest.fn().mockImplementation((name) => {
            if (name === "") throw new Error("empty name");

            return {
                dirNom: jest.fn(() => name),
            };
        }),
    };
});

describe("Person", () => {
    it("Dado un nombre vacío, se debería lanzar un error ", () => {

        const emptyName = "";
        try {
            new Person(emptyName);
        } catch (error) {

            expect(error.message).toBe("Person is not defined");
        }
    });
    it("Dado un nombre, se debe comprobar si se ha llamado con el nombre", () => {

        const name = "Ivan";
        const persona = new Person(name);
        expect(persona.name).toBe(name);

    });

    it("Cuando se llama al método dirNom, debe comprobar si se ha llamado y si devuelve el nombre esperado.", () => {
        const name = "Ivan.";
        const persona = new Person(name);


        const mockDirNom = jest.fn(() => name);
        persona.dirNom = mockDirNom;


        persona.dirNom();
        expect(mockDirNom).toHaveBeenCalled();


        const returnedName = persona.dirNom();
        expect(returnedName).toBe(name);
    });

});