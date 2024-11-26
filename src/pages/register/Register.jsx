import React, { useState } from "react";
import "./register.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [agree, setAgree] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Account created!");
    }, 2000);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 6) {
      setPasswordStrength("Weak");
    } else if (value.length < 10) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Strong");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <img src="Img\unnamed.png" alt="Logo" className="logo" />
        <h2 className="registerText">Create an account</h2>

        <form onSubmit={handleRegister}>
          {error && <p className="error-message">{error}</p>}

          <label className="registerText">User Name</label>
          <input
            className="registerText"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          {/* <label className="registerText">Last Name</label>
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          /> */}

          <label className="registerText">Email</label>
          <input
            className="registerText"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="registerText">Password</label>
          <div className="password-container">
            <input
              className="registerText"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <p className={`password-strength ${passwordStrength.toLowerCase()}`}>
            {passwordStrength}
          </p>

          <label className="registerText">Confirm Password</label>
          <input
            className="registerText"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <label className="terms">
            <input
              className="registerText"
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              required
            />
            <p className="registerTermsCondition">
              I agree to the <a href="/terms">Terms & Conditions</a>
            </p>
            {/* <span className={`checkmark ${agree ? "checked" : ""}`}></span> */}
          </label>

          <button
            type="submit"
            className="register-button"
            disabled={loading || !agree}
          >
            {loading ? "Creating..." : "Create account"}
          </button>
          <p className="registerText">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </form>

        <div className="social-login">
          <p className="registerText">Or register with</p>
          <button className="social-button google">
            <i class="fa-brands fa-google"></i>
          </button>
          <button className="social-button apple">
            <i class="fa-brands fa-apple"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
