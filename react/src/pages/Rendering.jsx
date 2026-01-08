import React from 'react'
import Home from './Home'
import Event from './Event'

const Rendering = ({isLoggedIn}) => {
    isLoggedIn = true
  return (
    <div>
        {isLoggedIn ? <Home /> : <Event />}
    </div>
  )
}

export default Rendering