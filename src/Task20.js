const BigNumber = require('bignumber.js')

function factor(n){
    var mult = new BigNumber(1)
    while(n){
        mult = mult.times(n)
        n--;
    }
    return mult
}

console.log(factor(100).toFixed().split('').map(d => +d).reduce((a, b) => a + b) )
console.log(factor(10).toFixed().split('').map(d => +d).reduce((a, b) => a + b) )