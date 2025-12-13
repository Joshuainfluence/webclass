const btn = document.getElementById("btn");
const message = document.getElementById("message");
btn.addEventListener("click", () => {
    message.innerText = "Hello from TypeScript!";
    function greet(name) {
        return `Hello, ${name}!`;
    }
    const a = greet("World");
    console.log(a);
});
const user = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];
user.forEach(u => {
    console.log(`User: ${u.name}, Age: ${u.age}`);
});
export {};
//# sourceMappingURL=main.js.map