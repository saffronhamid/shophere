import React from 'react';
import './ProductPage.css'; // Reuse or create a new CSS for product display

const MenSummerProducts = () => {
  const products = [
    { id: 1, name: 'Summer T-Shirt', price: '$25', image: 'https://example.com/summer-tshirt.jpg' },
    { id: 2, name: 'Casual Shorts', price: '$30', image: 'https://example.com/casual-shorts.jpg' },
    // Add more products here
  ];

  return (
    <div className="product-container">
      <h2>Men's Summer Collection</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenSummerProducts;
