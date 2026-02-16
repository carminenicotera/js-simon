//come si fa a generare 5 numeri casuali (magari diversi tra loro) ?
//come si fa ad attendere 30 secondi (magari nelle prove abbassate questo tempo, così verificate subito se funziona) ?
//come si fa il confronto tra i numeri generati e i numeri inseriti dall'utente ?

//seleziono gli elementi dal dom
const countdownEl = document.getElementById('countdown');
const instructionsEl = document.getElementById('instructions')
const listNumberEl = document.getElementById('numbers-list');
const formEl = document.getElementById('answers-form');
const inputEl = document.querySelectorAll('input')
const messageEl = document.getElementById('message')

//funzione che genera un numero casuale tra 1 e 50
function randomNumber() {
  const number = Math.floor(Math.random() * 50) + 1;
  return number;
}

//popolo l'array richiamando la funzione randomNumber
const arrNumbers = [];
for (let i = 0; i < 5; i++) {
  const element = randomNumber();
  arrNumbers.push(element);
}

//inserisco l'array di numeri casuali nella lista saggiungendo uno spazio per separare i numeri
listNumberEl.innerHTML = arrNumbers.join(' ');

//imposto un countdown di 30 secondi, nascondo i numeri e infine faccio comparire il form
let timer = 5;
countdownEl.innerText = timer--;

const intervalloId = setInterval(function() {
  if(timer === 0) {
    //termino l'esecuzione e stampo il messaggio
    clearInterval(intervalloId);
    countdownEl.innerHTML = 'Tempo esaurito!'

    //nascondo i numeri e mostro il form
    listNumberEl.classList.add('d-none');
    formEl.classList.remove('d-none');
    instructionsEl.innerHTML = 'Prova ad inserire tutti i numeri che ricordi!😎'
  } else {
    countdownEl.innerText = timer--;
  }
}, 1000)

//Salvo i numeri, li confronto e mostro l'output finale
formEl.addEventListener('submit', function(e){
  e.preventDefault();

  //salvo in un array i numeri inseriti sall'utente
  const arrayUtente = [];
  for(let i = 0; i < 5; i++){
    const element = Number(inputEl[i].value);
    arrayUtente.push(element)
  }

  //controllo quali numeri che ha inserito l'utente sono presenti nell'array generato casualmente e li pusho in un nuovo array
  const arrayIndovinati = [];
  for (let i = 0; i < 5; i++) {
    const element = arrayUtente[i];
    if(arrNumbers.includes(element)) {
      arrayIndovinati.push(element)
    }
  }

  //output
  if (arrayIndovinati.length > 0) {
    messageEl.innerText = `Complimenti🥳, Hai indovinato ${arrayIndovinati.length} numeri`
  } else {
    messageEl.innerHTML = 'Non hai indovinato nessun numero😔'
  }
})