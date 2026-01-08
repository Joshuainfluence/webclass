import React from 'react'
import Form from './Form';

const Render = ({isLoggedIn}) => {
    isLoggedIn = false;
  return (
    // <div>{isLoggedIn ? "You are logged in." : "Please log in."}</div>
    <div>{isLoggedIn ? <Form /> : "Please log in."}</div>

  )
}

export default Render