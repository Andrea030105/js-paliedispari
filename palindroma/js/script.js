/* CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA E CAPIRE SE LA PAROLA INSERITA E' PALINDORMA */

let parola = prompt("Inserici la parola!!");

palindromaparola(parola);

/* Definizione funzioni */

function palindromaparola(parola) {
    const arrey_parola = parola.split("").reverse().join("");
    if (arrey_parola === parola) {
        alert("E' PALINDROMA");
    } else {
        alert("NON E' PALINDORMA");
    }
}