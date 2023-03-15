import Navbar from "../Navbar/Navbar"
import "./Layout.css"
import Portfolio from "../Portfolio/Portfolio"
import Home from "../Home/Home"
import Contact from "../Contact/Contact"
import { Route, Routes } from "react-router-dom"
const Layout = () => {
  return(
    <div className="mainContainer">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default Layout
