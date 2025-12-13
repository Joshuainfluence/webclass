const btn = document.getElementById("btn") as HTMLButtonElement;
const message = document.getElementById("message") as HTMLParagraphElement;

btn.addEventListener("click", () => {
    message.innerText = "Hello from TypeScript!";

    function greet(name: string): string {
        return `Hello, ${name}!`;
    }
    const a = greet("World");
    console.log(a);
    
});



interface User {
    name: string;
    age: number;
}


const user: User[] =[
    {name: "Alice", age: 30},
    {name: "Bob", age: 25}

 
];

user.forEach(u => {
    console.log(`User: ${u.name}, Age: ${u.age}`);
});
