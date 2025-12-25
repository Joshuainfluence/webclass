import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <h1>Card is here</h1>
        <h1>Hello, {props.name}</h1>
        <h2>I am a {props.occupation}</h2>
    </div>
  )
}

export default Card