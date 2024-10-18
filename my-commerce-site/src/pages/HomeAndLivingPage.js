import React from 'react';
import './HomeAndLivingPage.css'; // Create CSS file for HomeLivingPage-specific styles

const HomeLivingPage = () => {
  return (
    <div className="home-living-container">
      <div className="home-section interior">
        <h2>Interior</h2>
        <img
          src="https://plus.unsplash.com/premium_photo-1678447489180-34bace05ab6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWUlMjBkZWNvciUyMGludGVyaW9yfGVufDB8fDB8fHww"
          alt="Interior"
          className="home-image"
        />
      </div>
      <div className="home-section exterior">
        <h2>Exterior</h2>
        <img
          src="https://media.istockphoto.com/id/1677035251/photo/modern-luxurious-villa-balcony-with-green-garden-in-pine-forest.webp?a=1&b=1&s=612x612&w=0&k=20&c=Tc1FUlKkdNsKXPno7ioeqP2vMDj_k8FSfA3hPFge9Ls="
          alt="Exterior"
          className="home-image"
        />
      </div>
      <div className="home-section decor">
        <h2>Decor</h2>
        <img
          src="https://plus.unsplash.com/premium_photo-1669385170571-43397a00fcbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGRlY29yJTIwY2hyaXN0bWFzfGVufDB8fDB8fHww"
          alt="Decor"
          className="home-image"
        />
      </div>
    </div>
  );
};

export default HomeLivingPage;
