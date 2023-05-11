//Nivel 1
//Exercici 1

function getData() {
    return new Promise((resolve, reject) => {
        if (data.length === 0) {
            reject(new Error('Data is empty'));
        } else {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        }
    });
}

getData()
    .then(() => {
        console.log('Everything is fine.');
    })
    .catch((err) => {
        console.log(err.message);
    });


//Exercici 2

const printMessage = (param, callback) => {
    if (typeof param === String) {
        callback('The parameter received is a string');
    } else {
        callback('The parameter received is not a string');
    }
};


printMessage('Hola', console.log);
printMessage(123, console.log);


//Nivell 2

//Exercici 1
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const employee = employees.find((e) => e.id === id);
        if (employee) {
            resolve(employee);
        } else {
            reject(`The ID ${id} does not exist.`);
        }
    });
};



//Exercici 2

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        const salaryObj = salaries.find((e) => e.id === employee.id);
        if (salaryObj) {
            resolve(salaryObj.salary);
        } else {
            reject(`No salary found for employee with ID ${employee.id}.`);
        }
    });
}


//Exercici 3

getEmployee(1)
    .then((employee) => {
        console.log(`The employee with ID ${employee.id} is named ${employee.name}.`);
        return getSalary(employee);
    })
    .then((salary) => {
        console.log(`EXERCISE 3: The salary is ${salary} €.`);
    })
    .catch((error) => {
        console.error(error.message);
    });



//Nivell 3 
//


module.exports = {
    getData,
    getEmployee,
    getSalary,
    printMessage
}