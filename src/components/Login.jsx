import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target; // name here is the name property of the <input/>
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(userData.username);
    setUserData({
        username: "",
        password: "",
      });
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>username: </label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleFormChange}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label>password: </label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleFormChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
