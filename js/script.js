//come si fa a generare 5 numeri casuali (magari diversi tra loro) ?
//come si fa ad attendere 30 secondi (magari nelle prove abbassate questo tempo, così verificate subito se funziona) ?
//come si fa il confronto tra i numeri generati e i numeri inseriti dall'utente ?

//seleziono gli elementi dal dom
const countdownEl = document.getElementById('countdown');
const instructionsEl = document.getElementById('instructions')
const listEl = document.getElementById('numbers-list');
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