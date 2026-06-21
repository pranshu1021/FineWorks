import "./FinalCta.css";

function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <div className="final-cta-inner">
        <div className="final-cta-copy">
          <span className="final-cta-label">Ready to get started?</span>
          <h2>Share your project details and we’ll reach out with a tailored plan.</h2>

        </div>

        <div className="final-cta-action">
          <a
            className="final-cta-link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc6dx_JGJsWoZlvt5w3GPKSryU52exgoEyXFZlp9UKtAf8XWQ/viewform"
            target="_blank"
            rel="noreferrer"
          >
            Open Project Form
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
