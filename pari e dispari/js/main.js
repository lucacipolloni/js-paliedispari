// # Pari e Dispari
// * L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// * Generiamo un numero random per il computer (usando una funzione).
// * Sommiamo i due numeri.
// * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// * Dichiariamo chi ha vinto.

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const isNumberEven = (num) => num % 2 === 0;

const userChoice = prompt("'pari' o 'dispari'? ");
const userNumber = parseInt(prompt("Numero da 1 a 5"));
const pcNumber = generateRandomNumber(1, 5);
const isResultEven = isNumberEven(userNumber + pcNumber);

const userWon =
  (isResultEven && userChoice === "pari") ||
  (!isResultEven && userChoice === "dispari");

const outputText = userWon ? "User won!" : "Pc won!";
alert(outputText);

console.log("userChoice:", userChoice);
console.log("userNumber:", userNumber);
console.log("pcNumber:", pcNumber);
console.log("isResultEven:", isResultEven);
console.log("userWon:", userWon);
console.log("outputText:", outputText);
