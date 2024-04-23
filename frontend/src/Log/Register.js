import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3003/api/users/register", {
        username,
        password,
      });

      // Redirect to the login page after successful registration
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  return (
    <div className="contain">
      <div className="box">
        <div className="login">
          <div className="loginBx">
            <h2>Registration</h2>
            <input
              type="text"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Register" onClick={handleRegister} />
            <div className="group">
              <p>
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
