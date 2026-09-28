import { useState } from "react";

function Messages() {
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

          <a href="/client/messages" className="active">
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
              Messages
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

        {/* MESSAGE AREA */}
        <section className="messages-workspace">

          {/* CONVERSATION LIST */}
          <div className="conversation-panel">

            <div className="conversation-header">
              <div>
                <p className="client-section-label">
                  COMMUNICATION
                </p>

                <h3>
                  Conversations
                </h3>
              </div>
            </div>

            <div className="conversation-item active">
              <div className="conversation-avatar">
                IT
              </div>

              <div className="conversation-info">
                <div>
                  <strong>
                    IgnishunTech Team
                  </strong>

                  <span>
                    2h
                  </span>
                </div>

                <p>
                  Project milestone has been updated.
                </p>
              </div>

              <span className="unread-count">
                3
              </span>
            </div>

            <div className="conversation-item">
              <div className="conversation-avatar">
                PM
              </div>

              <div className="conversation-info">
                <div>
                  <strong>
                    Project Manager
                  </strong>

                  <span>
                    Yesterday
                  </span>
                </div>

                <p>
                  Please review the latest requirements.
                </p>
              </div>
            </div>

            <div className="conversation-item">
              <div className="conversation-avatar">
                SU
              </div>

              <div className="conversation-info">
                <div>
                  <strong>
                    Support Team
                  </strong>

                  <span>
                    3d
                  </span>
                </div>

                <p>
                  Your enquiry has been received.
                </p>
              </div>
            </div>

          </div>

          {/* CHAT PANEL */}
          <div className="chat-panel">

            <div className="chat-header">
              <div className="conversation-avatar">
                IT
              </div>

              <div>
                <strong>
                  IgnishunTech Team
                </strong>

                <span>
                  Project Communication
                </span>
              </div>
            </div>

            <div className="chat-messages">

              <div className="message received">
                <div className="message-bubble">
                  <p>
                    Hello! We've updated the progress of
                    your AI Data Solution project.
                  </p>

                  <span>
                    10:24 AM
                  </span>
                </div>
              </div>

              <div className="message sent">
                <div className="message-bubble">
                  <p>
                    Great! I'll review the latest update.
                    Thank you.
                  </p>

                  <span>
                    10:31 AM
                  </span>
                </div>
              </div>

              <div className="message received">
                <div className="message-bubble">
                  <p>
                    The model development phase is now
                    in progress. We'll share the next
                    milestone update soon.
                  </p>

                  <span>
                    10:35 AM
                  </span>
                </div>
              </div>

            </div>

            {/* MESSAGE INPUT */}
            <form className="message-input-area">

              <input
                type="text"
                placeholder="Type your message..."
              />

              <button type="submit">
                Send
                <span>→</span>
              </button>

            </form>

          </div>

        </section>

      </section>

    </main>
  );
}

export default Messages;