import React, { useState } from 'react';
import { loginUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the new CSS for Login

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, password });
      setUser({ username });
      alert('Login successful');
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2> {/* Centered title at the top */}
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
