//verificar se uma string é um palíndromo, que da pra ler a mesma coisa em qualquer sentido da frase

// solucao 1
function verificaPalindromo(string) {
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

let myVar = null;

console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("adao"));
console.log(verificaPalindromo(""));
console.log(verificaPalindromo(myVar));

//soluçao 2

function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length -1 -i]) {
        return false;
        }
    }

    return true;
}

console.log(verificaPalindromo("aba"));
console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("adao"));
console.log(verificaPalindromo(""));
console.log(verificaPalindromo(myVar));