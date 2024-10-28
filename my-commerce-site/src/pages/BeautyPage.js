import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductModal from '../components/ProductModal';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const BeautyPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const fetchBeautyProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/category/beauty"); // Update to correct endpoint
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching beauty products:", err);
        setError("Error loading beauty products: " + err.message);
        setLoading(false);
      }
    };

    fetchBeautyProducts();
  }, []);

  if (loading) return <div>Loading beauty products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-container">
      <h1>Beauty Products</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} onClick={() => setSelectedProduct(product)}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
          onAddToWishlist={addToWishlist}
        />
      )}
    </div>
  );
};

export default BeautyPage;
