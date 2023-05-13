const fs = require('fs');
const employees = JSON.parse(fs.readFileSync('app/n3_E1.json', 'utf-8')).employees;

const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const employee = employees.find((e) => e.id === id);
        if (employee) {
            resolve(employee.name);
        } else {
            reject(`The ID ${id} does not exist.`);
        }
    });
};

const getSalary = (id) => {
    return new Promise((resolve, reject) => {
        const employee = employees.find((e) => e.id === id);
        if (employee) {
            resolve(employee.salary);
        } else {
            reject(`No salary found for employee with ID ${id}`);
        }
    });
};

module.exports = {
    getEmployee,
    getSalary
};
