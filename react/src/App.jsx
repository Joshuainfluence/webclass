import { Routes, Route } from "react-router-dom"
import Card from "./components/Card"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Pricing from "./pages/Pricing"
import Counter from "./pages/Counter"
import Form from "./pages/Form"
import Render from "./pages/Render"
import Event from "./pages/Event"
import Rendering from "./pages/Rendering"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/pricing" element={<Pricing />} />
         <Route path="/counter" element={<Counter />} />
         <Route path="/form" element={<Form />} />
         <Route path="/Render" element={<Render />} />
        <Route path='/event' element={<Event />}/>
        <Route path="/rendeering" element={<Rendering />} />




      </Routes>

    </>
  )
}

export default App
