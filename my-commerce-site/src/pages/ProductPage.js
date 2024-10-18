import React from 'react';
import './ProductPage.css';

const ProductPage = ({ title, products }) => {
  return (
    <div className="product-container">
      <h1>{title}</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
