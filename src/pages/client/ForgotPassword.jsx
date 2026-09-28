function ForgotPassword() {
  return (
    <main className="auth-page">

      <div className="auth-container">

        {/* LEFT SIDE */}
        <div className="auth-info">

          <a href="/" className="auth-logo">
            <span className="auth-logo-icon">I</span>

            <span>
              Ignishun<span>Tech</span>
            </span>
          </a>

          <div className="auth-info-content">

            <p className="section-label">
              ACCOUNT RECOVERY
            </p>

            <h1>
              Get back
              <span>to your workspace.</span>
            </h1>

            <p>
              Don't worry. Enter your registered email address
              and we'll help you recover access to your client account.
            </p>

          </div>

          <div className="auth-features">

            <div>
              <span>✓</span>
              <p>Secure account recovery</p>
            </div>

            <div>
              <span>✓</span>
              <p>Identity verification</p>
            </div>

            <div>
              <span>✓</span>
              <p>Reset your password securely</p>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="auth-form-wrapper">

          <div className="auth-form-header">

            <p className="section-label">
              FORGOT PASSWORD
            </p>

            <h2>Reset your password</h2>

            <p>
              Enter the email address associated with your account.
            </p>

          </div>


          <form className="auth-form">

            <div className="form-group">

              <label htmlFor="forgot-email">
                Email Address
              </label>

              <input
                type="email"
                id="forgot-email"
                placeholder="you@example.com"
              />

            </div>


            <button
              type="submit"
              className="auth-submit"
            >
              Continue
              <span>→</span>
            </button>

          </form>


          <div className="auth-divider">
            <span>Remember your password?</span>
          </div>


          <a
            href="/client/login"
            className="auth-register"
          >
            Back to Sign In
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

export default ForgotPassword;