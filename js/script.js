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

let userNameEl;

let tripKmEl;

let userAgeEl;

let myBtnEl = document.getElementById("myBtn");


//-aggiungi evento sul bottone quando viene cliccato
myBtnEl.addEventListener("click", function(){

//-chiedi nome e cognome e memorizzali
    userNameEl = document.getElementById("userName").value;
    console.log(userNameEl)


// -chiedi i kilometri che dovrà percorrere e memorizzali    
    tripKmEl = document.getElementById("tripKm").value;
    console.log(tripKmEl + " Km")
    
// -calcola il prezzo del biglietto standard (0,21 * km)    
    let prezzoBiglietto = 0.21 * tripKmEl;
    console.log("Prezzo Standard " + prezzoBiglietto.toFixed(2) + " \u20AC");

// -chiedi l'età dell'utente e memorizzala    
    userAgeEl = document.getElementById("userAge").value;
    console.log(userAgeEl);

    let prezzoFinale;


//? SE è minorenne 
//   °applica uno sconto del 20%    
    if(userAgeEl < 18){

        prezzoFinale = prezzoBiglietto - (20 * prezzoBiglietto / 100);
        console.log("Prezzo Scontato " + prezzoFinale.toFixed(2) + " \u20AC")
        document.getElementById("offerta").innerHTML = "Sconto minorenni !"

// :?ALTRIMENTI SE è over 65
//   °applica uno sconto del 40%        
    } else if (userAgeEl > 65){

        prezzoFinale = prezzoBiglietto - (40 * prezzoBiglietto / 100);
        console.log("Prezzo Scontato " + prezzoFinale.toFixed(2) + " \u20AC")
        document.getElementById("offerta").innerHTML = "Sconto over 65 !"
// :ALTRIMENTI
//   °non applicare nessuno sconto        
    } else {

        prezzoFinale = prezzoBiglietto
        console.log ("Prezzo Non Scontato " + prezzoFinale + " \u20AC")
        document.getElementById("offerta").innerHTML = "Nessuno sconto !"
    }
  

 // second-container viene mostrato una volta cliccato il tasto "INVIA"   
 let secondContainerEl = document.querySelector(".second-container");
    secondContainerEl.style.display = "block";

 document.getElementById("costo-biglietto").innerHTML = prezzoFinale.toFixed(2) + " \u20AC";
 document.getElementById("carrozza").innerHTML = Math.round(Math.random()* 10); 
 document.getElementById("nomePasseggero").innerHTML = userNameEl   
    
})






