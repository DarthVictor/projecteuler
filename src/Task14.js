const BigNumber = require('bignumber.js')

function getChainLengthBit(n){
    var currentNumber = n
    var chainLength = 1
    //var chain = []
    while(currentNumber > 1){
        if(currentNumber & 1){
            currentNumber = 3*currentNumber + 1 
        }
        else{
            currentNumber = currentNumber  / 2
        }
        chainLength += 1
        //chain.push(currentNumber)
    }
    //console.log(chain)
    return chainLength
}

function getChainLength(n){
    var currentNumber = n
    var chainLength = 1
    //var chain = []
    while(currentNumber > 1){
        if(currentNumber % 2){
            currentNumber = 3*currentNumber + 1 
        }
        else{
            currentNumber = currentNumber / 2
        }
        chainLength += 1
        //chain.push(currentNumber)
    }
    //console.log(chain)
    return chainLength
}

function getChainLengthBigNum(n){
    var currentNumber = new BigNumber(n)
    var chainLength = 1
    //var chain = []
    while(currentNumber.comparedTo(1)){
        if(currentNumber.modulo(2)){
            currentNumber = currentNumber.times(3).plus(1)
        }
        else{
            currentNumber = currentNumber.dividedBy(2)
        }
        chainLength += 1
        //chain.push(currentNumber)
    }
    //console.log(chain)
    return chainLength
}

function run(){
    var i
    var maxChain = 1
    var chainLength
    for(i = 1; i<=1000000; i++){
        chainLength = getChainLengthBit(i)        
        if(chainLength > maxChain){
            maxChain = chainLength
            console.log(i, maxChain)
        }
    }
    console.log('Finally maxChain =', maxChain)
}

var t0 = Date.now()
run()
console.log('Elapsed time', Date.now() - t0, 'ms')

// console.log(getChainLength(159487))
// console.log(getChainLengthBit(159487))