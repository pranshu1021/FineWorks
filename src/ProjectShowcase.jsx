import './ProjectShowcase.css'
import PortfolioCards from './PortfolioCards';

function ProjectShowcase(){
    return(
        <>
        <section id='Project-section'>
              <div id='header'>
    <h2 className="Project-heading">Project Showcase </h2>
    <p className="Project-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, numquam?</p>
</div>
<div className='cards'>
    <PortfolioCards/>
</div>

    </section>
    
        </>
    )
}

export default ProjectShowcase;