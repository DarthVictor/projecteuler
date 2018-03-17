/*
 * By listing the first six prime numbers:
 * 2, 3, 5, 7, 11, and 13, we can see that 
 * the 6th prime is 13.
 * What is the 10001st prime number?
 */
function dividedByElemOfArray(number, primes) {
    for(let i = 0; i < primes.length; i++)
        if(number % primes[i] == 0 && number !== primes[i])
            return true;
    return false;
}

function getPrimes(N) {
    const primes = [];
    primes.push(2)
    let number = 3;
        
    while (primes.length < N) {
        if (!dividedByElemOfArray(number, primes)){
            primes.push(number);
        }
        number++;
    }
    return primes;
}
const primes = getPrimes(10001)
console.log(primes[10000])