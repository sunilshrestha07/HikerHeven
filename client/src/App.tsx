import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import About from "./pages/About"
import Saved from "./pages/Saved"
import AboutHike from "./pages/AboutHike"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/contact" element={<ContactUs/>}/>
            <Route path ="/about" element={<About/>}/>
            <Route path ="/saved" element={<Saved/>}/>
            <Route path ="/aboutHike" element={<AboutHike/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
