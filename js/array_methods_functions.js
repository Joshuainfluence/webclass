
// // const array = [1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11, 12, 13]

// // const evenNumbers = array.filter(n => n % 2 === 0)
// // console.log(evenNumbers)

// // const squares =array.map(n=> n**2)
// // console.log(squares)

// // const oddNumbers = array.filter(n=> n%2 !== 0)
// // console.log(oddNumbers)

// const people = [
//   { name: "Bob", age: 17 },
//   { name: "Sam", age: 22 }
// ];

// const adults = people.filter(p => p.age >= 18);
// console.log(adults);
// // [{ name: "Sam", age: 22 }]


// // const nums = [1, 2, 3, 4];

// // const sum = nums.reduce((acc, cur) => acc + cur, 0);

// // console.log(sum); // 10

// const nums = [10, 25, 5];

// const max = nums.reduce((acc, cur) => {
//   return cur > acc ? cur : acc;
// });

// console.log(max); // 25



// const people = [
//   { name: "Alice", group: "A" },
//   { name: "Bob", group: "B" },
//   { name: "Cara", group: "A" }
// ];

// const grouped = people.reduce((acc, person) => {
//   if (!acc[person.group]) acc[person.group] = [];
//   acc[person.group].push(person.name);
//   return acc;
// }, {});

// console.log(grouped);
// // { A: ["Alice", "Cara"], B: ["Bob"] }
