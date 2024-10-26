import React from 'react';
import { Link } from 'react-router-dom';

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
        flexDirection: 'column',
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
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.6)', 
        }}
      >
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
            color: '#fff',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
          }}
        >
          Welcome to Saffron's Gallery
        </h1>
      </div>

      {/* Navigation Links to Category Pages */}
      <div
        className="category-links"
        style={{
          display: 'flex',
          gap: '20px',
          marginTop: '40px',
        }}
      >
        <Link 
          to="/men"
          style={{
            padding: '15px 30px',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '10px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            transition: '0.3s',
          }}
        >
          Men
        </Link>
        <Link 
          to="/women"
          style={{
            padding: '15px 30px',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '10px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            transition: '0.3s',
          }}
        >
          Women
        </Link>
        <Link 
          to="/kids"
          style={{
            padding: '15px 30px',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '10px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            transition: '0.3s',
          }}
        >
          Kids
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
