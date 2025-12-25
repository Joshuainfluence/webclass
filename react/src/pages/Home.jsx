import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

const Home = () => {
  const name = "INFLUENCE"
  return (
    <div>
      <Navbar />
      <Card name="INFLUENCE" occupation="Developer" />
      <h1>Hello, {name}</h1>
    </div>
  )
}

export default Home