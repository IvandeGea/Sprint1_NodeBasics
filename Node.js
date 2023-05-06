const fs = require('fs');


const escribirFrase = () => {
    const frase = "Escribiendo desde Node.js";
    fs.writeFile('node.txt', frase, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

escribirFrase()

//Exercici 2
fs.readFile("./node.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

//Exercici 3

const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const {
    createReadStream,
    createWriteStream
} = require('fs');

const gzip = createGzip();
const source = createReadStream('node.txt');
const destination = createWriteStream('node.txt.gz');

pipeline(source, gzip, destination, (err) => {
    if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
});

//NIVELL 2
//Exercici 1

// function saludo() {
//     return console.log("HOLA SOY SetInterval")
// }
// setInterval(saludo, 3000)

//Exercici 2

// const { execFile } = require('child_process');
// const path = require('path');
// const lsPath = path.join(process.env.HOME, '/');

// const child = execFile('ls', ['-l', lsPath], (error, stdout, stderr) => {
//     if (error) {
//         throw error;
//     }
//     console.log(stdout);
// });

//NIvell 3

//Exercici 1

//Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.


// Utilitzar el readFileSync per asegurarse que ho llegeix tot abans de codificarho. amb el readFile no t'asegures del tot.


//readFileSync torna un buffer que l'hem de transformar a string amb el toString

//el metodo hec y el base64 esperan una cadena

// Lee el archivo node.txt
const data = fs.readFileSync('./node.txt');

// Codifica el archivo a hexadecimal y lo guarda en un nuevo archivo
const hexData = Buffer.from(data).toString('hex');
fs.writeFileSync('node-hex.txt', hexData);

// Codifica el archivo a base64 y lo guarda en un nuevo archivo
const base64Data = Buffer.from(data).toString('base64');
fs.writeFileSync('node-base64.txt', base64Data);