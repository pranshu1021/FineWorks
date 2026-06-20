import { motion } from "framer-motion";
import "./Whyus.css";
import { div } from "framer-motion/client";
import DollarIcon from "./DollarIcon";
import { Sparkle } from "@boxicons/react";
import ThunderIcon from "./ThunderIcon";
import MobileIcon from "./MobileIcon";
import StarIcon from "./StarIcon";
import HeadphoneMicIcon from "./HeadphoneMicIcon";
function Whyus(){
 return(
    <><div className="why-us">
        <motion.div className="left-part">
            <h1>A Company That Delivers<span> Without Compromise</span></h1>
            <p>We combine technical excellence with business strategy to build digital 
                products that don't just look great — they perform, convert, and scale with your business.</p>
            <div className="tab-holder">
                <div className="tab">
                <h3>8+</h3>
                <p>Projects</p>
                </div>
                <div className="tab">
                <h3>4+</h3>
                <p>Clients</p>
                </div>
                <div className="tab">
                <h3>98%</h3>
                <p>Satisfaction</p>
                </div>
            </div>
            <a href="">Work With Us</a>
        </motion.div>
        <motion.div className="right-part">
                <div className="icon-card">
                    <div className="icon"><DollarIcon/></div>
                    <div className="icon-content">
                    <h3>Affordable Pricing</h3>
                    <p>Premium quality at startup-friendly rates. Transparent pricing with no hidden fees — ever.</p>
                    </div>
                </div>
                <div className="icon-card">
                    <div className="icon"><StarIcon/></div>
                    <div className="icon-content"><h3>Modern Design</h3>
                    <p>Cutting-edge aesthetics built on current design trends that make your brand stand out.</p>
                </div></div>
                <div className="icon-card">
                    <div className="icon"><ThunderIcon/></div>
                    <div className="icon-content"><h3>Fast Delivery</h3>
                    <p>Most projects delivered in 1–3 weeks without compromising on code quality or design.</p>
                </div></div>
                <div className="icon-card">
                    <div className="icon"><MobileIcon/></div>
                    <div className="icon-content"><h3>Responsive Websites</h3>
                    <p>Pixel-perfect on every device — mobile, tablet, and desktop — tested across browsers.</p>
                </div></div>       
                <div className="icon-card">
                    <div className="icon"><HeadphoneMicIcon/></div>
                    <div className="icon-content"><h3>Ongoing Support</h3>
                    <p>Dedicated post-launch support to keep your website secure, updated, and running flawlessly.</p>
                </div></div>                                         
        </motion.div>
        </div>
    </>
 )
}

export default Whyus;