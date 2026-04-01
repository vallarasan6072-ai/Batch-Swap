import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";

function Login() {

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {

    if (!form.username || !form.password) {
      setMessage("❌ Please fill all fields");
      return;
    }

    axios.post("http://localhost:5000/api/auth/login", form)
      .then((res) => {

        // ✅ Save user
        localStorage.setItem("user", JSON.stringify(res.data));

        setMessage("✅ Login Successful");

        // 👉 ROLE BASED NAVIGATION
        if (res.data.role === "staff") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }

      })
      .catch(() => {
        setMessage("❌ Invalid Username or Password");
      });
  };

  return (
    <div className="login-container">

      <div className="card">

        <h2>Login</h2>

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

        <button onClick={handleLogin}>Login</button>

        <p>
          Don't have an account?{" "}
          <Link to="/signup">Signup</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;