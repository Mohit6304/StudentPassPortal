// src/components/GeneralPass.js
import React from 'react';
import './GeneralPass.css'; // Import your CSS for this component

function GeneralPass() {
  return (
    <div className="general-pass-container">
      <div className="content-container">
      <h2>General Bus Pass Details</h2>
      <p>View information about your general bus pass for daily commuting convenience.</p>
      
      <div className="pass-details">
        <p><strong>Pass Type:</strong> General</p>
        <p><strong>Valid Until:</strong> 31st December 2023</p>
        <p><strong>Benefits:</strong> Access to all regular bus services, flexible commute options, and more.</p>
      </div>
      </div>
    </div>
  );
}

export default GeneralPass;
