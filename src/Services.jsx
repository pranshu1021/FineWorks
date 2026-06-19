import { motion } from "framer-motion";
import "./Services.css"
function Services(){
    return (
        <section>
              <motion.div
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.8 }}
  >
            <div className="details">
            <h3>OUR SERVICES</h3>
            <h1>Everything You need To <span>Succeed Online</span></h1>
            <p>
                From concept to launch and beyond — 
                we deliver end-to-end web development services that help your 
                business thrive in the digital world.
            </p>
            </div>
            </motion.div>

            <div>
                
            </div>
        </section>
    )
}

export default Services;