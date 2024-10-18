import React from 'react';

const HomePage = () => {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1995160630/de/foto/relaxed-afternoon-hangout-with-gen-z-friends-at-the-skate-park.jpg?s=2048x2048&w=is&k=20&c=n2mrW32ClG1dSwS-ZGLCLZ83DJkJ2ww3QnHwdETn4y8=')",
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
