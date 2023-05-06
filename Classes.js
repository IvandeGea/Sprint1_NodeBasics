//Nivell 1
//Exercici 1
((a, b) => { console.log(a + b) })(2, 5);


//Nivell 2
//Exercici 1
const edadUsuari = (anys) => {
    return {
        edad: anys
    };
}
//Exercici 2

class Persona {
    constructor(nom) {
        this.nom = nom;
    }

    dirNom() {
        console.log(this.nom);
    }
}

//Nivell 3

function objectCreator() {

    function classeAbstracta() {
        if (this.constructor === classeAbstracta) {
            throw new Error("Cannot instantiate abstract class.");
        }
    }

    classeAbstracta.prototype.abstractMethod = function () {
        throw new Error("Abstract method must be implemented.");
    }

    function ConcreteClass() {
        classeAbstracta.call(this);
    }

    ConcreteClass.prototype = Object.create(classeAbstracta.prototype);
    ConcreteClass.prototype.constructor = ConcreteClass;

    ConcreteClass.prototype.concreteMethod = function () {

    }

    return new ConcreteClass();
}

var obj1 = objectCreator()
var obj2 = objectCreator()

console.log(obj1 instanceof ConcreteClass)
console.log(obj2 instanceof ConcreteClass);

obj1.concreteMethod()
obj1.abstractMethod()