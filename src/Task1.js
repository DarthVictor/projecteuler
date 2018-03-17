var BigNumber = require('bignumber.js');

/////////////// ignore above this line ////////////////////
function getSumBelow(N, a){
    const count = Math.trunc((N - 1) / a);
    const last = count * a;
    return (new BigNumber(a + last)).times(new BigNumber(count)).div(2);
}

function getSumThreeorFive(N){
    if(N < 1) return 0;
    return getSumBelow(N, 5).plus(getSumBelow(N, 3)).minus(getSumBelow(N, 15)).toFixed();
}
