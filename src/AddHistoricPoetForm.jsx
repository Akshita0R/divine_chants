import React, { useState } from 'react';
import './form.css'; // Ensure the CSS file is in the same directory or adjust the path accordingly

const AddHistoricPoetForm = () => {
  const [poet, setPoet] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handler for input change
  const handleInputChange = (event) => {
    setPoet(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (poet.trim() !== '') {
      setSuccessMessage('New historic poet added successfully!');
      setPoet(''); // Clear the input field
    } else {
      setSuccessMessage(''); // Clear message if no input
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">Add Historic Poet:</label>
        <input
          type="text"
          className="form-input"
          placeholder="Add historic poet"
          value={poet}
          onChange={handleInputChange}
        />
        <button type="submit" className="form-button">Submit</button>
        {/* Success message display directly below the input box */}
        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  );
};

export default AddHistoricPoetForm;
