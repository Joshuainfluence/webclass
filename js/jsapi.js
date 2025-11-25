
async function loadUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    // console.log(data)
    data.forEach(user => {
        const profileCard = document.createElement("div")
    })


} 

loadUsers()