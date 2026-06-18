import "./Hero.css"
import Illustration from "./assets/illustration-1.png"
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Building Modern Websites That <span>Grow Businesses...</span></h1>
        <p>Affordable, fast, and professional web solutions for startups, small businesses, and entrepreneurs. 
            We turn your vision into a high-converting digital experience.</p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-illustration">
        <img src={Illustration} alt="illustration"></img>
      </div>
    </section>
  );
}
export default Hero;