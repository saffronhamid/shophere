// src/pages/WomenPage.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import products from '../data/products'; // Assuming product data is available
import './SeasonPage.css';  // Use the same CSS file

const WomenPage = () => {
  const { addToCart } = useContext(CartContext);

  // Filter products for Women
  const summerProducts = products.filter(product => product.category === 'Women' && product.season === 'Summer');
  const winterProducts = products.filter(product => product.category === 'Women' && product.season === 'Winter');

  return (
    <div className="season-page">
      {/* Winter Section */}
      <div
        className="winter-section"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517019381980-fd7b23a6f3b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fHd8fGVufDB8fHx8MTY3ODAxMjI4NQ&ixlib=rb-1.2.1&q=80&w=1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
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

      {/* Summer Section */}
      <div
        className="summer-section"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fHN1bW1lciUyMGZhc2hpb258ZW58MHx8fHwxNjE4NTYzODQ3&ixlib=rb-1.2.1&q=80&w=1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
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

export default WomenPage;
