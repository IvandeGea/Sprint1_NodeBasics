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
class Develope {
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
class FrontEndDeveloper extends Develope {
    constructor(name) {
        super(name, 'Front End Developer');
    }
}

class BackEndDeveloper extends Develope {
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

module.exports = {
    Developer, createDeveloper, FrontEndDeveloper, BackEndDeveloper
}