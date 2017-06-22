const BigNumber = require('bignumber.js')

function factor(n){
    var mult = new BigNumber(1)
    while(n){
        mult = mult.times(n)
        n--;
    }
    return mult
}

function combination(n, k){
    return factor(n).dividedBy(factor(k).times(factor(n-k)))
}

console.log(combination(4, 2).toString())
console.log(combination(40, 20).toString())