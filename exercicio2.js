// troque todos os elementeos pares e diferentes de zero de um array pelo numero 0. se o array for vazio retorne -1.

function substituiPares(array) {
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log("Voce já é zero!");
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }

    return array;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(substituiPares(arr));
console.log(substituiPares([]));
console.log(substituiPares(null));
console.log(substituiPares(undefined));
console.log(substituiPares(false));



