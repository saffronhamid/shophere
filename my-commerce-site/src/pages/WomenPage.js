import React from 'react';
import './WomenPage.css';

const WomenPage = () => {
  return (
    <div className="season-page-container">
      <div className="winter-section">
        <h2>Winter Fashion</h2>
        <img
          src="https://media.istockphoto.com/id/1061226004/photo/photo-of-young-beautiful-happy-smiling-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=jrn8HJMuVKajqOIuHIR2UgthcjdT3_j_Vg_-mS_ZEHg="  // Update with appropriate image
          alt="Winter Fashion"
          className="season-image"
        />
      </div>
      <div className="summer-section">
        <h2>Summer Fashion</h2>
        <img
          src="https://media.istockphoto.com/id/2153355411/photo/golden-hour-greeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=DKvuaO8eSvw0tXUtdCJaVyGf2Llq17Xdo1TisdWENYg="  // Update with appropriate image
          alt="Summer Fashion"
          className="season-image"
        />
      </div>
    </div>
  );
};

export default WomenPage;
