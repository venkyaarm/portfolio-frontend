import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import "../styles/Login.css";

export default function Register({ goLogin, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const register = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onSuccess();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="card">
        <h2>Register</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <span
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <span
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button onClick={register}>Create Account</button>

        <div className="link">
          Already have an account?{" "}
          <span className="register-link" onClick={goLogin}>
            Login
          </span>
        </div>
      </div>
    </div>
  );
}
