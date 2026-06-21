import "./NewSection.css";
import HeroImage from "./assets/team.jpg";

function NewSection() {
  return (
    <section className="new-section">
      <div className="new-section-inner">
        <div className="new-heading">
          <span className="new-badge">ABOUT US</span>
          <h2>Built by Developers, Driven by Results</h2>
        </div>

        <div className="new-layout">
          <div className="new-left">
            <div className="new-image">
              <img src={HeroImage} alt="Team collaboration" />
            </div>
            <div className="new-section-copy">
              <p>
                FineWorks was founded with a simple idea: small businesses and startups
                deserve the same quality of digital presence as enterprise companies —
                without the enterprise price tag.
              </p>
              <p>
                What began small freelance team has grown into a specialized
                web development agency delivering projects across 10+ countries. We stay
                lean, we stay focused, and we pour genuine care into every line of code
                we ship.
              </p>
            </div>
          </div>

          <div className="new-cards">
            <div className="new-card">
              <div className="new-card-title">Our Mission</div>
              <p>
                To make world-class web development accessible to every entrepreneur
                and business — delivering products that are fast, beautiful, and built
                to convert.
              </p>
            </div>

            <div className="new-card">
              <div className="new-card-title">Our Vision</div>
              <p>
                To be the go-to digital partner for ambitious startups and small
                businesses globally, known for reliability, craft, and long-term
                relationships.
              </p>
            </div>

            <div className="new-card">
              <div className="new-card-title">Our Values</div>
              <p>
                Transparency in pricing, honesty in timelines, excellence in
                execution. We treat every client's project as if it were our own
                business on the line.
              </p>
            </div>
          </div>
        </div>
        <div className="team-section">
            <h2> Meet the <span className="team">Team</span></h2>
        <div className="team-card">
            <div className="avatar blue">PG</div>


            <h3>Pranshu Gupta</h3>

            <p>Founder & Director</p>
        </div>
                <div className="team-card">
            <div className="avatar purple">NB</div>


            <h3>Nitin Bhati</h3>

            <p>Associate Founder & Operations Lead (North India)</p>
        </div>
                <div className="team-card">
            <div className="avatar cyan">PT</div>


            <h3>Pradeep Tanwar</h3>

            <p>Associate Founder & Lead Developer</p>
        </div>
                <div className="team-card">
            <div className="avatar green">PB</div>


            <h3>Praveen Balaji</h3>

            <p>Associate Founder & Regional Manager (South India)</p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default NewSection;
