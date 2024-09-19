import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="home">
      <h1>Library Management App 📚</h1>
      <img src="/library-image.jpg" alt="Library" />
      <div>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>Signup</button></Link>
      </div>
    </div>
  );
};

export default Home;
