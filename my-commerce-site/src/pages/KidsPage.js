import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductModal from '../components/ProductModal';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './KidsPage.css';  // Optional: use the same CSS as MenPage/WomenPage or create a new one

const KidsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState('all'); // Filter state

  // Access addToCart and addToWishlist from context
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const fetchKidsProducts = async () => {
      try {
        // Using "jewelery" category as a placeholder for kids' items
        const response = await axios.get("https://fakestoreapi.com/products/category/jewelery");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchKidsProducts();
  }, []);

  // Filter products based on the selected filter
  const getFilteredProducts = () => {
    if (filter === 'under50') {
      return products.filter((product) => product.price < 50);
    } else if (filter === '50to100') {
      return products.filter((product) => product.price >= 50 && product.price <= 100);
    } else if (filter === 'above100') {
      return products.filter((product) => product.price > 100);
    }
    return products; // No filter applied, show all
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  return (
    <div className="fashion-container">
      <h1>Kids' Products</h1>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <label htmlFor="price-filter">Filter by Price:</label>
        <select
          id="price-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-dropdown"
        >
          <option value="all">All</option>
          <option value="under50">Under $50</option>
          <option value="50to100">$50 - $100</option>
          <option value="above100">Above $100</option>
        </select>
      </div>

      {/* Filtered Product List */}
      <ul className="product-list">
        {getFilteredProducts().map((product) => (
          <li key={product.id} className="fashion-section" onClick={() => setSelectedProduct(product)}>
            <img src={product.image} alt={product.title} className="fashion-image" />
            <h2 className="title">{product.title}</h2>
            <p className="description">
              {product.description.length > 60
                ? `${product.description.substring(0, 60)}...`
                : product.description}
            </p>
            <p className="price">Price: ${product.price}</p>
          </li>
        ))}
      </ul>

      {/* Product Modal */}
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

export default KidsPage;
