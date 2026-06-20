import "./App.css";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Services from "./Services.jsx";
import Whyus from "./Whyus.jsx"
import ProjectShowcase from "./ProjectShowcase.jsx";
function App() {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <Services/>
      <Whyus/>
      <ProjectShowcase/>
    </div>
  );                   
}
export default App;