import './ProjectShowcase.css'
import PortfolioCards from './PortfolioCards';

function ProjectShowcase(){
    return(
        <>
        <section id='Project-section'>
              <div id='header'>
    <h2 className="Project-heading">Projects That <span>Speak for Themselves</span> </h2>
    <p className="Project-para">A curated selection of 
        web application, platforms, and sites we've built across industries and continents.</p>
</div>
<div className='cards'>
    <PortfolioCards/>
</div>
    </section>
    </>
    )
}
export default ProjectShowcase;