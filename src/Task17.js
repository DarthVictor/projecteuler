const converter = require('number-to-words')

function getNumOfCharacters(n){
    const andWordLength = (n > 100) && (n % 100 > 0) ? 3 : 0
    return converter.toWords(n).replace(/[\-\s0-9]/g, '').length + andWordLength
}


function getSumOfCharacters(from, to){    
    let sum = 0
    for(let i = from; i <= to; i++){
        sum += getNumOfCharacters(i)
    }
    return sum
}

console.log( getNumOfCharacters(342) )
console.log( getNumOfCharacters(115) ) 
console.log( getSumOfCharacters(1, 5) )
console.log( getSumOfCharacters(1, 1000) )