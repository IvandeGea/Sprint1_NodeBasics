
//Nivell 1
//Exercici 1
((a, b) => { console.log(a + b) })(2, 5);


//Nivell 2
//Exercici 1
const getAge = (years) => {
    return {
        age: years
    };
}
//Exercici 2
class Person {
    constructor(name) {
        this.name = name;
    }

    dirNom() {
        console.log(this.name);
    }
}

//Nivell 3

//Classe Abstracta
function Developer(name) {
    if (this.constructor === Developer) {
        throw new TypeError("Can't instantiate abstract class!");
    }
    this.name = name;
}

Developer.prototype.getName = function () {
    return this.name;
}


//Definim les subclasses que extenen de la classe abstracta
class Developer {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }
}

//Creem les subclases  
class FrontEndDeveloper extends Developer {
    constructor(name) {
        super(name, 'Front End Developer');
    }
}

class BackEndDeveloper extends Developer {
    constructor(name) {
        super(name, 'Back End Developer');
    }
}
//Creem la funcio creeadora d'objectes
function createDeveloper(type, name) {
    switch (type) {
        case 'front-end':
            return new FrontEndDeveloper(name);
        case 'back-end':
            return new BackEndDeveloper(name);
        default:
            throw new Error('Invalid developer type!');
    }
}

const frontEndDev = createDeveloper('front-end', 'John');
console.log(frontEndDev.getName());
console.log(frontEndDev.getRole());

const backEndDev = createDeveloper('back-end', 'Jane');
console.log(backEndDev.getName());
console.log(backEndDev.getRole());
