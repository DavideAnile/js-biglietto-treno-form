/*___________ consegna __________ */

/* Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. */


/*_____________ /consegna_________*/


/* Pseudo codice */

/*

-aggiungi evento sul bottone quando viene cliccato
-chiedi i kilometri che dovrà percorrere e memorizzali
-calcola il prezzo del biglietto standard (0,21 * km)
-chiedi l'età dell'utente e memorizzala
? SE è minorenne 
    °applica uno sconto del 20%
:?ALTRIMENTI SE è over 65
    °applica uno sconto del 40%
:ALTRIMENTI
    °non applicare nessuno sconto



/* /Pseduo codice */

let tripKmEl;

let userAgeEl;

let myBtnEl = document.getElementById("myBtn");


myBtnEl.addEventListener("click", function(){
    tripKmEl = document.getElementById("tripKm").value;
    console.log(tripKmEl)
    
    let prezzoBiglietto = 0.21 * tripKmEl;
    console.log("Prezzo Standard " + prezzoBiglietto.toFixed(2) + " \u20AC");

    userAgeEl = document.getElementById("userAge").value;
    console.log(userAgeEl);

    let prezzoFinale;

    if(userAgeEl < 18){

        prezzoFinale = prezzoBiglietto - (20 * prezzoBiglietto / 100);
        console.log("Prezzo Scontato " + prezzoFinale.toFixed(2) + " \u20AC")

    } else if (userAgeEl > 65){

        prezzoFinale = prezzoBiglietto - (40 * prezzoBiglietto / 100);
        console.log("Prerzzo Scontato " + prezzoFinale.toFixed(2) + " \u20AC")

    } else {

        prezzoFinale = prezzoBiglietto
        console.log ("Prezzo Non Scontato " + prezzoFinale + " \u20AC")

    }
    
    
})






