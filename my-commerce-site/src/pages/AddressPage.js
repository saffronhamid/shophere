// src/pages/AddressPage.js
import React, { useState } from 'react';
import './AddressPage.css';  // Add custom styles here

const AddressPage = () => {
  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Address Submitted:', address);
    // You can add further logic for form submission or moving to the next step.
  };

  return (
    <div className="address-page">
      <h2>Enter Shipping Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="fullName" value={address.fullName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" value={address.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Street Address:</label>
          <input type="text" name="streetAddress" value={address.streetAddress} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input type="text" name="city" value={address.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>State:</label>
          <input type="text" name="state" value={address.state} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>ZIP Code:</label>
          <input type="text" name="zipCode" value={address.zipCode} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input type="text" name="country" value={address.country} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn">Submit Address</button>
      </form>
    </div>
  );
};

export default AddressPage;
