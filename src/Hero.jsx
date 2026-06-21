import "./Hero.css"
import { motion } from "framer-motion";
import Illustration from "./assets/illustration-1.png"

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div className="hero-content"
              initial={{x:-300, opacity:0, scale:0.8}}
              whileInView={{ x:0,  opacity: 1 , scale:1}}
              viewport={{ once: false }}
       
        transition={{
          duration:1.1,
          ease: "easeOut"
        }}>
          
        <h1>Building Modern Websites That <span>Grow Businesses...</span></h1>
        <p>Affordable, fast, and professional web solutions for startups, small businesses, and entrepreneurs. 
            We turn your vision into a high-converting digital experience.</p>
        <a className="hero-button" href="#contact">Get Started</a>
      </motion.div>
      <div className="hero-illustration">
<motion.img
  src={Illustration}
  initial={{ x: 300, opacity: 0, scale: 0.8 }}
  whileInView={{x:0, opacity:1, scale:1}}
  viewport={{once:false}}
  transition={{
    duration: 1.1,
    ease: "easeOut"
  }}
/>
        {/* <img src={Illustration} alt="illustration"></img> */}
      </div>
    </section>
  );
}
export default Hero;