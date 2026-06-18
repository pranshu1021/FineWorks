import "./Navbar.css"
import logo from "./assets/logo.png"

 function Navbar(){
 return(
 <div className="nav-bar">
    <div className="logo-holder">
        <img src={logo} alt="company-img" />
        <h3>FINEWORKS</h3>
    </div>
    <div className="nav-btns">
        <a className="nav-links" href="">Home</a>
        <a className="nav-links" href="">Services</a>
        <a className="nav-links" href="">Portfolio</a>
        <a className="nav-links" href="">About</a>
        <a className="nav-links" href="">Contact</a>
        <a className="nav-button" href="">Get Started</a>
        
    </div>
 </div> 
 )
}
export default Navbar
