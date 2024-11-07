import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: ''
  });
  
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Store form data to display after submission
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Data Entry Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          </label>
          <br />
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
          <br />
          <label>
            City:
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </label>
          <br />
          <label>
            Province:
            <input type="text" name="province" value={formData.province} onChange={handleChange} />
          </label>
          <br />
          <label>
            Postal Code:
            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>

        {submittedData && (
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <h3>Entered Information:</h3>
            <p>Full Name: {submittedData.fullName}</p>
            <p>Address: {submittedData.address}</p>
            <p>City: {submittedData.city}</p>
            <p>Province: {submittedData.province}</p>
            <p>Postal Code: {submittedData.postalCode}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
