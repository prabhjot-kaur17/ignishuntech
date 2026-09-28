import { useState } from "react";

function Dashboard() {
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

          <a href="/client/dashboard" className="active">
            <span>⌂</span>
            Dashboard
          </a>

          <a href="/client/projects">
            <span>▣</span>
            My Projects
          </a>

          <a href="/client/enquiries">
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

          <a
            href="/client/login"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
            }}
          >
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

            <h1>Dashboard</h1>
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
              WELCOME BACK
            </p>

            <h2>
              Good to see you again.
            </h2>

            <p>
              Here's a quick overview of your projects,
              enquiries and recent activity.
            </p>
          </div>

          <a
            href="/client/enquiries"
            className="client-primary-btn"
          >
            Start an Enquiry
            <span>→</span>
          </a>

        </section>


        {/* STATS */}
        <section className="client-stats">

          <div className="client-stat-card">
            <div className="client-stat-icon">▣</div>

            <div>
              <span>ACTIVE PROJECTS</span>
              <strong>02</strong>
            </div>
          </div>


          <div className="client-stat-card">
            <div className="client-stat-icon">◉</div>

            <div>
              <span>OPEN ENQUIRIES</span>
              <strong>01</strong>
            </div>
          </div>


          <div className="client-stat-card">
            <div className="client-stat-icon">✉</div>

            <div>
              <span>UNREAD MESSAGES</span>
              <strong>03</strong>
            </div>
          </div>


          <div className="client-stat-card">
            <div className="client-stat-icon">▤</div>

            <div>
              <span>DOCUMENTS</span>
              <strong>08</strong>
            </div>
          </div>

        </section>


        {/* CONTENT GRID */}
        <section className="client-content-grid">


          {/* PROJECTS */}
          <div className="client-card client-projects-card">

            <div className="client-card-header">

              <div>
                <p className="client-section-label">
                  PROJECT OVERVIEW
                </p>

                <h3>Active Projects</h3>
              </div>

              <a href="/client/projects">
                View All →
              </a>

            </div>


            <div className="client-project">

              <div className="client-project-info">

                <div className="client-project-icon">
                  AI
                </div>

                <div>
                  <h4>AI Data Solution</h4>
                  <p>Artificial Intelligence</p>
                </div>

              </div>


              <div className="client-project-progress">

                <div>
                  <span>Progress</span>
                  <strong>72%</strong>
                </div>

                <div className="client-progress-bar">
                  <div style={{ width: "72%" }}></div>
                </div>

              </div>

            </div>


            <div className="client-project">

              <div className="client-project-info">

                <div className="client-project-icon">
                  WD
                </div>

                <div>
                  <h4>Business Web Platform</h4>
                  <p>Web Development</p>
                </div>

              </div>


              <div className="client-project-progress">

                <div>
                  <span>Progress</span>
                  <strong>45%</strong>
                </div>

                <div className="client-progress-bar">
                  <div style={{ width: "45%" }}></div>
                </div>

              </div>

            </div>

          </div>


          {/* RECENT ACTIVITY */}
          <div className="client-card">

            <div className="client-card-header">

              <div>
                <p className="client-section-label">
                  ACTIVITY
                </p>

                <h3>Recent Activity</h3>
              </div>

            </div>


            <div className="client-activity">

              <div className="activity-dot"></div>

              <div>
                <strong>Project milestone updated</strong>
                <span>AI Data Solution · 2 hours ago</span>
              </div>

            </div>


            <div className="client-activity">

              <div className="activity-dot"></div>

              <div>
                <strong>New document uploaded</strong>
                <span>Project Requirements.pdf · Yesterday</span>
              </div>

            </div>


            <div className="client-activity">

              <div className="activity-dot"></div>

              <div>
                <strong>Message received</strong>
                <span>IgnishunTech Team · 2 days ago</span>
              </div>

            </div>

          </div>


          {/* QUICK ACTIONS */}
          <div className="client-card">

            <div className="client-card-header">

              <div>
                <p className="client-section-label">
                  QUICK ACTIONS
                </p>

                <h3>What would you like to do?</h3>
              </div>

            </div>


            <div className="client-quick-actions">

              <a href="/client/enquiries">
                <span>+</span>
                <div>
                  <strong>New Enquiry</strong>
                  <small>Discuss a new requirement</small>
                </div>
              </a>


              <a href="/client/messages">
                <span>✉</span>
                <div>
                  <strong>Send Message</strong>
                  <small>Contact our team</small>
                </div>
              </a>


              <a href="/client/documents">
                <span>▤</span>
                <div>
                  <strong>View Documents</strong>
                  <small>Access your project files</small>
                </div>
              </a>


              <a href="/client/profile">
                <span>◎</span>
                <div>
                  <strong>Update Profile</strong>
                  <small>Manage account information</small>
                </div>
              </a>

            </div>

          </div>


          {/* SUPPORT */}
          <div className="client-support-card">

            <p className="client-section-label">
              NEED HELP?
            </p>

            <h3>We're here to help.</h3>

            <p>
              Have a question about your project or need
              assistance? Our team is ready to help.
            </p>

            <a href="/client/messages">
              Contact Support →
            </a>

          </div>

        </section>

      </section>

    </main>
  );
}

export default Dashboard;