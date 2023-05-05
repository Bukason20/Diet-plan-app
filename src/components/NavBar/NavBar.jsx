import "./NavBar.css"
import  Logo from "../../images/logo.png"
import { useState } from "react"

function NavBar() {

    const [showNav, setShowNav] = useState(false)
    // const [showBurger, setShowBurger] = useState(false)
    return (
        <nav className = "nav-bar">
        <img src= {Logo} alt="" id= "logo"/>
        <div className={`nav-links ${!showNav && "hide"}`} >
            <p className = "close" onClick ={() => setShowNav(false)}>X</p>
            <p>Home</p>
            <p>Categories</p>
            <p>Products</p>
            <p>About us</p>
            <p>Pricing</p>
            <button>Join us</button>
        </div>

        <div className="burger-nav" onClick = {() => setShowNav(true)}>
            <div className="burger1"></div>
            <div className="burger1"></div>
            <div className="burger1"></div>
        </div>
    </nav>
    )
}

export default NavBar
