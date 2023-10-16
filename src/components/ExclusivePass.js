// src/components/ExclusivePass.js
import React from 'react';
import './ExclusivePass.css'; // Import your CSS for this component

function ExclusivePass() {
  return (
    <div className="exclusive-pass-container">
      <div className="content-container">
      <h2>Exclusive Bus Pass Details</h2>
      <p>Get details about your exclusive bus pass and enjoy a comfortable commute.</p>
      
      <div className="pass-details">
        <p><strong>Pass Type:</strong> Exclusive</p>
        <p><strong>Valid Until:</strong> 31st December 2023</p>
        <p><strong>Benefits:</strong> Priority boarding, comfortable seating, and more.</p>
      </div>
    </div>
    </div>
  );
}

export default ExclusivePass;
