import { motion } from "framer-motion";
import "./PortfolioCards.css";
import Web from "./assets/webdev-thumbnail.png"
import Reactapp from "./assets/react-apps.png"
import UxUi from "./assets/UxUi.png"
import Ecom from "./assets/ecom.png"
import Portfolio from "./assets/portfolio.png"
import Maintain from "./assets/maintain.png"
function PortfolioCards(){
return (
    <div class="card parent">
        <motion.div className="card card-1"
        initial={{ x: -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.3 }} whileHover={{ scale: 1.03 }}
      transition={{
  duration: 0.8,
  scale: {
    type: "spring",
    stiffness: 300,
    damping: 15
  }
  }}>
        <img src={Web} alt="" />
        
        <div class="card-content">
            <h2>Website Development</h2>
            <p>Custom, responsive websites tailored to your brand identity and business objectives — from landing pages to complex multi-page sites.</p>
            <a className="cards-btn" href="">Visit</a>
        </div>
        </motion.div>
                <motion.div className="card card-1" initial={{ x: -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.3 }} whileHover={{ scale: 1.03 }}
      transition={{
  duration: 0.8,
  scale: {
    type: "spring",
    stiffness: 300,
    damping: 15
  }
  }}>
        <img src={Reactapp} alt="" />
        
        <div class="card-content">
            <h2>React Applications</h2>
            <p>Fast, scalable single-page and full-stack React applications built with modern architecture, clean code, and optimal performance.</p>
     <a className="cards-btn" href="">Visit</a>
        </div>
        </motion.div>
                <motion.div className="card card-1" initial={{ x: -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.3 }} whileHover={{ scale: 1.03 }}
     transition={{
  duration: 0.8,
  scale: {
    type: "spring",
    stiffness: 300,
    damping: 15
  }
  }}>
        <img src={UxUi} alt="" />
        
        <div class="card-content">
            <h2>UI/UX Design</h2>
            <p>Beautiful, intuitive interfaces designed with user psychology in mind. From wireframes to pixel-perfect Figma prototypes.</p>
             <a className="cards-btn" href="">Visit</a>
        </div>
        </motion.div>
                <motion.div className="card card-1" initial={{ x: -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.3 }} whileHover={{ scale: 1.03 }}
    transition={{
  duration: 0.8,
  scale: {
    type: "spring",
    stiffness: 300,
    damping: 15
  }
  }}>
        <img src={Ecom} alt="" />
        
        <div class="card-content">
            <h2>E-Commerce Websites</h2>
            <p>Fully-featured online stores with secure payments, inventory management, order tracking, and conversion-optimized product pages.</p>
            <a className="cards-btn" href="">Visit</a>
        </div>
        </motion.div>
                <motion.div className="card card-1" initial={{ x: -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.3 }} whileHover={{ scale: 1.03 }}
     transition={{
  duration: 0.8,
  scale: {
    type: "spring",
    stiffness: 300,
    damping: 15
  }
  }}>
        <img src={Portfolio} alt="" />
        
        <div class="card-content">
            <h2>Portfolio Websites</h2>
            <p>Stunning personal and professional portfolios that showcase your work with elegance, tell your story, and attract the right opportunities.</p>
            <a className="cards-btn" href="">Visit</a>
        </div>
        </motion.div>
                <motion.div className="card card-1" initial={{ x: -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.3 }} whileHover={{ scale: 1.03 }}
      transition={{
  duration: 0.8,
  scale: {
    type: "spring",
    stiffness: 300,
    damping: 15
  }
  }}>
        <img src={Maintain} alt="" />
        
        <div class="card-content">
            <h2>Website Maintenance</h2>
            <p>Ongoing updates, security patches, performance optimization, content management, and dedicated technical support for peace of mind.</p>
                <a className="cards-btn" href="">Visit</a>
        </div>
        </motion.div>
    </div>
    

)
}

export default PortfolioCards;