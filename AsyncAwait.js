
//Funciones Entregas anteriores

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

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        const salaryObj = salaries.find((e) => e.id === employee.id);
        if (salaryObj) {
            resolve(salaryObj.salary);
        } else {
            reject(`No s'ha trobat cap salari per a l'empleat amb id ${employee.id}`);
        }
    });
}

//NIVEL 1
async function EmployeeSalary(id) {
    try {
        const employee = await getEmployee(id);
        const salary = await getSalary(employee);

        console.log(`NIVELL 1 EXERCICI 1: L'empleat/da ${employee.name} té un salari de ${salary} €`);
    } catch (error) {
        console.error(error.message);
    }
}

EmployeeSalary(2);


//EXERCICI 2

let datos = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getDatos = async () => {
    try {
        if (datos.length === 0) {
            throw new Error("No existen datos");
        } else {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            return datos;
        }
    } catch (error) {
        console.error(error.message);
    }
};

(async () => {
    try {
        const result = await getDatos();
        console.log(`NIVELL 1 EXERCICI 2: ${result}`);
    } catch (error) {
        console.error(error.message);
    }
})();

//Nivell 2
//Exercici 1

const doubleNumber = (number) => {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number') {
            reject(new Error("La función doubleNumber necesita un número como parámetro"));
        } else {
            setTimeout(() => {
                resolve(number * 2);
            }, 2000);
        }
    });
};

const sumaNumber = async (x, y, z) => {
    try {

        if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
            throw new Error("Los valores de la función sumaNumber deben ser números");
        }

        const dobleX = await doubleNumber(x);
        const dobleY = await doubleNumber(y);
        const dobleZ = await doubleNumber(z);

        return `NIVELL 2 EXERCICI 1: ${dobleX + dobleY + dobleZ}`;

    } catch (error) {
        console.error(error.message)
    }
};

(async () => {
    try {
        const result = await sumaNumber(2, 3, 5);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
})();

//NIVELL 3

console.log("NIVELL 3")
EmployeeSalary(23);
sumaNumber(3, "e", 3)
