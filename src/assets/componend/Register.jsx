// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../css/Register.css';

export default function Register ()  {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan proses registrasi di sini (misalnya dengan API, dll.)

    // Simulasi registrasi berhasil
    const isRegistered = true; // Ganti dengan logika registrasi yang sesungguhnya

    if (isRegistered) {
      setRegistrationStatus('Registration successful!');
      // Lakukan tindakan lain setelah registrasi berhasil di sini
    } else {
      setRegistrationStatus('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <button type="submit">Register</button>
      </form>
      {registrationStatus && <p>{registrationStatus}</p>}
    </div>
  );
}
