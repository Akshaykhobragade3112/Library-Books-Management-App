import React, { useState } from 'react';
import { registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the new CSS for Signup

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ username, password });
      alert('Registration successful');
      navigate('/login');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2> {/* Centered title at the top */}
      <form onSubmit={handleSignup} className="signup-form">
        <input
          type="text"
          placeholder="New Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Signup;
