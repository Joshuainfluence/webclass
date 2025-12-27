import { Routes, Route } from "react-router-dom"
import Card from "./components/Card"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Pricing from "./pages/Pricing"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/pricing" element={<Pricing />} />
      </Routes>

    </>
  )
}

export default App
