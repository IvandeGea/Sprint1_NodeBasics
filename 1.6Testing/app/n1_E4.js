
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
        console.log(error.message);
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

module.exports = { getDatos }