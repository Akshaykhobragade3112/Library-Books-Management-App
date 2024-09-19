import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Optional: If you want custom styles for the navbar

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      {user ? (
        <div>
          <Link to="/">Home</Link>
          <Link to="/dashboard" style={{ marginLeft: '20px' }}>Dashboard</Link>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
