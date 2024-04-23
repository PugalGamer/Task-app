import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3003/api/users/login",
        {
          username,
          password,
        }
      );

      console.log(response.data?.userddetails);
      localStorage.setItem("username", response.data?.userddetails);
      // localStorage.setItem("token", response.data.token);
      console.log("success");
      if (response.data?.userddetails == "admin") {
        navigate("/admin");
      } else {
        alert("Login Success");
        navigate("/ListView"); // Redirect to the dashboard after successful login
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="contain">
      <div className="box">
        <div className="login">
          <div className="loginBx">
            <h2>Login</h2>
            <input
              type="text"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input type="submit" value="Login" onClick={handleLogin} />
            <div className="group">
              <p>
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
