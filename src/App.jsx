// import { useState } from "react";
import Navbar from "./components/Navbar";
import ClientLogin from "./pages/client/ClientLogin";
import ClientRegister from "./pages/client/ClientRegister";
import ForgotPassword from "./pages/client/ForgotPassword";
import EmailVerification from "./pages/client/EmailVerification";
import Dashboard from "./pages/client/Dashboard";
import Projects from "./pages/client/Projects";
import Enquiries from "./pages/client/Enquiries";
import Messages from "./pages/client/Messages";
import Documents from "./pages/client/Documents";
import Profile from "./pages/client/Profile";

function App() {
    if (window.location.pathname === "/client/login") {
        return <ClientLogin />;
    }

    if (window.location.pathname === "/client/register") {
        return <ClientRegister />;
    }

    if (window.location.pathname === "/client/forgot-password") {
        return <ForgotPassword />;
    }

    if (window.location.pathname === "/client/verify-email") {
        return <EmailVerification />;
    }

    if (window.location.pathname === "/client/dashboard") {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.href = "/client/login";
            return null;
        }

        return <Dashboard />;
    }

    if (window.location.pathname === "/client/projects") {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.href = "/client/login";
            return null;
        }

        return <Projects />;
    }

    if (window.location.pathname === "/client/enquiries") {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.href = "/client/login";
            return null;
        }

        return <Enquiries />;
    }

    if (window.location.pathname === "/client/messages") {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.href = "/client/login";
            return null;
        }

        return <Messages />;
    }

    if (window.location.pathname === "/client/documents") {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.href = "/client/login";
            return null;
        }

        return <Documents />;
    }

    if (window.location.pathname === "/client/profile") {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.href = "/client/login";
            return null;
        }

        return <Profile />;
    }

  return (
    <>
      <Navbar />

      <main>

        {/* =========================
            HERO SECTION
        ========================= */}

        <section className="hero" id="home">
          <div className="hero-container">

            {/* Left Content */}
            <div className="hero-content">

              <div className="hero-badge">
                <span className="badge-dot"></span>
                Building Digital Solutions
              </div>

              <h1>
                Technology that
                <span>moves your business</span>
                forward.
              </h1>

              <p className="hero-description">
                IgnishunTech helps businesses transform ideas into
                scalable digital products, intelligent solutions and
                modern technology experiences.
              </p>

              <div className="hero-buttons">

                <a href="#contact" className="hero-primary">
                  Start a Project
                  <span>→</span>
                </a>

                <a href="#services" className="hero-secondary">
                  Explore Services
                </a>

              </div>

              <div className="hero-trust">
                <span>✓</span>
                Built for modern businesses
              </div>

            </div>


            {/* =========================
                RIGHT HERO VISUAL
            ========================= */}

            <div className="hero-visual">

              <div className="visual-glow"></div>

              <div className="dashboard-card">

                {/* Dashboard Header */}
                <div className="dashboard-header">

                  <div>
                    <span className="dashboard-label">
                      DIGITAL SOLUTIONS
                    </span>

                    <h3>IgnishunTech</h3>
                  </div>

                  <div className="status">
                    <span></span>
                    Live
                  </div>

                </div>


                {/* Metrics */}
                <div className="dashboard-main">

                  <div className="metric-card">
                    <span>Projects</span>
                    <strong>24+</strong>
                    <small>Solutions delivered</small>
                  </div>

                  <div className="metric-card">
                    <span>Technology</span>
                    <strong>15+</strong>
                    <small>Modern technologies</small>
                  </div>

                </div>


                {/* Progress */}
                <div className="progress-section">

                  <div className="progress-title">
                    <span>Digital Growth</span>
                    <span>86%</span>
                  </div>

                  <div className="progress-bar">
                    <div></div>
                  </div>

                </div>


                {/* Technology Tags */}
                <div className="technology-row">

                  <span>AI</span>
                  <span>WEB</span>
                  <span>DATA</span>
                  <span>CLOUD</span>

                </div>

              </div>


              {/* =========================
                  FLOATING CARD 1
              ========================= */}

              <div className="floating-card floating-card-one">

                <span className="floating-icon">
                  ✦
                </span>

                <div>
                  <strong>Smart Solutions</strong>
                  <small>Built for scale</small>
                </div>

              </div>


              {/* =========================
                  FLOATING CARD 2
              ========================= */}

              <div className="floating-card floating-card-two">

                <span className="floating-check">
                  ✓
                </span>

                <div>
                  <strong>Project Ready</strong>
                  <small>Let's build together</small>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =========================
            SERVICES SECTION
        ========================= */}

        <section className="services-section" id="services">
            <div className="services-container">

                <div className="services-heading">
                <p className="section-label">WHAT WE DO</p>

                <h2>
                    Technology solutions
                    <span>built around your needs.</span>
                </h2>

                <p>
                    From digital products to intelligent systems, we help businesses
                    turn technology challenges into practical solutions.
                </p>
                </div>


                <div className="services-grid">

                <div className="service-card">
                    <div className="service-icon">⌘</div>

                    <h3>Web Development</h3>

                    <p>
                    Modern, responsive websites and web applications designed
                    for performance, usability and growth.
                    </p>

                    <a href="#contact">
                    Learn More <span>→</span>
                    </a>
                </div>


                <div className="service-card">
                    <div className="service-icon">✦</div>

                    <h3>AI & Machine Learning</h3>

                    <p>
                    Intelligent solutions using AI and machine learning to
                    automate processes and support better decisions.
                    </p>

                    <a href="#contact">
                    Learn More <span>→</span>
                    </a>
                </div>


                <div className="service-card">
                    <div className="service-icon">▦</div>

                    <h3>Data & Analytics</h3>

                    <p>
                    Transform business data into useful insights through
                    analytics, visualization and data-driven solutions.
                    </p>

                    <a href="#contact">
                    Learn More <span>→</span>
                    </a>
                </div>


                <div className="service-card">
                    <div className="service-icon">☁</div>

                    <h3>Cloud Solutions</h3>

                    <p>
                    Scalable cloud-based solutions that help businesses
                    improve flexibility, reliability and accessibility.
                    </p>

                    <a href="#contact">
                    Learn More <span>→</span>
                    </a>
                </div>


                <div className="service-card">
                    <div className="service-icon">⚡</div>

                    <h3>Automation & Integration</h3>

                    <p>
                    Connect tools, APIs and workflows to reduce repetitive
                    work and create more efficient business processes.
                    </p>

                    <a href="#contact">
                    Learn More <span>→</span>
                    </a>
                </div>


                <div className="service-card">
                    <div className="service-icon">◈</div>

                    <h3>Custom Software</h3>

                    <p>
                    Purpose-built software solutions designed around your
                    organization's specific requirements and workflows.
                    </p>

                    <a href="#contact">
                    Learn More <span>→</span>
                    </a>
                </div>

                </div>

            </div>
            </section>


        {/* =========================
            PROJECTS SECTION
        ========================= */}

        <section className="projects-section" id="projects">
        <div className="projects-container">

            <div className="projects-heading">
            <div>
                <p className="section-label">OUR WORK</p>

                <h2>
                Solutions we've
                <span>built with purpose.</span>
                </h2>
            </div>

            <p>
                Explore selected digital solutions and technology projects
                developed with a focus on real-world problems, usability and
                scalable implementation.
            </p>
            </div>


            <div className="projects-grid">

            {/* Project 1 */}
            <article className="project-card">

                <div className="project-image project-image-one">
                <div className="project-preview">
                    <div className="preview-top"></div>

                    <div className="preview-content">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div className="preview-chart">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    </div>
                </div>
                </div>

                <div className="project-content">

                <div className="project-category">
                    AI / MACHINE LEARNING
                </div>

                <h3>
                    Intelligent Data Solution
                </h3>

                <p>
                    An AI-driven solution designed to transform data into
                    meaningful insights and support smarter decision-making.
                </p>

                <div className="project-tech">
                    <span>Python</span>
                    <span>AI</span>
                    <span>Data</span>
                </div>

                <a href="#contact" className="project-link">
                    View Project
                    <span>→</span>
                </a>

                </div>

            </article>


            {/* Project 2 */}
            <article className="project-card">

                <div className="project-image project-image-two">
                <div className="web-preview">

                    <div className="web-nav">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div className="web-body">
                    <div></div>
                    <div></div>
                    </div>

                    <div className="web-cards">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                </div>
                </div>

                <div className="project-content">

                <div className="project-category">
                    WEB DEVELOPMENT
                </div>

                <h3>
                    Business Web Platform
                </h3>

                <p>
                    A modern web platform focused on creating a smooth,
                    responsive and scalable digital experience.
                </p>

                <div className="project-tech">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>API</span>
                </div>

                <a href="#contact" className="project-link">
                    View Project
                    <span>→</span>
                </a>

                </div>

            </article>


            {/* Project 3 */}
            <article className="project-card">

                <div className="project-image project-image-three">
                <div className="automation-preview">

                    <div className="automation-node">
                    INPUT
                    </div>

                    <div className="automation-line"></div>

                    <div className="automation-node main-node">
                    PROCESS
                    </div>

                    <div className="automation-line"></div>

                    <div className="automation-node">
                    OUTPUT
                    </div>

                </div>
                </div>

                <div className="project-content">

                <div className="project-category">
                    AUTOMATION
                </div>

                <h3>
                    Workflow Automation
                </h3>

                <p>
                    A connected workflow solution designed to reduce repetitive
                    tasks and improve operational efficiency.
                </p>

                <div className="project-tech">
                    <span>APIs</span>
                    <span>Automation</span>
                    <span>Integration</span>
                </div>

                <a href="#contact" className="project-link">
                    View Project
                    <span>→</span>
                </a>

                </div>

            </article>

            </div>


            <div className="projects-cta">
            <a href="#contact">
                Have a project in mind?
                <span>Let's talk →</span>
            </a>
            </div>

        </div>
        </section>

        {/* =========================
            WHY IGNISHUNTECH
        ========================= */}

        <section className="why-section">
            <div className="why-container">

                <div className="why-heading">
                <p className="section-label">WHY IGNISHUNTECH</p>

                <h2>
                    Technology with a
                    <span>clear purpose.</span>
                </h2>

                <p>
                    We focus on understanding the problem first, then choosing
                    the right technology to build a practical and scalable solution.
                </p>
                </div>


                <div className="why-grid">

                <div className="why-card">
                    <div className="why-number">01</div>

                    <div className="why-icon">◎</div>

                    <h3>Business-Focused</h3>

                    <p>
                    We build around real business requirements instead of
                    adding technology without a clear purpose.
                    </p>
                </div>


                <div className="why-card">
                    <div className="why-number">02</div>

                    <div className="why-icon">✦</div>

                    <h3>Modern Technology</h3>

                    <p>
                    We use relevant technologies and development practices
                    to create reliable and maintainable digital solutions.
                    </p>
                </div>


                <div className="why-card">
                    <div className="why-number">03</div>

                    <div className="why-icon">↗</div>

                    <h3>Built to Scale</h3>

                    <p>
                    Solutions are designed with future growth, changing
                    requirements and long-term usability in mind.
                    </p>
                </div>


                <div className="why-card">
                    <div className="why-number">04</div>

                    <div className="why-icon">◌</div>

                    <h3>Clear Communication</h3>

                    <p>
                    We keep project requirements, progress and deliverables
                    clear throughout the development process.
                    </p>
                </div>

                </div>

            </div>
        </section>

        {/* =========================
            HOW WE WORK
        ========================= */}

        <section className="process-section">
            <div className="process-container">

                <div className="process-heading">
                <p className="section-label">HOW WE WORK</p>

                <h2>
                    From idea to
                    <span>real solution.</span>
                </h2>

                <p>
                    A clear and collaborative process that keeps every project
                    focused, transparent and moving forward.
                </p>
                </div>


                <div className="process-grid">

                <div className="process-step">
                    <div className="process-top">
                    <span className="process-number">01</span>
                    <div className="process-icon">⌕</div>
                    </div>

                    <h3>Discover</h3>

                    <p>
                    We understand your goals, requirements, challenges and
                    the problem you want to solve.
                    </p>
                </div>


                <div className="process-step">
                    <div className="process-top">
                    <span className="process-number">02</span>
                    <div className="process-icon">◇</div>
                    </div>

                    <h3>Plan</h3>

                    <p>
                    We define the solution, technology approach, project
                    scope and development roadmap.
                    </p>
                </div>


                <div className="process-step">
                    <div className="process-top">
                    <span className="process-number">03</span>
                    <div className="process-icon">⚙</div>
                    </div>

                    <h3>Build</h3>

                    <p>
                    Our team develops and tests the solution while keeping
                    quality, usability and performance in focus.
                    </p>
                </div>


                <div className="process-step">
                    <div className="process-top">
                    <span className="process-number">04</span>
                    <div className="process-icon">↗</div>
                    </div>

                    <h3>Launch</h3>

                    <p>
                    We deliver the final solution and help prepare it for
                    real-world use, deployment and future improvements.
                    </p>
                </div>

                </div>

            </div>
        </section>

        {/* =========================
            ABOUT IGNISHUNTECH
        ========================= */}

        <section className="about-section" id="about">
            <div className="about-container">

                <div className="about-visual">
                <div className="about-card">

                    <div className="about-card-top">
                    <span>IGNISHUNTECH</span>
                    <span className="about-status">●</span>
                    </div>

                    <div className="about-orbit">
                    <div className="orbit-ring orbit-ring-one"></div>
                    <div className="orbit-ring orbit-ring-two"></div>

                    <div className="orbit-center">
                        <span>I</span>
                    </div>

                    <div className="orbit-dot orbit-dot-one"></div>
                    <div className="orbit-dot orbit-dot-two"></div>
                    <div className="orbit-dot orbit-dot-three"></div>
                    </div>

                    <div className="about-tech-row">
                    <span>AI</span>
                    <span>WEB</span>
                    <span>DATA</span>
                    <span>CLOUD</span>
                    </div>

                </div>
                </div>


                <div className="about-content">

                <p className="section-label">ABOUT US</p>

                <h2>
                    We turn ideas into
                    <span>digital possibilities.</span>
                </h2>

                <p className="about-intro">
                    IgnishunTech is a technology-focused company built around
                    creating practical digital solutions for modern businesses.
                </p>

                <p>
                    We combine software development, artificial intelligence,
                    data and cloud technologies to design solutions that address
                    real business needs.
                </p>

                <p>
                    Our approach is simple: understand the problem, choose the
                    right technology and build a solution that can grow with the
                    business.
                </p>


                <div className="about-points">

                    <div className="about-point">
                    <span>✓</span>
                    <div>
                        <strong>Problem First</strong>
                        <small>Technology follows the actual business need.</small>
                    </div>
                    </div>

                    <div className="about-point">
                    <span>✓</span>
                    <div>
                        <strong>Practical Solutions</strong>
                        <small>Focused on usability, reliability and real-world value.</small>
                    </div>
                    </div>

                    <div className="about-point">
                    <span>✓</span>
                    <div>
                        <strong>Long-Term Thinking</strong>
                        <small>Built with future growth and improvements in mind.</small>
                    </div>
                    </div>

                </div>

                </div>

            </div>
        </section>


        {/* =========================
            ABOUT SECTION
        ========================= */}

        <section className="section" id="about">

          <p className="section-label">
            WHO WE ARE
          </p>

          <h2>
            About IgnishunTech
          </h2>

        </section>

        {/* =========================
            FINAL CTA
        ========================= */}

        <section className="cta-section">
            <div className="cta-container">

                <div className="cta-content">
                <p className="section-label">LET'S BUILD SOMETHING</p>

                <h2>
                    Have an idea?
                    <span>Let's turn it into reality.</span>
                </h2>

                <p>
                    Tell us what you're trying to build, improve or automate.
                    We'll help you explore the right technology approach.
                </p>

                <div className="cta-buttons">
                    <a href="#contact" className="cta-primary">
                    Start a Project
                    <span>→</span>
                    </a>

                    <a href="#contact" className="cta-secondary">
                    Talk to Us
                    </a>
                </div>
                </div>

            </div>
        </section>


        {/* =========================
            CONTACT SECTION
        ========================= */}

        {/* =========================
            CONTACT SECTION
        ========================= */}

        <section className="contact-section" id="contact">
            <div className="contact-container">

                <div className="contact-info">

                <p className="section-label">GET IN TOUCH</p>

                <h2>
                    Let's talk about
                    <span>your project.</span>
                </h2>

                <p className="contact-description">
                    Have a project idea, business challenge or technology
                    requirement? Share the details with us and our team will
                    get back to you.
                </p>


                <div className="contact-details">

                    <div className="contact-detail">
                    <div className="contact-detail-icon">@</div>

                    <div>
                        <small>Email</small>
                        <strong>hello@ignishuntech.com</strong>
                    </div>
                    </div>


                    <div className="contact-detail">
                    <div className="contact-detail-icon">↗</div>

                    <div>
                        <small>Response</small>
                        <strong>We'll get back to you soon</strong>
                    </div>
                    </div>


                    <div className="contact-detail">
                    <div className="contact-detail-icon">⌁</div>

                    <div>
                        <small>Projects</small>
                        <strong>Web • AI • Data • Cloud</strong>
                    </div>
                    </div>

                </div>

                </div>


                <div className="contact-form-wrapper">

                <form className="contact-form">

                    <div className="form-row">

                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>

                        <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>

                        <input
                        type="email"
                        id="email"
                        placeholder="you@example.com"
                        />
                    </div>

                    </div>


                    <div className="form-row">

                    <div className="form-group">
                        <label htmlFor="company">Company</label>

                        <input
                        type="text"
                        id="company"
                        placeholder="Company name"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="service">Service</label>

                        <select id="service" defaultValue="">
                        <option value="" disabled>
                            Select a service
                        </option>

                        <option value="web">
                            Web Development
                        </option>

                        <option value="ai">
                            AI & Machine Learning
                        </option>

                        <option value="data">
                            Data & Analytics
                        </option>

                        <option value="cloud">
                            Cloud Solutions
                        </option>

                        <option value="automation">
                            Automation & Integration
                        </option>

                        <option value="software">
                            Custom Software
                        </option>
                        </select>

                    </div>

                    </div>


                    <div className="form-group">

                    <label htmlFor="message">
                        Project Details
                    </label>

                    <textarea
                        id="message"
                        rows="6"
                        placeholder="Tell us about your project, requirements or challenge..."
                    ></textarea>

                    </div>


                    <button type="submit" className="contact-submit">
                    Send Enquiry
                    <span>→</span>
                    </button>

                    <p className="form-note">
                    By submitting this form, you agree to be contacted
                    regarding your enquiry.
                    </p>

                </form>

                </div>

            </div>
        </section>

        {/* =========================
            FOOTER
        ========================= */}

        <footer className="footer">
            <div className="footer-container">

                <div className="footer-main">

                {/* Brand */}
                <div className="footer-brand">

                    <a href="#home" className="footer-logo">
                    <span className="footer-logo-icon">I</span>

                    <span>
                        Ignishun<span>Tech</span>
                    </span>
                    </a>

                    <p>
                    Building practical digital solutions through technology,
                    innovation and purposeful engineering.
                    </p>

                    <a
                    href="mailto:hello@ignishuntech.com"
                    className="footer-email"
                    >
                    hello@ignishuntech.com
                    </a>

                </div>


                {/* Company */}
                <div className="footer-column">

                    <h4>Company</h4>

                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>

                </div>


                {/* Services */}
                <div className="footer-column">

                    <h4>Services</h4>

                    <a href="#services">Web Development</a>
                    <a href="#services">AI & Machine Learning</a>
                    <a href="#services">Data & Analytics</a>
                    <a href="#services">Cloud Solutions</a>

                </div>


                {/* Client */}
                <div className="footer-column">

                    <h4>Client</h4>

                    <a href="#login">Client Login</a>
                    <a href="#contact">Start a Project</a>
                    <a href="#contact">Support</a>

                </div>

                </div>


                <div className="footer-bottom">

                <p>
                    © 2026 IgnishunTech. All rights reserved.
                </p>

                <div className="footer-bottom-links">
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Service</a>
                </div>

                </div>

            </div>
        </footer>

      </main>
    </>
  );
}

export default App;