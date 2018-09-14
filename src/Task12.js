// function printStatus(fn) {
//     switch(%GetOptimizationStatus(fn)) {
//         case 1: console.log("Function is optimized"); break;
//         case 2: console.log("Function is not optimized"); break;
//         case 3: console.log("Function is always optimized"); break;
//         case 4: console.log("Function is never optimized"); break;
//         case 6: console.log("Function is maybe deoptimized"); break;
//         case 7: console.log("Function is optimized by TurboFan"); break;
//         default: console.log("Unknown optimization status"); break;
//     }
// }


function getTriangleNumber(n) {
	return n*(n+1)/2;
}

function numberDevisors(n, primes){
	let devisors = 1;
	let t = n;
	for(let i = 0; i < primes.length && t > 1; i++){
		const prime = primes[i];
		let z = 1;
		while(t % prime === 0) {
			t /= prime;
			z += 1;
		}
		devisors *= z;
	}

	return devisors;
}

function getPrimes(MAX_N){
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

	return numbers.filter(Boolean);
}

function getFirstTriangles(MAX_N) {
	const primes = getPrimes(1000000);
	const allDevisors = Array(MAX_N + 1)
	allDevisors[1] = 3;
	var i = 1
	var triangleNumber = 1

	var maxDevisors = 1
	var currentDevisors = 1
	while(maxDevisors <= MAX_N){
		i += 1
		triangleNumber += i
		currentDevisors = numberDevisors(triangleNumber, primes);
		if(maxDevisors < currentDevisors){
			for(let j = maxDevisors; j < currentDevisors; j++) {
				allDevisors[j] = triangleNumber;
			}
			maxDevisors = currentDevisors
		}
	}
	return allDevisors;
}

const d0 = Date.now();

const t = getFirstTriangles(1000)

console.log(Date.now() - d0)

/* 
JS: 
3 6 4
7 28 6
8 36 9
15 120 16
24 300 18
32 528 20
35 630 24
63 2016 36
80 3240 40
104 5460 48
224 25200 90
384 73920 112
560 157080 128
935 437580 144
i = 1000 time elapsed 376 ms
1224 749700 162
1664 1385280 168
1728 1493856 192
i = 2000 time elapsed 2830 ms
2015 2031120 240
2079 2162160 320
i = 3000 time elapsed 9472 ms
i = 4000 time elapsed 22422 ms
i = 5000 time elapsed 43637 ms
5984 17907120 480
i = 6000 time elapsed 75241 ms
i = 7000 time elapsed 119928 ms
i = 8000 time elapsed 178041 ms
i = 9000 time elapsed 249694 ms
i = 10000 time elapsed 339333 ms
i = 11000 time elapsed 448575 ms
i = 12000 time elapsed 581213 ms
12375 76576500 576
Time elapsed 636455 ms

Java:
3 6 4
7 28 6
8 36 9
15 120 16
24 300 18
32 528 20
35 630 24
63 2016 36
80 3240 40
104 5460 48
224 25200 90
384 73920 112
560 157080 128
935 437580 144
i = 1000, time elapsed 235ms
1224 749700 162
1664 1385280 168
1728 1493856 192
i = 2000, time elapsed 1836ms
2015 2031120 240
2079 2162160 320
i = 3000, time elapsed 6200ms
i = 4000, time elapsed 14882ms
i = 5000, time elapsed 29136ms
5984 17907120 480
i = 6000, time elapsed 50261ms
i = 7000, time elapsed 80343ms
i = 8000, time elapsed 119700ms
i = 9000, time elapsed 170763ms
i = 10000, time elapsed 234905ms
*/