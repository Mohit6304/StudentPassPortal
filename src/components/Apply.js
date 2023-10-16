// src/components/Apply.js
import React, { useState } from 'react';
import './Apply.css'; // Import your CSS for this component

function Apply() {
  const [formData, setFormData] = useState({
    studentId: '',
    bonafideCertificate: null,
    passType: 'Exclusive',
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="apply-container">
      <div className="content-container">
      <h2>Apply for Bus Pass</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studentId">Student ID:</label>
          <input type="text" name="studentId" value={formData.studentId} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="bonafideCertificate">Bonafide Certificate:</label>
          <input type="file" name="bonafideCertificate" onChange={handleInputChange} required />
        </div>
        <div>
          <label>Pass Type:</label>
          <select name="passType" value={formData.passType} onChange={handleInputChange}>
            <option value="Exclusive">Exclusive</option>
            <option value="General">General</option>
          </select>
        </div>
        <button type="submit" className="action-button">Submit Application</button>
      </form>
      </div>
    </div>
  );
}

export default Apply;
