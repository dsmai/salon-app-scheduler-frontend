import { Link, useNavigate } from "react-router-dom";
import React from "react";

const NavBar = ({ user, onLogout }) => {
  return (
    <nav>
      <Link className="underline p-2" to="/">
        Home
      </Link>
      <Link className="underline p-2" to="/services">
        Services
      </Link>
      <Link className="underline p-2" to="/add-service">Add service</Link>
      <Link  className="underline p-2" to="/professional">
        Professional
      </Link>
      {user ? (
        <em>{user} logged in</em>
      ) : (
        <Link className="underline p-2" to="/login">
          Login
        </Link>
      )}
      <button onClick={onLogout} className="underline p-2">
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
