// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [updated, setUpdated] = useState(false);

  const fetchUserProfile = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch(`http://localhost:3002/profile`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data.data); // Set profile data to state
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }
  };

  const handleUpdateEmail = async () => {
    const token = localStorage.getItem('token');
    if (token && email) {
      try {
        const response = await fetch(`http://localhost:3002/update/email`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setUpdated(true);
        } else {
          console.error('Failed to update email');
        }
      } catch (error) {
        console.error('Error updating email:', error);
      }
    }
  };

  const handleUpdatePassword = async () => {
    const token = localStorage.getItem('token');
    if (token && password) {
      try {
        const response = await fetch(`http://localhost:3002/update/password`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password }),
        });

        if (response.ok) {
          setUpdated(true);
        } else {
          console.error('Failed to update password');
        }
      } catch (error) {
        console.error('Error updating password:', error);
      }
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="content">
        <h2>User Profile</h2>
        {userData ? (
          <div>
            <p>ID: {userData.id}</p>
            <p>Email: {userData.email}</p>
            {/* Include other properties from userData as needed */}

            <h3>Edit Email</h3>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleUpdateEmail}>Update Email</button>

            <h3>Edit Password</h3>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleUpdatePassword}>Update Password</button>

            {updated && <p>Profile updated successfully!</p>}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
