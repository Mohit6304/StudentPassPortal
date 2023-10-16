// src/components/Modify.js
import React, { useState } from 'react';
import './Modify.css'; // Import your CSS for this component

function Modify() {
  const [studentId, setStudentId] = useState('');
  const [changes, setChanges] = useState('');

  const handleModification = () => {
    // Add your modification logic here
    console.log(`Modification request for Student ID: ${studentId}, Changes: ${changes}`);
  };

  return (
    <div className="modify-container">
      <div className="content-container">
      <h2>Modify Bus Pass Details</h2>
      <p>Update your bus pass information as needed for a better commuting experience.</p>
      
      <form className="modify-form" onSubmit={handleModification}>
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
          <label htmlFor="changes">Changes:</label>
          <textarea
            id="changes"
            value={changes}
            onChange={(e) => setChanges(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="action-button">Apply Changes</button>
      </form>
    </div>
    </div>
  );
}

export default Modify;
