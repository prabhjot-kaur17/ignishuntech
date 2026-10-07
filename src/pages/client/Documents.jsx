import { useState } from "react";

const basePath = import.meta.env.BASE_URL;

function Documents() {
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

          <a href={`${basePath}client/projects`}>
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

          <a href={`${basePath}client/documents`} className="active">
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

            <h1>
              Documents
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
              PROJECT FILES
            </p>

            <h2>
              Your documents, organized.
            </h2>

            <p>
              Access project files, requirements,
              reports and other important documents.
            </p>
          </div>

          <button className="client-primary-btn">
            Upload Document <span>↑</span>
          </button>
        </section>

        {/* DOCUMENT SUMMARY */}
        <section className="document-summary">

          <div className="document-summary-card">
            <span>ALL DOCUMENTS</span>
            <strong>08</strong>
          </div>

          <div className="document-summary-card">
            <span>PROJECT FILES</span>
            <strong>05</strong>
          </div>

          <div className="document-summary-card">
            <span>REPORTS</span>
            <strong>03</strong>
          </div>

        </section>

        {/* DOCUMENTS LIST */}
        <section className="client-card documents-card">

          <div className="client-card-header">
            <div>
              <p className="client-section-label">
                FILE LIBRARY
              </p>

              <h3>
                Recent Documents
              </h3>
            </div>
          </div>

          <div className="document-list">

            <div className="document-item">
              <div className="document-icon pdf">
                PDF
              </div>

              <div className="document-info">
                <h4>
                  Project Requirements.pdf
                </h4>

                <p>
                  AI Data Solution · 2.4 MB
                </p>

                <span>
                  Uploaded 24 Sep 2026
                </span>
              </div>

              <a
                href="#download"
                className="document-action"
              >
                ↓ Download
              </a>
            </div>

            <div className="document-item">
              <div className="document-icon doc">
                DOC
              </div>

              <div className="document-info">
                <h4>
                  Project Specification.docx
                </h4>

                <p>
                  AI Data Solution · 1.8 MB
                </p>

                <span>
                  Uploaded 20 Sep 2026
                </span>
              </div>

              <a
                href="#download"
                className="document-action"
              >
                ↓ Download
              </a>
            </div>

            <div className="document-item">
              <div className="document-icon pdf">
                PDF
              </div>

              <div className="document-info">
                <h4>
                  Progress Report.pdf
                </h4>

                <p>
                  Business Web Platform · 3.1 MB
                </p>

                <span>
                  Uploaded 18 Sep 2026
                </span>
              </div>

              <a
                href="#download"
                className="document-action"
              >
                ↓ Download
              </a>
            </div>

            <div className="document-item">
              <div className="document-icon xls">
                XLS
              </div>

              <div className="document-info">
                <h4>
                  Data Analysis.xlsx
                </h4>

                <p>
                  AI Data Solution · 4.6 MB
                </p>

                <span>
                  Uploaded 15 Sep 2026
                </span>
              </div>

              <a
                href="#download"
                className="document-action"
              >
                ↓ Download
              </a>
            </div>

          </div>

        </section>

      </section>

    </main>
  );
}

export default Documents;