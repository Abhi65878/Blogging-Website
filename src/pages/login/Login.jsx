import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      // Mock login delay
      setLoading(false);

      setUser(true); //
      navigate("/");

      alert("Logged in!");
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="Img\unnamed.png" alt="Logo" className="logo" />
        <h2 className="login-">Welcome back</h2>
        <p className="login-">Please enter your details to sign in.</p>

        <div className="social-login">
          <button className="social-button apple">
            <i class="fa-brands fa-apple"></i>
          </button>
          <button className="social-button google">
            <i class="fa-brands fa-google"></i>
          </button>
          <button className="social-button twitter">
            <i class="fa-brands fa-twitter"></i>
          </button>
        </div>

        <div className="divider">
          <span className="login-">OR</span>
        </div>

        <form onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}

          <label className="login-">Email Address</label>
          <input
            className="login-col"
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="login-">Password</label>
          <div className="password-container">
            <input
              className="login-col"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" className="login-" /> Remember me
            </label>
            <a href="/forgot-password" className="login-">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Loading..." : "Sign in"}
          </button>
          <p className="login-">
            Don't have an account? <a href="/register">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
