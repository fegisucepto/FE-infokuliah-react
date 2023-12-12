// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.data.access_token;

        // Simpan token ke local storage
        localStorage.setItem('token', token);

        setLoginStatus('Login successful!');
        navigate('/'); // Redirect to home page upon successful login
      } else {
        const errorResponse = await response.text();
        console.error('Error logging in:', errorResponse);
        setLoginStatus('Error logging in. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setLoginStatus('Error logging in. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" value={email} onChange={handleUsernameChange} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
      </form>
      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
}
