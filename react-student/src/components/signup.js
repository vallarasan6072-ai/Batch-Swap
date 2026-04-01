import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";

function Signup() {

  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "student"
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {

    if (!form.username || !form.password) {
      setMessage("❌ Fill all fields");
      return;
    }

    axios.post(" https://batch-swap.onrender.com/api/auth/signup", form)
      .then(() => {
        setMessage(" Signup Successful");

        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        setMessage(err.response?.data || "❌ Error");
      });
  };

  return (
    <div className="login-container">

      <div className="card">

        <h2>Signup</h2>

        {message && <div className="notification">{message}</div>}

        <input
          type="text"
          placeholder="Enter Username"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        {/*  ROLE SELECT */}
        <select
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        >
          <option value="student">Student</option>
          <option value="staff">Staff</option>
        </select>

        <button onClick={handleSignup}>Signup</button>

        <p>
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;