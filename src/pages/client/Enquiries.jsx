import { useState } from "react";

function Enquiries() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <main className="client-dashboard">

      {/* MOBILE HEADER */}
      <div className="client-mobile-header">
        <div className="client-brand">
          <span className="client-brand-icon">I</span>
          <span>
            Ignishun<span>Tech</span>
          </span>
        </div>

        <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
        >
            ☰
        </button>
      </div>

      {/* SIDEBAR */}
        <aside className={`client-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="client-sidebar-brand">
          <span className="client-brand-icon">I</span>
          <span>
            Ignishun<span>Tech</span>
          </span>
        </div>

        <div className="client-sidebar-label">
          CLIENT PORTAL
        </div>

        <nav className="client-nav">
          <a href="/client/dashboard">
            <span>⌂</span>
            Dashboard
          </a>

          <a href="/client/projects">
            <span>▣</span>
            My Projects
          </a>

          <a href="/client/enquiries" className="active">
            <span>◉</span>
            Enquiries
          </a>

          <a href="/client/messages">
            <span>✉</span>
            Messages
          </a>

          <a href="/client/documents">
            <span>▤</span>
            Documents
          </a>

          <a href="/client/profile">
            <span>◎</span>
            Profile
          </a>
        </nav>

        <div className="client-sidebar-bottom">
          <a href="/">
            ← Back to Website
          </a>

          <a href="/client/login">
            ⇥ Logout
          </a>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <section className="client-main">

        {/* TOP BAR */}
        <header className="client-topbar">
          <div>
            <p className="client-page-label">
              CLIENT PORTAL
            </p>

            <h1>
              Enquiries
            </h1>
          </div>

          <div className="client-user">
            <div className="client-avatar">
              C
            </div>

            <div>
              <strong>Client</strong>
              <span>Client Account</span>
            </div>
          </div>
        </header>

        {/* WELCOME */}
        <section className="client-welcome">
          <div>
            <p className="client-section-label">
              CLIENT SUPPORT
            </p>

            <h2>
              How can we help you?
            </h2>

            <p>
              Submit a new enquiry or check the status of
              your existing requests.
            </p>
          </div>

          <a
            href="#new-enquiry"
            className="client-primary-btn"
          >
            New Enquiry <span>→</span>
          </a>
        </section>

        {/* SUMMARY */}
        <section className="enquiry-summary">

          <div className="enquiry-summary-card">
            <span>ALL ENQUIRIES</span>
            <strong>04</strong>
          </div>

          <div className="enquiry-summary-card">
            <span>OPEN</span>
            <strong>01</strong>
          </div>

          <div className="enquiry-summary-card">
            <span>IN REVIEW</span>
            <strong>01</strong>
          </div>

          <div className="enquiry-summary-card">
            <span>RESOLVED</span>
            <strong>02</strong>
          </div>

        </section>

        {/* NEW ENQUIRY */}
        <section
          className="client-card enquiry-form-card"
          id="new-enquiry"
        >

          <div className="client-card-header">
            <div>
              <p className="client-section-label">
                NEW REQUEST
              </p>

              <h3>
                Submit a new enquiry
              </h3>
            </div>
          </div>

          <form className="enquiry-form">

            <div className="enquiry-form-grid">

              <div className="form-group">
                <label htmlFor="enquiry-subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="enquiry-subject"
                  placeholder="What do you need help with?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-service">
                  Service
                </label>

                <select id="enquiry-service">
                  <option value="">
                    Select a service
                  </option>

                  <option>
                    Web Development
                  </option>

                  <option>
                    AI / Machine Learning
                  </option>

                  <option>
                    Data Solutions
                  </option>

                  <option>
                    Automation
                  </option>

                  <option>
                    Other
                  </option>
                </select>
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="enquiry-message">
                Description
              </label>

              <textarea
                id="enquiry-message"
                rows="5"
                placeholder="Tell us about your requirement..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="client-primary-btn enquiry-submit"
            >
              Submit Enquiry <span>→</span>
            </button>

          </form>

        </section>

        {/* EXISTING ENQUIRIES */}
        <section className="client-card enquiries-list-card">

          <div className="client-card-header">
            <div>
              <p className="client-section-label">
                REQUEST HISTORY
              </p>

              <h3>
                Your Enquiries
              </h3>
            </div>
          </div>

          <div className="enquiry-item">

            <div className="enquiry-item-icon">
              WD
            </div>

            <div className="enquiry-item-content">
              <h4>
                Business Website Update
              </h4>

              <p>
                Request for additional features and
                content updates.
              </p>

              <span>
                Submitted 24 Sep 2026
              </span>
            </div>

            <span className="enquiry-status open-status">
              Open
            </span>

          </div>

          <div className="enquiry-item">

            <div className="enquiry-item-icon">
              AI
            </div>

            <div className="enquiry-item-content">
              <h4>
                AI Integration Discussion
              </h4>

              <p>
                Discussion regarding AI-based features
                for the project.
              </p>

              <span>
                Submitted 18 Sep 2026
              </span>
            </div>

            <span className="enquiry-status review-status">
              In Review
            </span>

          </div>

          <div className="enquiry-item">

            <div className="enquiry-item-icon">
              AU
            </div>

            <div className="enquiry-item-content">
              <h4>
                Automation Requirement
              </h4>

              <p>
                Workflow automation requirement and
                implementation discussion.
              </p>

              <span>
                Submitted 10 Sep 2026
              </span>
            </div>

            <span className="enquiry-status resolved-status">
              Resolved
            </span>

          </div>

        </section>

      </section>

    </main>
  );
}

export default Enquiries;