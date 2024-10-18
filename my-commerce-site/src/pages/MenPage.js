// src/pages/MenPage.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import products from '../data/products';  // Assuming you have product data with seasonal info
import './SeasonPage.css';  // New CSS file for the two-column layout

const MenPage = () => {
  const { addToCart } = useContext(CartContext);

  // Filter products based on season
  const summerProducts = products.filter(product => product.category === 'Men' && product.season === 'Summer');
  const winterProducts = products.filter(product => product.category === 'Men' && product.season === 'Winter');

  return (
    <div className="season-page">
      {/* Left side - Winter */}
      <div className="winter-section">
        <h2>Winter Collection</h2>
        <ul>
          {winterProducts.map((product) => (
            <li key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side - Summer */}
      <div className="summer-section">
        <h2>Summer Collection</h2>
        <ul>
          {summerProducts.map((product) => (
            <li key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenPage;
