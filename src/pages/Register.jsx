import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import "../styles/Login.css";

export default function Register({ goLogin, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    onSuccess();
  };

  return (
    <div className="auth-container">
      <div className="card">
        <h2>Register</h2>

        <input
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

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
