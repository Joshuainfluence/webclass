// arithmetic operators
let x = 10
let y = 50

let z = x + y; //addition
let j = y - x; // substraction
let h = y * x; // multiplication
let i = y / x; // division
let k = x % 3; // modulus
console.log(z)
console.log(j)
console.log(h)
console.log(i)
console.log(k)

// comparison operators
console.log(y > x) // greater than
console.log(x < y) // less than
console.log(x == y) // equal to
console.log(x === y) // equal to
console.log(x >= y) // greater than or equal to
console.log(x <= y) // less than or equal to


// coersion
let q = "5"
// manual coersion
x = String(x)
console.log(typeof(x))
q = Number(q)
console.log(typeof(q))

console.log("THIS IS FOR COMPARISON EQUAL TOs")
//  == performs coersion before comparison
// === compares directly
console.log("5" == 5) //  == performs coersion before comparison
console.log("5" === 5) // === compares directly

console.log(5 == 5)
console.log(5 === 5)
