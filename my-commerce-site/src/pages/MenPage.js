import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenPage.css'; // Create CSS file for MenPage-specific styles

const MenPage = () => {
  const navigate = useNavigate();

  return (
    <div className="fashion-container">
      <div className="fashion-section winter" onClick={() => navigate('/men/winter')}>
        <h2>Winter Fashion</h2>
        <img
          src="https://media.istockphoto.com/id/1292401710/de/foto/gl%C3%BCcklicher-junger-afrikanischer-mann-in-sonnenbrille-und-warmer-winterbekleidung-genie%C3%9Fen.jpg?s=2048x2048&w=is&k=20&c=jlj7qtucXlqWpH-9-Qqc1HrEV0DoJ-fHYH293_B51i4="
          alt="Winter Fashion"
          className="fashion-image"
        />
      </div>
      <div className="fashion-section summer" onClick={() => navigate('/men/summer')}>
        <h2>Summer Fashion</h2>
        <img
          src="https://media.istockphoto.com/id/1347495819/de/foto/mann-mit-sonnenbrille-auf-gelb.jpg?s=2048x2048&w=is&k=20&c=vTFDD5wgPzcQxurXCSbDAad-ExJrO_5uhHjCGVlAXYc="
          alt="Summer Fashion"
          className="fashion-image"
        />
      </div>
    </div>
  );
};

export default MenPage;
