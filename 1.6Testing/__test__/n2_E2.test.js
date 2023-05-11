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
    it("Given an empty name, when create a person with empty name, then should throw an error of empty name", () => {

        const emptyName = "";
        try {
            new Person(emptyName);
        } catch (error) {

            expect(error.message).toBe("Person is not defined");
        }
    });
    it("Given a name, when Person is instanced with name, then check if it has been called with name", () => {

        const name = "Ivan";
        const persona = new Person(name);
        expect(persona.name).toBe(name);

    });

    it("Given instance of Person, when dirNom method is called, then check if it has been called and returns the name expected to be", () => {
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