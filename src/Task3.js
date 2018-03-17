/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

function maxPrime(number) {
    let max = number % 2 === 0 ? 2 : 1;
    while (number % 2 == 0) {
        number /= 2;
    }
    let maxN = Math.sqrt(number);
    for(let i = 3; i <= maxN; i+=2) {
        while (number % i == 0) {
            max = i;
            number /= i;
            maxN = Math.sqrt(number);
        }
    }
    return Math.max(number, max);
}