//Nivel 1
//Exercici 1

function getData() {
    return new Promise((resolve, reject) => {

        if (DataTransfer.length === 0) {
            reject(new Error(`Data is empty`))
        }
        else setTimeout(() => {
            resolve(data);
        }, 1000)
    })
}

getData()
    .then((response) => { console.log("Todo esta Bien") })

    .catch((err) => { console.log(err.message) })

//Exercici 2

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
            reject(`El ${id} no existeix`);
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
            reject(` EXERCICI 2 No s'ha trobat cap salari per a l'empleat amb id ${employee.id}`);
        }
    });
}

//Exercici 3

getEmployee(1)
    .then((employee) => {
        console.log(`L'empleat amb id ${employee.id} és diu ${employee.name}`);
        return getSalary(employee);
    })
    .then((salary) => {
        console.log(`EXERCICI 3:El salari és de ${salary} €`);
    })
    .catch((error) => {
        console.error(error.message);
    });



//Nivell 3 
//


module.exports = {
    getData, getEmployee, getSalary
}