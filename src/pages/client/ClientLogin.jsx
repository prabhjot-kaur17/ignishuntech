import { useState } from "react";

const basePath = import.meta.env.BASE_URL;

function ClientLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (!formData.email || !formData.password) {
      setMessage("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://ignishuntech-backend.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed.");
        return;
      }

      setMessage("Login successful!");

      console.log("Logged in user:", data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      console.log("JWT token:", data.token);

      window.location.href = `${import.meta.env.BASE_URL}client/dashboard`;

    } catch (error) {
      console.error("Login error:", error);

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
              Welcome back.
              <span>Let's keep building.</span>
            </h1>

            <p>
              Access your projects, enquiries, documents and
              communication from one secure client workspace.
            </p>

          </div>

          <div className="auth-features">

            <div>
              <span>✓</span>
              <p>Track project progress</p>
            </div>

            <div>
              <span>✓</span>
              <p>Manage project documents</p>
            </div>

            <div>
              <span>✓</span>
              <p>Stay connected with our team</p>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="auth-form-wrapper">

          <div className="auth-form-header">

            <p className="section-label">
              CLIENT LOGIN
            </p>

            <h2>Sign in to your account</h2>

            <p>
              Enter your credentials to continue.
            </p>

          </div>


          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">

              <label htmlFor="login-email">
                Email Address
              </label>

              <input
                type="email"
                id="login-email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />

            </div>


            <div className="form-group">

              <div className="password-label">

                <label htmlFor="login-password">
                  Password
                </label>

                <a href = {`${basePath}client/forgot-password`}>
                  Forgot password?
                </a>

              </div>

              <input
                type="password"
                id="login-password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />

            </div>


            <div className="remember-row">

              <label className="remember-me">

                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />

                <span>
                  Remember me
                </span>

              </label>

            </div>


            {message && (
              <p className="auth-message">
                {message}
              </p>
            )}


            <button
              type="submit"
              className="auth-submit"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}

              {!loading && <span>→</span>}
            </button>

          </form>


          <div className="auth-divider">
            <span>New to IgnishunTech?</span>
          </div>


          <a
            href={`${basePath}client/register`}
            className="auth-register"
          >
            Create a Client Account
          </a>


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

export default ClientLogin;