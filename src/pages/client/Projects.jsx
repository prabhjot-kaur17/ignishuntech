import { useState } from "react";

function Projects() {
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

          <a href={`${basePath}client/dashboard`}>
            <span>⌂</span>
            Dashboard
          </a>

          <a href={`${basePath}client/projects`} className="active">
            <span>▣</span>
            My Projects
          </a>

          <a href={`${basePath}client/enquiries`}>
            <span>◉</span>
            Enquiries
          </a>

          <a href={`${basePath}client/messages`}>
            <span>✉</span>
            Messages
          </a>

          <a href={`${basePath}client/documents`}>
            <span>▤</span>
            Documents
          </a>

          <a href={`${basePath}client/profile`}>
            <span>◎</span>
            Profile
          </a>

        </nav>

        <div className="client-sidebar-bottom">

          <a href="/">
            ← Back to Website
          </a>

          <a href={`${basePath}client/login`}>
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

            <h1>My Projects</h1>
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


        {/* PAGE INTRO */}
        <section className="client-welcome">

          <div>

            <p className="client-section-label">
              PROJECT MANAGEMENT
            </p>

            <h2>
              Your projects, all in one place.
            </h2>

            <p>
              Track project progress, milestones and
              important updates from your client workspace.
            </p>

          </div>

          <a
            href={`${basePath}client/enquiries`}
            className="client-primary-btn"
          >
            Start New Project
            <span>→</span>
          </a>

        </section>


        {/* PROJECT FILTER / SUMMARY */}
        <section className="projects-summary">

          <div className="project-summary-card">

            <span>ALL PROJECTS</span>
            <strong>03</strong>

          </div>

          <div className="project-summary-card">

            <span>IN PROGRESS</span>
            <strong>02</strong>

          </div>

          <div className="project-summary-card">

            <span>COMPLETED</span>
            <strong>01</strong>

          </div>

        </section>


        {/* PROJECT LIST */}
        <section className="projects-list">

          {/* PROJECT 1 */}
          <article className="project-detail-card">

            <div className="project-card-top">

              <div className="project-title-area">

                <div className="project-large-icon">
                  AI
                </div>

                <div>
                  <p className="client-section-label">
                    AI / MACHINE LEARNING
                  </p>

                  <h3>
                    Intelligent Data Solution
                  </h3>

                  <p>
                    AI-driven solution for data analysis
                    and intelligent decision support.
                  </p>
                </div>

              </div>

              <span className="project-status active-status">
                In Progress
              </span>

            </div>


            <div className="project-progress-section">

              <div className="project-progress-header">

                <span>Overall Progress</span>

                <strong>72%</strong>

              </div>

              <div className="project-progress-bar">

                <div
                  style={{ width: "72%" }}
                ></div>

              </div>

            </div>


            <div className="project-meta">

              <div>
                <span>PROJECT TYPE</span>
                <strong>AI Solution</strong>
              </div>

              <div>
                <span>START DATE</span>
                <strong>10 Aug 2026</strong>
              </div>

              <div>
                <span>EXPECTED DELIVERY</span>
                <strong>30 Oct 2026</strong>
              </div>

            </div>


            <div className="project-milestones">

              <div className="project-card-heading">
                <h4>Milestones</h4>
              </div>

              <div className="milestone completed">
                <span>✓</span>
                <div>
                  <strong>Requirement Analysis</strong>
                  <small>Completed</small>
                </div>
              </div>

              <div className="milestone completed">
                <span>✓</span>
                <div>
                  <strong>Data Preparation</strong>
                  <small>Completed</small>
                </div>
              </div>

              <div className="milestone current">
                <span>●</span>
                <div>
                  <strong>Model Development</strong>
                  <small>Currently in progress</small>
                </div>
              </div>

              <div className="milestone">
                <span>○</span>
                <div>
                  <strong>Testing & Deployment</strong>
                  <small>Upcoming</small>
                </div>
              </div>

            </div>


            <div className="project-card-footer">

              <span>
                Last updated 2 hours ago
              </span>

              <a href={`${basePath}client/messages`}>
                View Updates →
              </a>

            </div>

          </article>


          {/* PROJECT 2 */}
          <article className="project-detail-card">

            <div className="project-card-top">

              <div className="project-title-area">

                <div className="project-large-icon">
                  WD
                </div>

                <div>

                  <p className="client-section-label">
                    WEB DEVELOPMENT
                  </p>

                  <h3>
                    Business Web Platform
                  </h3>

                  <p>
                    Modern responsive web platform designed
                    for business operations and customer experience.
                  </p>

                </div>

              </div>

              <span className="project-status active-status">
                In Progress
              </span>

            </div>


            <div className="project-progress-section">

              <div className="project-progress-header">

                <span>Overall Progress</span>

                <strong>45%</strong>

              </div>

              <div className="project-progress-bar">

                <div
                  style={{ width: "45%" }}
                ></div>

              </div>

            </div>


            <div className="project-meta">

              <div>
                <span>PROJECT TYPE</span>
                <strong>Web Platform</strong>
              </div>

              <div>
                <span>START DATE</span>
                <strong>02 Sep 2026</strong>
              </div>

              <div>
                <span>EXPECTED DELIVERY</span>
                <strong>15 Nov 2026</strong>
              </div>

            </div>


            <div className="project-milestones">

              <div className="project-card-heading">
                <h4>Milestones</h4>
              </div>

              <div className="milestone completed">
                <span>✓</span>
                <div>
                  <strong>Project Planning</strong>
                  <small>Completed</small>
                </div>
              </div>

              <div className="milestone current">
                <span>●</span>
                <div>
                  <strong>UI Development</strong>
                  <small>Currently in progress</small>
                </div>
              </div>

              <div className="milestone">
                <span>○</span>
                <div>
                  <strong>Backend Integration</strong>
                  <small>Upcoming</small>
                </div>
              </div>

              <div className="milestone">
                <span>○</span>
                <div>
                  <strong>Testing & Launch</strong>
                  <small>Upcoming</small>
                </div>
              </div>

            </div>


            <div className="project-card-footer">

              <span>
                Last updated yesterday
              </span>

              <a href={`${basePath}client/messages`}>
                View Updates →
              </a>

            </div>

          </article>


          {/* PROJECT 3 */}
          <article className="project-detail-card completed-project">

            <div className="project-card-top">

              <div className="project-title-area">

                <div className="project-large-icon">
                  AU
                </div>

                <div>

                  <p className="client-section-label">
                    AUTOMATION
                  </p>

                  <h3>
                    Workflow Automation
                  </h3>

                  <p>
                    Connected workflow designed to reduce
                    repetitive tasks and improve efficiency.
                  </p>

                </div>

              </div>

              <span className="project-status completed-status">
                Completed
              </span>

            </div>


            <div className="project-progress-section">

              <div className="project-progress-header">

                <span>Overall Progress</span>

                <strong>100%</strong>

              </div>

              <div className="project-progress-bar">

                <div
                  style={{ width: "100%" }}
                ></div>

              </div>

            </div>


            <div className="project-meta">

              <div>
                <span>PROJECT TYPE</span>
                <strong>Automation</strong>
              </div>

              <div>
                <span>START DATE</span>
                <strong>15 Jun 2026</strong>
              </div>

              <div>
                <span>COMPLETED</span>
                <strong>28 Jul 2026</strong>
              </div>

            </div>


            <div className="project-milestones">

              <div className="project-card-heading">
                <h4>Milestones</h4>
              </div>

              <div className="milestone completed">
                <span>✓</span>
                <div>
                  <strong>Requirement Analysis</strong>
                  <small>Completed</small>
                </div>
              </div>

              <div className="milestone completed">
                <span>✓</span>
                <div>
                  <strong>Workflow Development</strong>
                  <small>Completed</small>
                </div>
              </div>

              <div className="milestone completed">
                <span>✓</span>
                <div>
                  <strong>Integration & Testing</strong>
                  <small>Completed</small>
                </div>
              </div>

              <div className="milestone completed">
                <span>✓</span>
                <div>
                  <strong>Deployment</strong>
                  <small>Completed</small>
                </div>
              </div>

            </div>


            <div className="project-card-footer">

              <span>
                Completed 28 Jul 2026
              </span>

              <a href={`${basePath}client/documents`}>
                View Documents →
              </a>

            </div>

          </article>

        </section>

      </section>

    </main>
  );
}

export default Projects;