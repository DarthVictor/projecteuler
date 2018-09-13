// hackerrank version
// a^2 + b^2 = c^2
// a + b + c <= 3000
// let a < b
// a < b < c => a < 1000, b < 1500 - a

const t0 = Date.now();

const maxProds = Array(3001).fill(-1);
for(let a = 1; a < 1000; a++) {
    const b_max = 2000 - a;
    for(let b = a + 1; b < b_max; b++) {
        const c = Math.sqrt(a*a + b*b);
        if (Number.isInteger(c)) {
            const N = a + b + c;
            if (N <= 3000){
                maxProds[N] = Math.max(maxProds[N], a*b*c);
            }
        }
    }    
}

console.log(`total time${Date.now() - t0}ms`);
console.log(maxProds[3000]);