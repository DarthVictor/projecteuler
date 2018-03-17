/*
 * A palindromic number reads the same both ways. 
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91x99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 * 
 */
function isPalindrome(a) {
    return (a + '').split('').reverse().join('') === (a + '');
} 

function getPalindroms() {
    var list = [];
    
    for(var i = 999; i > 99; i--) {
        for(var j = 999; j > 99; j--) {
            if (isPalindrome(i*j)) {
                list.push(i*j);
            }
        }
    }

    return list.sort((a,b) => a - b)
}

function findLargestSmaller(list, elem) {
    return findLargestSmallerInSublist(list, elem, 0, list.length - 1)
}


function findLargestSmallerInSublist(list, elem, first, last){
    if (last - first < 2) {
        return list[last] < elem ? list[last] : list[first];
    }
    var middle = Math.trunc((last + first)/2);
    var middleElem = list[middle];
    if (middleElem < elem) {
        return findLargestSmallerInSublist(list, elem, middle, last);
    } else {
        return findLargestSmallerInSublist(list, elem, first, middle);
    }
}

var palindroms = getPalindroms()
console.log(findLargestSmaller(palindroms, 101110))
