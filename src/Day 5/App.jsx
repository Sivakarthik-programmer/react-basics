import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Day 5/pages/Home"
import About from "./Day 5/pages/About"
import User from "./Day 5/pages/User"
import UserDetails from "./Day 5/pages/UserDetails"
import Navbar from "./Day 5/components/Navbar"
import './App.css'

function App() {
  return (
<BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/user" element={<User />} />
    <Route path="/user/:id" element={<UserDetails />} />
  </Routes>
</BrowserRouter>
  )
}

export default App