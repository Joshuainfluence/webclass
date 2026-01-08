import React from 'react'

const Form = () => {
    function handleSubmit(event) {
        event.preventDefault(); // stops page refresh
        alert('Form submitted!');
    }
    return (
        <div>
            <form onSubmit={ handleSubmit}>
                <input type="text" name="" id="" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Form