import React, { useState } from 'react';
import './form.css'; // Ensure the CSS file is in the same directory or adjust the path accordingly

const AddLiteratureTypeForm = () => {
  const [literatureType, setLiteratureType] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handler for input change
  const handleInputChange = (event) => {
    setLiteratureType(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (literatureType.trim() !== '') {
      setSuccessMessage('New literature type added successfully!');
      setLiteratureType(''); // Clear the input field
    } else {
      setSuccessMessage(''); // Clear message if no input
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">Add Literature Type:</label>
        <input
          type="text"
          className="form-input"
          placeholder="Add literature type"
          value={literatureType}
          onChange={handleInputChange}
        />
        <button type="submit" className="form-button">Submit</button>
        {/* Success message display directly below the input box */}
        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  );
};

export default AddLiteratureTypeForm;
