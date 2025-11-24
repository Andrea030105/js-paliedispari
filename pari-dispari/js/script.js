/* 
L'UTENTE SCEGLIE TRA PARI E DISPARI E INSERISCE UN NUMERO DA 1 A 5;
GENERIAMO UN NUMERO RANDOM DA 1 A 5 PER IL PC USANDO UNA FUNZIONE;
SOMMIAMI I DUE NUMERI;
STABILIAMO SE LA SOMMA E' PARI O DISPARI USANDO UNA FUNZIONE;
DICHIARIAMO CHI HA VINTO;
*/

let scelta_utente = prompt("Pari o Dispari???");
let num_palyer = parseInt(prompt("Inserisci un numero tra 1 e 5"));


let num_pc = randomNumber(1, 5);
let somma = num_palyer + num_pc;

let resultSomma = pariDispari(somma);

let result = vincitore(scelta_utente, resultSomma)
console.log(num_pc);
console.log(somma);
console.log(resultSomma);
console.log(result);

/* DEFINIZIONE FUNZIONI */

function randomNumber(min, max) {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}

function pariDispari(somma) {
    if (somma % 2 == 0) {
        return "pari";
    }
    return "dispari";
}

function vincitore(scelta_utente, resultSomma) {
    if (resultSomma === scelta_utente) {
        return "HAI VINTO";
    }
    return "HAI PERSO";
}