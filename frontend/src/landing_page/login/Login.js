import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // =========================
    // VALIDATION
    // =========================

    if (!email.trim() || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      // =========================
      // LOGIN API
      // =========================

      const res = await API.post("/auth/login", {
        email,
        password,
      });

      console.log("Login Response:", res.data);

      const token = res.data.token;

      // =========================
      // SAVE TOKEN
      // =========================

      localStorage.setItem("token", token);

      console.log(
        "LOGIN TOKEN:",
        localStorage.getItem("token")
      );

      // =========================
      // GET CURRENT THEME
      // =========================

      const theme =
        localStorage.getItem("theme") || "light";

      // =========================
      // OPEN DASHBOARD
      // TOKEN + THEME
      // =========================

      window.location.href =
        `http://localhost:3001/?token=${token}&theme=${theme}`;

    } catch (err) {
      console.log("Login Error:", err);

      setError(
        err.response?.data?.message ||
          "Login failed. Please check your email and password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-page">
      <div className="login-card">

        {/* =========================
            LOGO
        ========================= */}

        <Link to="/" className="login-logo">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha"
          />
        </Link>

        {/* =========================
            TITLE
        ========================= */}

        <h1>Welcome back</h1>

        <p className="login-subtitle">
          Login to continue to your account
        </p>

        {/* =========================
            ERROR
        ========================= */}

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        {/* =========================
            LOGIN FORM
        ========================= */}

        <form onSubmit={handleSubmit}>

          {/* EMAIL */}

          <div className="login-field">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          {/* PASSWORD */}

          <div className="login-field">

            <div className="password-label">

              <label htmlFor="password">
                Password
              </label>

              <a href="#forgot-password">
                Forgot password?
              </a>

            </div>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </div>

          {/* LOGIN BUTTON */}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>

        {/* =========================
            DIVIDER
        ========================= */}

        <div className="login-divider">
          <span>or</span>
        </div>

        {/* =========================
            GOOGLE LOGIN
        ========================= */}

        <button
          type="button"
          className="google-login"
          onClick={() =>
            setError(
              // "Google login will be added later."
            )
          }
        >
          <span>G</span>
          Continue with Google
        </button>

        {/* =========================
            SIGNUP
        ========================= */}

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup">
            Create an account
          </Link>
        </p>

        {/* =========================
            TERMS
        ========================= */}

        <p className="login-terms">
          By continuing, you agree to our{" "}
          <a href="#terms">
            Terms & Conditions
          </a>
          .
        </p>

      </div>
    </section>
  );
}

export default Login;