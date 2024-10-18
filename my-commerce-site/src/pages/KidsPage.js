import React from 'react';
import './KidsPage.css';

const KidsPage = () => {
  return (
    <div className="season-page-container">
      <div className="winter-section">
        <h2>Winter Fashion</h2>
        <img
          src="https://plus.unsplash.com/premium_photo-1697183203082-1adbab812ea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMEtpZHMlMjB3aW50ZXJ8ZW58MHx8MHx8fDA%3D"  // Update with appropriate image
          alt="Winter Fashion"
          className="season-image"
        />
      </div>
      <div className="summer-section">
        <h2>Summer Fashion</h2>
        <img
          src="https://media.istockphoto.com/id/1488439606/photo/cute-little-boy-with-sunglasses-on-yellow-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=9LUL3B5zP4rhjZ9GEcycHj8P5hpW4MSh2IqOVLbPjeQ="  // Update with appropriate image
          alt="Summer Fashion"
          className="season-image"
        />
      </div>
    </div>
  );
};

export default KidsPage;
