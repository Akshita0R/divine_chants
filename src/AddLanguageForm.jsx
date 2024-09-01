import React, { useState } from 'react';
import './form.css'; // Ensure the CSS file is in the same directory or adjust the path accordingly

const AddLanguageForm = () => {
  const [language, setLanguage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handler for input change
  const handleInputChange = (event) => {
    setLanguage(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (language.trim() !== '') {
      setSuccessMessage('New language added successfully!');
      setLanguage(''); // Clear the input field
    } else {
      setSuccessMessage(''); // Clear message if no input
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">Add Language:</label>
        <input
          type="text"
          className="form-input"
          placeholder="Add language"
          value={language}
          onChange={handleInputChange}
        />
        <button type="submit" className="form-button">Submit</button>
        {/* Success message display directly below the input box */}
        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  );
};

export default AddLanguageForm;
