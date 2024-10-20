import React from 'react';
import './HomeAndLivingPage.css'; // Assuming you have a separate CSS file

const HomeAndLivingPage = () => {
    return (
        <div className="categories-section">
            <div className="category-card">
                <img src="https://plus.unsplash.com/premium_photo-1661778773089-8718bcedb39e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww" alt="Interior" />
                <h3>Interior</h3>
            </div>
            <div className="category-card">
                <img src="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGV4dGVyaW9yfGVufDB8fDB8fHww" alt="Exterior" />
                <h3>Exterior</h3>
            </div>
            <div className="category-card">
                <img src="https://media.istockphoto.com/id/1685138093/photo/happy-woman-moving-house-and-unrolling-a-carpet-while-unpacking.webp?a=1&b=1&s=612x612&w=0&k=20&c=1XZlbFmkcb2pdpA4fnvJsM_B7-ufYH_daTc_sqFtaY0=" alt="Decor" />
                <h3>Decor</h3>
            </div>
            
        </div>
        
    );
};

export default HomeAndLivingPage;
