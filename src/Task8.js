/*
 * Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
 */

function largestProduct(line, numOfDigits, limit){
    const numbers = line.split('', limit).map(Number);
    let max = 0;
    for(let i = 0; i < numbers.length + 1 - numOfDigits; i++){
        let current = 1;
        for(let j = 0; j < numOfDigits; j++) {
            current *= numbers[i+j];
        }
        if (current > max) {
            max = current;
        }
    }
    return max;
}