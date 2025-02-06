//Run
//node hola-mundo
//const message = 'Hola Mundo';


//console.log(message);

const fs = require('fs');
//const content = fs.readFileSync('test.txt'); //Binario
const content = fs.readFileSync('test.txt', 'utf8');

//Count words
const words = content.match(/hola/gi ?? []).length;

console.log(`Words: ${words}`)

//const content2 = content.replace('Hola', 'Chao');
//fs.writeFileSync('test2.txt',content2);




