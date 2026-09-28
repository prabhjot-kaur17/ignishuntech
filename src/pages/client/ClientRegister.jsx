import { useState } from "react";

function ClientRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Registration failed.");
        return;
      }

      setMessage("Account created successfully!");

      setFormData({
        name: "",
        email: "",
        company: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Registration error:", error);
      setMessage(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-container">

        {/* LEFT SIDE */}
        <div className="auth-info">

          <a href="#home" className="auth-logo">
            <span className="auth-logo-icon">I</span>

            <span>
              Ignishun<span>Tech</span>
            </span>
          </a>

          <div className="auth-info-content">

            <p className="section-label">
              CLIENT PORTAL
            </p>

            <h1>
              Let's build
              <span>something great.</span>
            </h1>

            <p>
              Create your IgnishunTech client account and
              manage your projects, communication and
              documents from one secure workspace.
            </p>

          </div>

          <div className="auth-features">

            <div>
              <span>✓</span>
              <p>Manage your projects</p>
            </div>

            <div>
              <span>✓</span>
              <p>Access project documents</p>
            </div>

            <div>
              <span>✓</span>
              <p>Communicate with our team</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="auth-form-wrapper">

          <div className="auth-form-header">

            <p className="section-label">
              CREATE ACCOUNT
            </p>

            <h2>Create your client account</h2>

            <p>
              Enter your details to get started.
            </p>

          </div>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            {/* FULL NAME */}
            <div className="form-group">

              <label htmlFor="register-name">
                Full Name
              </label>

              <input
                type="text"
                id="register-name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
              />

            </div>

            {/* EMAIL */}
            <div className="form-group">

              <label htmlFor="register-email">
                Email Address
              </label>

              <input
                type="email"
                id="register-email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

            {/* COMPANY */}
            <div className="form-group">

              <label htmlFor="register-company">
                Company
              </label>

              <input
                type="text"
                id="register-company"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
              />

            </div>

            {/* PASSWORD */}
            <div className="form-group">

              <label htmlFor="register-password">
                Password
              </label>

              <input
                type="password"
                id="register-password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />

            </div>

            {/* CONFIRM PASSWORD */}
            <div className="form-group">

              <label htmlFor="register-confirm-password">
                Confirm Password
              </label>

              <input
                type="password"
                id="register-confirm-password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

            </div>

            {/* MESSAGE */}
            {message && (
              <p className="auth-message">
                {message}
              </p>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              className="auth-submit"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
              {!loading && <span>→</span>}
            </button>

          </form>

          {/* LOGIN LINK */}
          <div className="auth-divider">
            <span>Already have an account?</span>
          </div>

          <a
            href="/client/login"
            className="auth-register"
          >
            Sign In
          </a>

          {/* BACK */}
          <a
            href="/"
            className="back-home"
          >
            ← Back to website
          </a>

        </div>

      </div>
    </main>
  );
}

export default ClientRegister;