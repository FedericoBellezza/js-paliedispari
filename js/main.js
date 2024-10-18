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
let userChoice = prompt("Scegli 'pari' o 'dispari'");

while (userChoice !== 'pari' && userChoice !== 'dispari') {
	console.log('parola sbagliata');
	userChoice = prompt("Parola non adatta, scegli 'pari' o 'dispari'");
}

// * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumberGeneration(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
console.log('Il numero del computer è: ' + randomNumberGeneration(1, 5));

// ! Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// ? Domande da  farsi quando si crea una funzione:
// 1. Come dovrebbe chiamarsi?
// 2. Ho bisogno di parametri?
// 3. Devo restituire un valore?
// 4. Se sì, di che tipo?
