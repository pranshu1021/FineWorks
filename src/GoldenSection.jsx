import "./GoldenSection.css";

function GoldenSection() {
  return (
    <section className="golden-section" id="golden-section">
      <div className="golden-panel">
        <span className="golden-badge">Internship Program</span>
        <h2>Launch Your Career with FineWorks</h2>
        <p>
          Join our hands-on internship program and build real-world skills by working on
          actual client projects alongside experienced developers and designers.
        </p>
        <div className="golden-actions">
          <a
            className="primary-btn"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeYt26T7tpxMzo2jsyl2gxAGJWMhch8N7fR3H5mkFWWTjBMPw/viewform?pli=1"
            target="_blank"
            rel="noreferrer"
          >
            Apply for Internship
          </a>
          <a href="#Project-section">View Projects</a>
        </div>
      </div>

      <div className="golden-grid">
        <article className="golden-card">
          <h3>What You'll Receive</h3>
          <div className="receipt-list">
            <div className="receipt-item">
              <span className="receipt-icon">✔</span>
              <p>3-Month Structured Internship Program</p>
            </div>
            <div className="receipt-item">
              <span className="receipt-icon">✔</span>
              <p>Real-World Client Projects</p>
            </div>
            <div className="receipt-item">
              <span className="receipt-icon">✔</span>
              <p>1-on-1 Mentorship Sessions</p>
            </div>
            <div className="receipt-item">
              <span className="receipt-icon">✔</span>
              <p>GitHub Contribution Portfolio</p>
            </div>
            <div className="receipt-item">
              <span className="receipt-icon">✔</span>
              <p>Official Internship Certificate</p>
            </div>
            <div className="receipt-item">
              <span className="receipt-icon">✔</span>
              <p>Experience Letter</p>
            </div>
            <div className="receipt-item">
              <span className="receipt-icon">✔</span>
              <p>Letter of Recommendation (Performance Based)</p>
            </div>
          </div>
        </article>

        <article className="golden-card">
          <h3>Available Tracks</h3>
          <div className="track-group">
            <div className="track-item">
              <span className="track-title">Frontend Development</span>
              <p>React, TypeScript, Tailwind CSS, UI component libraries</p>
            </div>
            <div className="track-item">
              <span className="track-title">Full Stack Development</span>
              <p>Node.js, Express, databases, REST APIs & deployment</p>
            </div>
            <div className="track-item">
              <span className="track-title">UI/UX Design</span>
              <p>Figma, design systems, user research & prototyping</p>
            </div>
          </div>
        </article>

        <article className="golden-card golden-metrics-card">
          <div className="metrics-grid">
            <div className="metric-tab">
              <strong>DURATION</strong>
              <p>3 Months</p>
            </div>
            <div className="metric-tab">
              <strong>MODE</strong>
              <p>Remote / Hybrid</p>
            </div>
            <div className="metric-tab">
              <strong>INTAKE</strong>
              <p>Rolling Admissions</p>
            </div>
            <div className="metric-tab">
              <strong>STIPEND</strong>
              <p>Performance Based</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default GoldenSection;
