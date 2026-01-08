import React from 'react'


const Event = () => {
    function handleClick() {
        alert("You have clicked me!")
        const hello = document.querySelector('.hello')

        const paragraph = document.createElement("p")
        paragraph.innerHTML = "Hello world"
        hello.appendChild(paragraph)



    }

    const submitClick = (e)=>{
        e.preventDefault()
        alert('You have submitted this form!')
    }

    // const handleClick = ()=> {
    //     alert("YOu have clicked me!")
    // }
    return (
        <div className='hello'>
            <button onClick={handleClick}>Click Me</button>

            <form onSubmit={submitClick}>
                <input type="text" />
                <button type="submit">Login</button>
            </form>

        </div>
    )

    

}




export default Event