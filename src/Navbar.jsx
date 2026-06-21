import "./Navbar.css"
import logo from "./assets/Logo.png"
 function Navbar(){
 return(
 <div className="nav-bar">
    <a href="#home" className="logo-holder">
        <img src={logo} alt="company-img" />
        <h3>TheFineWorks.com</h3>
    </a>
    <div className="nav-btns">
        <a className="nav-links" href="#home">Home</a>
        <a className="nav-links" href="#services">Services</a>
        <a className="nav-links" href="#Project-section">Portfolio</a>
        <a className="nav-links" href="#why-us">About</a>
        <a className="nav-links" href="#contact">Contact</a>
        <a className="nav-button" href="#contact">Get Started</a>
    </div>  
 </div> 
 )
}
export default Navbar
