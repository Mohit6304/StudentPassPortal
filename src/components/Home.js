// src/components/Home.js
import React from 'react';
import './Home.css'; // Import your CSS for this component

function Home() {
  return (
    <div className="home-container">
      <div className="content-container">
      <h2>Welcome to StudentPassPro</h2>
      <p>Your one-stop solution for managing student bus passes.</p>
      <button className="action-button">Get Started</button>
    </div>
    </div>
  );
}

export default Home;
