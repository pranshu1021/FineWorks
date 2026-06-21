import { motion } from "framer-motion";
import "./PortfolioCards.css";
import AnswerNest from "./assets/answernest.png"
import IndianMart from "./assets/indianmart.jpeg"
import CalmNest from "./assets/calmnest.png"
// import Ecom from "./assets/ecom.png"
// import Portfolio from "./assets/portfolio.png"
// import Maintain from "./assets/maintain.png"
function PortfolioCards(){
return (
    <div className="card parent">
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
        <img src={AnswerNest} alt="" />
        
        <div className="card-content">
            <h2>AnswerNest - Ask What Matters</h2>
            <p>AnswerNest is a community-driven Q&A platform where users can ask questions, share knowledge, and collaborate through discussions.</p>
            <a className="cards-btn" href="https://testingrender-pg82.onrender.com/">Visit Site</a>
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
        <img src={IndianMart} alt="" />
        
        <div className="card-content">
            <h2>Indian Mart - Make Buying Fun</h2>
            <p>Developed a responsive e-commerce frontend using React. Implemented Dark/Light theme switching, modern UI components and user friendly.
</p>
     <a className="cards-btn" href="https://indian-mart.onrender.com/">Visit Site</a>
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
        <img src={CalmNest} alt="" />
        
        <div className="card-content">
            <h2>CalmNest</h2>
            <p>CalmNest is a relaxation-focused web app developed using React, designed to help users unwind through nature sounds, interactive music tools, and an AI-powered companion.</p>
             <a className="cards-btn" href="https://pranshu1021.github.io/CalmNest/index.html">Visit Site</a>
        </div>
        </motion.div>
                {/* <motion.div className="card card-1" initial={{ x: -200, opacity: 0 }}
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
        
        <div className="card-content">
            <h2>E-Commerce Websites</h2>
            <p>Fully-featured online stores with secure payments, inventory management, order tracking, and conversion-optimized product pages.</p>
            <a className="cards-btn" href="#contact">Visit</a>
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
        
        <div className="card-content">
            <h2>Portfolio Websites</h2>
            <p>Stunning personal and professional portfolios that showcase your work with elegance, tell your story, and attract the right opportunities.</p>
            <a className="cards-btn" href="#contact">Visit</a>
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
        
        <div className="card-content">
            <h2>Website Maintenance</h2>
            <p>Ongoing updates, security patches, performance optimization, content management, and dedicated technical support for peace of mind.</p>
                <a className="cards-btn" href="#contact">Visit</a>
        </div>
        </motion.div> */}
        <a className="cards-btn" href="#contact">Start Your Project</a>
    </div>
    
    

)
}

export default PortfolioCards;
