// src/components/Renew.js
import React, { useState } from 'react';
import './Renew.css'; // Import your CSS for this component

function Renew() {
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');

  const handleRenewal = () => {
    // Add your renewal logic here
    console.log(`Renewal request for Student ID: ${studentId}, Email: ${email}`);
  };

  return (
    <div className="renew-container">
      <div className="content-container">
      <h2>Renew Bus Pass</h2>
      <p>Renew your student bus pass for uninterrupted transportation services.</p>
      
      <form className="renew-form" onSubmit={handleRenewal}>
        <div className="form-group">
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="action-button">Renew Pass</button>
      </form>
    </div>
    </div>
  );
}

export default Renew;
