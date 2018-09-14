/*
Find the sum of all the primes not greater than given N <= 10^6
*/
const MAX_N = 1000000
const d0 = Date.now()
const numbers = Array(MAX_N+1).fill(0).map((_, i) => i);
numbers[1] = 0;
for (let i = 2; i <= MAX_N; i++){
	if (numbers[i] > 0) {
		for (let j = 2*i; j <= MAX_N; j += i){
			numbers[j] = 0;
		}
	}
}

let sum = 0;
const sums = numbers.map(prime => {
	sum += prime; 
	return sum; 
});


console.log(`Total time: ${Date.now() - d0}ms`);
