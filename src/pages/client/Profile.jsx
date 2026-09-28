import { useState } from "react";

function Profile() {
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

          <a href="/client/profile" className="active">
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
              Profile
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

        {/* PROFILE HEADER */}
        <section className="profile-header-card">
          <div className="profile-avatar-large">
            C
          </div>

          <div className="profile-header-info">
            <p className="client-section-label">
              CLIENT ACCOUNT
            </p>

            <h2>
              Client Account
            </h2>

            <p>
              client@example.com
            </p>
          </div>

          <div className="profile-status">
            <span className="profile-status-dot"></span>
            Account Active
          </div>
        </section>

        {/* PROFILE CONTENT */}
        <section className="profile-content-grid">

          {/* PERSONAL INFORMATION */}
          <div className="client-card profile-card">

            <div className="client-card-header">
              <div>
                <p className="client-section-label">
                  ACCOUNT DETAILS
                </p>

                <h3>
                  Personal Information
                </h3>
              </div>
            </div>

            <form className="profile-form">

              <div className="profile-form-grid">

                <div className="form-group">
                  <label htmlFor="profile-name">
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="profile-name"
                    defaultValue="Client Account"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="profile-email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="profile-email"
                    defaultValue="client@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="profile-phone">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="profile-phone"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="profile-company">
                    Company
                  </label>

                  <input
                    type="text"
                    id="profile-company"
                    placeholder="Company name"
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="profile-address">
                  Address
                </label>

                <textarea
                  id="profile-address"
                  rows="3"
                  placeholder="Enter your address"
                ></textarea>
              </div>

              <button
                type="submit"
                className="client-primary-btn profile-save-btn"
              >
                Save Changes
                <span>→</span>
              </button>

            </form>

          </div>

          {/* ACCOUNT SECURITY */}
          <div className="client-card profile-card">

            <div className="client-card-header">
              <div>
                <p className="client-section-label">
                  SECURITY
                </p>

                <h3>
                  Account Security
                </h3>
              </div>
            </div>

            <div className="security-item">
              <div>
                <strong>
                  Password
                </strong>

                <span>
                  Last updated recently
                </span>
              </div>

              <a href="/client/forgot-password">
                Change
              </a>
            </div>

            <div className="security-item">
              <div>
                <strong>
                  Email Verification
                </strong>

                <span>
                  Your email address is verified
                </span>
              </div>

              <span className="verified-badge">
                Verified
              </span>
            </div>

            <div className="security-item">
              <div>
                <strong>
                  Account Status
                </strong>

                <span>
                  Your client account is active
                </span>
              </div>

              <span className="active-badge">
                Active
              </span>
            </div>

          </div>

        </section>

      </section>

    </main>
  );
}

export default Profile;