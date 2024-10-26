import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WomenPage.css';  // Import the CSS file


const WomenPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWomenProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/category/women\'s clothing');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWomenProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  return (
    <div>
      <h1>Women's Clothing</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WomenPage;
