import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the dashboard CSS

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome To Library Dashboard - {user ? user.username : 'Guest'} 😊</h1>
      <div className="button-grid">
        <button onClick={() => navigate('/add-book')} className="dashboard-button">Add Books</button>
        <button onClick={() => navigate('/remove-book')} className="dashboard-button">Remove Books</button>
        <button onClick={() => navigate('/issue-book')} className="dashboard-button">Issued Books</button>
        <button onClick={() => navigate('/view-books')} className="dashboard-button">View All Books</button>
      </div>
    </div>
  );
};

export default Dashboard;
