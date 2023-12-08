// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../css/Login.css';

export default function Login  () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan proses autentikasi di sini (misalnya dengan API, dll.)

    // Simulasi login berhasil
    const isLoggedIn = true; // Ganti dengan logika autentikasi yang sesungguhnya

    if (isLoggedIn) {
      setLoginStatus('Login successful!');
      // Lakukan tindakan lain setelah login berhasil di sini
    } else {
      setLoginStatus('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
}
