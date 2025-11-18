// loop form number 1 to 10
for(let number = 1; number < 10; number++){
    console.log(number)
} 

// loop from number 10 to 0
for (let i = 10; i <= 0; i--){
    console.log(i)
}

// array push function 
let fruits = []
fruits.push("mange")
fruits.push("pear")
fruits.push("apple")
console.log(fruits)
console.log(fruits[0])

console.log(fruits.length)

for (fruit = 0; fruit < fruits.length; fruit++){
    console.log(fruits[fruit])
}


// for (let i = 0; i <= 20; i++){
//    i == 10 ? console.log("This is the middle number")  : console.log(i)
// }

// simple fizz buzz
for (let i = 0; i <= 100; i++){
     i % 3 == 0 && i % 5 == 0 ? console.log("fizz buzz") : i % 3 == 0 ? console.log("fizz") : i % 5 ==0 ? console.log("buzz") : console.log(i)
}


