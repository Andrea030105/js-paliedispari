/* CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA E CAPIRE SE LA PAROLA INSERITA E' PALINDORMA */

let parola = prompt("Inserici la parola!!");

palindromaparola(parola);

/* Definizione funzioni */

function palindromaparola(parola) {
    const arrey_parola = parola.split("");
    arrey_parola.reverse();
    let parola_reverse = arrey_parola.join("");
    console.log(parola_reverse);
    if (parola_reverse === parola) {
        alert("E' PALINDROMA");
    } else {
        alert("NON E' PALINDORMA");
    }
}