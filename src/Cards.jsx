import { px } from "framer-motion";
import "./Cards.css";

function Cards(){
return (
    <div class="card">
        <img src="https://images.unsplash.com/photo-1656164631610-f104326810c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlua2VkaW58ZW58MHx8MHx8fDA%3D" alt="" />
        
        <div class="card-content">
            <h2>Web Development</h2>
            <p>Learn HTML, CSS, JavaScript, React, and MERN Stack with practical projects.</p>
            <a href="#" class="btn">Learn More</a>
        </div>
    </div>

)
}

export default Cards;