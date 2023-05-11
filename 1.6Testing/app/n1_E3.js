let employees = [
    {
        id: 1,
        name: "Linux Torvalds",
    },
    {
        id: 2,
        name: "Bill Gates",
    },
    {
        id: 3,
        name: "Jeff Bezos",
    },
];

let salaries = [
    {
        id: 1,
        salary: 4000,
    },
    {
        id: 2,
        salary: 1000,
    },
    {
        id: 3,
        salary: 2000,
    },
];



const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const employee = employees.find((e) => e.id === id);
        if (employee) {
            resolve(employee.name);
        } else {
            reject(new Error(`The ID does not exist`))
        }
    });
};



const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        const salaryObj = salaries.find((e) => e.id === employee.id);
        if (salaryObj) {
            resolve(salaryObj.salary);
        } else {
            reject(new Error(`No salary found for employee with ID`));
        }
    });
}

module.exports = { getEmployee, getSalary }