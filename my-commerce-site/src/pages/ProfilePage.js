import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  
  // State for the form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Toggle between login and register forms
  const toggleForm = () => setIsLogin(!isLogin);

  // Handle form submission for registration or login
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Simulate login by checking if user is already registered
      if (userInfo && userInfo.username === username && userInfo.password === password) {
        alert('Login successful!');
      } else {
        alert('Incorrect username or password');
      }
    } else {
      // Register the user
      setUserInfo({ username, password });
      alert('Registration successful!');
    }
  };

  return (
    <div className="profile-page-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button className="toggle-btn" onClick={toggleForm}>
        {isLogin ? 'Need to Register?' : 'Already Registered? Login here'}
      </button>

      {/* Display user info after login or registration */}
      {userInfo && (
        <div className="user-info">
          <h3>User Info:</h3>
          <p>Username: {userInfo.username}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
