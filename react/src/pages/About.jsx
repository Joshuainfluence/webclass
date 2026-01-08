import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  function handleClick() {
    alert('Button clicked!')
  }

  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    
    <div>
      <Navbar />
      {/* User types → onChange fires

React passes an event object

event.target.value = what the user typed

setName updates state */}
      <input
        type="text"
        value={name}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default About