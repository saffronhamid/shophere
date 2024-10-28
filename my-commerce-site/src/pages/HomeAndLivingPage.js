import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductModal from '../components/ProductModal';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState('all');

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const fetchHomeProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/category/home-living"); // Verify this URL
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching home-living products:", err); // Log the full error for debugging
        setError(err.message);
        setLoading(false);
      }
    };
  
    fetchHomeProducts();
  }, []);
  

  const getFilteredProducts = () => {
    if (filter === 'under50') return products.filter((product) => product.price < 50);
    if (filter === '50to100') return products.filter((product) => product.price >= 50 && product.price <= 100);
    if (filter === 'above100') return products.filter((product) => product.price > 100);
    return products;
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  return (
    <div className="fashion-container">
      <h1>Home & Living</h1>

      <div className="filter-container">
        <label htmlFor="price-filter">Filter by Price:</label>
        <select id="price-filter" value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-dropdown">
          <option value="all">All</option>
          <option value="under50">Under $50</option>
          <option value="50to100">$50 - $100</option>
          <option value="above100">Above $100</option>
        </select>
      </div>

      <ul className="product-list">
        {getFilteredProducts().map((product) => (
          <li key={product.id} className="fashion-section" onClick={() => setSelectedProduct(product)}>
            <img src={product.image} alt={product.title} className="fashion-image" />
            <h2 className="title">{product.title}</h2>
            <p className="description">
              {product.description.length > 60 ? `${product.description.substring(0, 60)}...` : product.description}
            </p>
            <p className="price">Price: ${product.price}</p>
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={() => addToCart(selectedProduct)}
          onAddToWishlist={() => addToWishlist(selectedProduct)}
        />
      )}
    </div>
  );
};

export default HomePage;
