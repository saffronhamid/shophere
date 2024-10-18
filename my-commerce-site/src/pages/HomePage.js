import React from 'react';

const HomePage = () => {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1649771544464-03bedb456a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <div
        className="welcome-text"
        style={{
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.6)',  // Stronger shadow for text block
        }}
      >
        <h1
          style={{
            fontSize: '4rem',  // Larger font size for better visibility
            fontWeight: 'bold',
            letterSpacing: '2px',
            color: '#fff',  // Pure white text color
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',  // Stronger text shadow for better contrast
          }}
        >
          Welcome to Saffron's Gallery
        </h1>
        <p
          style={{
            fontSize: '2rem',
            marginTop: '10px',
            letterSpacing: '1px',
            color: '#ddd',  // Slightly lighter subtext
            textShadow: '1px 1px 6px rgba(0, 0, 0, 0.8)',  // Subtle shadow for the subtext
          }}
        >
        </p>
      </div>
    </div>
  );
};

export default HomePage;
