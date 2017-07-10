const start = Date.parse('1901-01-01T00:00:00')
const end = Date.parse('2000-12-31T00:00:00')
const step = 24 * 60 * 60 * 1000
let sum = 0
for (let t = start; t <= end; t += step){
    const date = new Date(t) 
    if(date.getDate() === 7 && date.getDay() === 1) sum += 1
}
console.log(sum)