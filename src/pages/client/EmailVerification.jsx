function EmailVerification() {
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
              EMAIL VERIFICATION
            </p>

            <h1>
              One more
              <span>step to get started.</span>
            </h1>

            <p>
              Verify your email address to secure your account
              and continue to your IgnishunTech client workspace.
            </p>

          </div>

          <div className="auth-features">

            <div>
              <span>✓</span>
              <p>Secure account verification</p>
            </div>

            <div>
              <span>✓</span>
              <p>Protect your account</p>
            </div>

            <div>
              <span>✓</span>
              <p>Access your client workspace</p>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="auth-form-wrapper">

          <div className="auth-form-header">

            <p className="section-label">
              VERIFY EMAIL
            </p>

            <h2>Check your inbox</h2>

            <p>
              We've sent a verification code to your email address.
              Enter the code below to continue.
            </p>

          </div>


          <form className="auth-form">

            <div className="form-group">

              <label htmlFor="verification-code">
                Verification Code
              </label>

              <input
                type="text"
                id="verification-code"
                placeholder="Enter verification code"
                maxLength="6"
              />

            </div>


            <button
              type="submit"
              className="auth-submit"
            >
              Verify Email
              <span>→</span>
            </button>

          </form>


          <div className="auth-divider">
            <span>Didn't receive the code?</span>
          </div>


          <a
            href="#resend"
            className="auth-register"
          >
            Resend Code
          </a>


          <a
            href="/client/login"
            className="back-home"
          >
            ← Back to Sign In
          </a>

        </div>

      </div>

    </main>
  );
}

export default EmailVerification;