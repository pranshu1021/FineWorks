import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">TheFineWorks</div>
          <p>
            Building premium digital products for startups and ambitious teams.
            Modern web experiences, delivered with speed and craft.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <a href="#services">Services</a>
            <a href="#Project-section">Portfolio</a>
            <a href="#why-us">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <h4>Contact</h4>
            <p>fineworksmain@gmail.com</p>
            
          </div>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-row">
            <a href="https://x.com/fineworks_main" aria-label="Twitter">Twitter</a>
            <a href="https://www.linkedin.com/in/fine-works-235377418/" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://www.instagram.com/fineworks_main/" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-note">
        <p>© 2026 FineWorks. Crafted for modern startups and creative teams.</p>
      </div>
    </footer>
  );
}

export default Footer;
