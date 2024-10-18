// // ^ Palindroma
// // Chiedere all’utente di inserire una parola
// // Creare una funzione per capire se la parola inserita è palindroma

// // * chiedo all'utente di inserire una parola
// const userWord = prompt('Inserisci una parola');
// let palindromeWord = [];

// // * creo una funzione per capire se la parola è palindroma (Ritorna VERO o FALSO)
// function isWordPalindrome() {
// 	for (let i = 0; i < userWord.length; i++) {
// 		palindromeWord.unshift(userWord[i]);
// 	}
// 	return palindromeWord.join('') === userWord;
// }

// console.log(isWordPalindrome() ? 'La parola inserita è palindroma' : 'La parola inserita non è palindroma');

// ^ Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// * l'utente sceglie pari o dispari e controllo che l'input sia valido
let userChoice = prompt("Scegli 'pari' o 'dispari'"); // scelta pari o dispari dell'utente
let pcNum; // numero generato per il PC
let userNum; // numero scelto dall'utente
let Sum; // somma tra il numero del PC e il numero dell'utente

while (userChoice !== 'pari' && userChoice !== 'dispari') {
	console.error('parola sbagliata');
	userChoice = prompt("Parola non adatta, scegli 'pari' o 'dispari'");
}
console.log('Il giocatore ha scelto: ' + userChoice);

// * l'utente sceglie un numero da 1 a 5 e controllo che l'input sia valido
userNum = parseInt(prompt('Scegli un numero da 1 a 5'));
while (isNaN(userNum) || userNum < 1 || userNum > 5) {
	console.error('Numero inserito non valido');
	userNum = parseInt(prompt('Numero inserito non valido, scegli un numero da 1 a 5'));
}
console.log('Il numero del giocatore è: ' + userNum);

// * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumberGeneration(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
alert('Premi "OK" o "INVIO" per generare il numero del computer');
pcNum = randomNumberGeneration(1, 5);
console.log('Il numero del computer è: ' + pcNum);

// * Sommiamo i due numeri
function numberSum(val1, val2) {
	return val1 + val2;
}
Sum = numberSum(userNum, pcNum);
console.log('La somma dei due numeri è: ' + Sum);

// ! Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// ? Domande da  farsi quando si crea una funzione:
// 1. Come dovrebbe chiamarsi?
// 2. Ho bisogno di parametri?
// 3. Devo restituire un valore?
// 4. Se sì, di che tipo?
