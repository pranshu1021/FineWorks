import "./App.css";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Services from "./Services.jsx";
import Whyus from "./Whyus.jsx";
import ProjectShowcase from "./ProjectShowcase.jsx";
import GoldenSection from "./GoldenSection.jsx";
import NewSection from "./NewSection.jsx";
import FinalCta from "./FinalCta.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <div className="nav-spacer" />
      <Hero />
      <Services />
      <Whyus />
      <ProjectShowcase />
      <GoldenSection />
      <NewSection />
      <FinalCta />
      <Footer />
    </div>
  );
}

export default App;