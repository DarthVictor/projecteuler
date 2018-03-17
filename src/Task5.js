/*
 * 2520 is the smallest number that can be divided by each 
 * of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly 
 * divisible by all of the numbers from 1 to 20?
 */

const cache = {
    products: [1, 2, 6, 12],
    values: [2, 3, 2]
}

function smallestMultiple(N){
    while (N > cache.products.length){
        let nextValue = cache.products.length + 1;
        cache.values.forEach((val) => {
            if (nextValue % val === 0){
                nextValue /= val;
            }
        });
        if(nextValue > 1) {
            cache.values.push(nextValue);
        }
        cache.products.push(cache.products.slice(-1)[0] * nextValue)
    }
    return cache.products[N - 1];
}

console.log(smallestMultiple(40))