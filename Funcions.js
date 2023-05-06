//Nivell 1
//Exercici 1

function usuario(nombre) {

    return console.log(nombre)
}

const miNombre = usuario("Juan")



//Nivell 2
//Exercici 1

let nombre = "Ivan"
let apellido = "de Gea Teixidó"

console.log(`${nombre} ${apellido}`)


//Exercici 2
function anys() {
    return 30
}
console.log(`Tinc ${anys()} anys`)

//Nivell 3
//Exercici 1

const countToTen = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
};

const functions = Array(10).fill(countToTen);

for (let i = 0; i < functions.length; i++) {
    functions[i]();
}

//Exercici 2

const nombreUsuario = (function (nombre) {
    console.log(nombre)
})("Ivan")


