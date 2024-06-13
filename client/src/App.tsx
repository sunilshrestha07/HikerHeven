import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import About from "./pages/About"
import Saved from "./pages/Saved"
import AboutHike from "./pages/AboutHike"
import HikesPage from "./pages/HikesPage"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"

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
            <Route path="/level/:level" element={<HikesPage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
