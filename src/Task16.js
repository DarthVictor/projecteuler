const BigNumber = require('bignumber.js')


console.log( (new BigNumber(2)).toPower(1000).toFixed().split('').map(d => +d).reduce((a, b) => a + b)  ) 