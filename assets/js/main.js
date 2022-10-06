const km = prompt("Digita i chilometri vuoi percorrere: ");
const age = prompt("Digita la tua età: ");
const price = 0.21;
const youngPerson = 0.8;
const oldPerson = 0.6;
const check = price * km;
let result;
// console.log("Chilometri ", km);
// console.log("Età: ", age);
// console.log("Prezzo al chilometro * kilometro", check);

if (age >= 65) {
    result = check * oldPerson;
} else if (age <= 17) {
    result = check * youngPerson;
} else {
    result = check;
}

//console.log(result);
result = result.toFixed(2);
//console.log(result);

document.writeln("La tariffa del tuo biglietto è pari a: €", result);