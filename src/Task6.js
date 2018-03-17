/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the 
first ten natural numbers and the square of the sum is 3025  385 = 2640.

Find the difference between the sum of the squares of the first one hundred
natural numbers and the square of the sum.

 */
const cache = [1];
function getSumOfSquares(N) {
    while(N > cache.length) {
        const next = cache.length + 1;
        const prevSqrSum = cache[cache.length-1];
        cache.push(prevSqrSum + next*next);
    }
    return cache[N-1]
}

function getSquareOfSum(N){
    return Math.pow((N+1)*N/2, 2);
}

console.log(getSumOfSquares(3), getSquareOfSum(3))