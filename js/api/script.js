users = [
    { id: 1, email: "micheal@gmail.com", username: "micheal430", location: "USA", photo: "img/a.jpg " },
    { id: 2, email: "kristabel", username: "kristabel99", location: "UK", photo: "img/b.jpg" },
    { id: 3, email: "merlin", username: "merlin22", location: "India", photo: "img/c.jpg" },
    { id: 4, email: "sandra", username: "sandra77", location: "Canada", photo: "img/d.jpg" },
    { id: 5, email: "james", username: "james123", location: "Australia", photo: "img/e.jpg" },
    { id: 6, email: "laura", username: "laura456", location: "Germany", photo: "img/f.jpg" },
]

users.forEach(user => {
    const column = document.getElementById("column")
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
                <h1>${user.email}</h1>
                <img src=${user.photo} >
                <h3>${user.location} </h3>
                <h3>${user.email} </h3>
            `
    column.appendChild(card)
})