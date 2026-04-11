import logo from "../images/logo.jpeg"

function Navbar() {
    return (
        <nav class="navbar">
            <div className="logo-container">
                <img src={logo} alt="BMW Logo" className="logo-img" />
                <h1 className="logo-text">Sajith's Garage</h1>
            </div>
            <div class="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;