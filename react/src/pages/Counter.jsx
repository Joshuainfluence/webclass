import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    
  return (
    <div>
        <button onClick={() => setCount(count + 2)}>Click here</button>
        <h1>You have clicked {count} number of times</h1>
    </div>
  )
}

export default Counter