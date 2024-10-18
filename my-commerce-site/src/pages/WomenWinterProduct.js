import React from 'react';
import './ProductPage.css'; // Reuse or create a new CSS for product display

const MenWinterProducts = () => {
  const products = [
    { id: 1, name: 'Winter Jacket', price: '$120', image: 'https://example.com/winter-jacket.jpg' },
    { id: 2, name: 'Thermal Sweater', price: '$80', image: 'https://example.com/thermal-sweater.jpg' },
    // Add more products here
  ];

  return (
    <div className="product-container">
      <h2>Men's Winter Collection</h2>
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

export default MenWinterProducts;
