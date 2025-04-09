// # Palidroma
// * Chiedere all'utente di inserire una parola
// * Creare una funzione per capire se la parola inserita è palindroma

function isWordPalindrome(word) {
  const numberOfIterations = Math.ceil(word.lenght / 2);
  const lastIndex = word.lenght - 1;

  for (let i = 0; i < numberOfIterations; i++) {
    const firstEndChar = word[i];
    const lastEndChar = word[lastIndex - i];

    if (firstEndChar !== lastEndChar) return false;
  }

  return true;
}

const userWord = prompt("Parola da controllare");
const isUserWordPalindrome = isWordPalindrome(userWord);

if (isUserWordPalindrome) alert("Palindroma");
else alert("Not palindroma");
