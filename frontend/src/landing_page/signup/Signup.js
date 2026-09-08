import React, { useState } from "react";
import { Link } from "react-router-dom";

import API from "../api/api";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // =========================
    // VALIDATION
    // =========================

    if (!formData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!formData.password) {
      setError("Please enter your password.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      // =========================
      // SIGNUP API
      // =========================

      const res = await API.post("/auth/signup", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      console.log("Signup Response:", res.data);

      const token = res.data.token;

      console.log("TOKEN:", token);

      // =========================
      // SAVE TOKEN
      // =========================

      localStorage.setItem("token", token);

      console.log("FRONTEND TOKEN:", localStorage.getItem("token"));

      // =========================
      // SUCCESS MESSAGE
      // =========================

      setSuccess("Account created successfully! Redirecting...");

      // =========================
      // GET CURRENT THEME
      // =========================

      const theme = localStorage.getItem("theme") || "light";

      // =========================
      // REDIRECT TO DASHBOARD
      // =========================

      setTimeout(() => {
        window.location.href = `https://tradenest-dashboard-f19e.onrender.com/?token=${token}&theme=${theme}`;
      }, 1200);
    } catch (err) {
      console.log("Signup Error:", err);

      setError(
        err.response?.data?.message || "Signup failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="signup-page">
      <div className="signup-card">
        {/* =========================
            LOGO
        ========================= */}

        <div className="signup-logo">
          <img src="https://zerodha.com/static/images/logo.svg" alt="Zerodha" />
        </div>

        {/* =========================
            HEADING
        ========================= */}

        <h1>Create your account</h1>

        <p className="signup-subtitle">
          Start your investing journey with a simple and secure account.
        </p>

        {/* =========================
            ERROR MESSAGE
        ========================= */}

        {error && <div className="signup-message error-message">{error}</div>}

        {/* =========================
            SUCCESS MESSAGE
        ========================= */}

        {success && (
          <div className="signup-message success-message">{success}</div>
        )}

        {/* =========================
            SIGNUP FORM
        ========================= */}

        <form onSubmit={handleSubmit}>
          {/* FULL NAME */}

          <div className="signup-field">
            <label htmlFor="fullName">Full Name</label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* EMAIL */}

          <div className="signup-field">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* PASSWORD */}

          <div className="signup-field">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* BUTTON */}

          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* =========================
            LOGIN
        ========================= */}

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        {/* =========================
            TERMS
        ========================= */}

        <p className="terms-text">
          By creating an account, you agree to our{" "}
          <a href="#terms">Terms & Conditions</a>.
        </p>
      </div>
    </section>
  );
}

export default Signup;
