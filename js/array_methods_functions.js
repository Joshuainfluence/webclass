
const array = [1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11, 12, 13]

const evenNumbers = array.filter(n => n % 2 === 0)
console.log(evenNumbers)

const squares =array.map(n=> n**2)
console.log(squares)

const oddNumbers = array.filter(n=> n%2 !== 0)
console.log(oddNumbers)