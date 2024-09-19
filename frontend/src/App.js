import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AddBook from './pages/AddBook';
import RemoveBook from './pages/RemoveBook';
import IssueBook from './pages/IssueBook';
import ViewBooks from './pages/ViewBooks';
import './App.css';

function App() {
  const [user, setUser] = useState(null);  // Track logged-in user

  return (
    <Router>
      <div className="App">
        <Navbar user={user} /> {/* Navbar shown conditionally */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/remove-book" element={<RemoveBook />} />
          <Route path="/issue-book" element={<IssueBook />} />
          <Route path="/view-books" element={<ViewBooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
