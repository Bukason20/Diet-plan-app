import "./NavBar.css"
import  Logo from "../../images/logo.png"

function NavBar() {
    return (
        <nav className = "nav-bar">
        <img src= {Logo} alt="" id= "logo"/>
        <div className="nav-links">
            <p>Home</p>
            <p>Categories</p>
            <p>Products</p>
            <p>About us</p>
            <p>Pricing</p>
            <button>Join us</button>
        </div>
    </nav>
    )
}

export default NavBar
