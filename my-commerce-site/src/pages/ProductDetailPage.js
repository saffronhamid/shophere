// src/pages/ProductDetailPage.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import products from '../data/products';  // Assuming you have a products list
import '../pages/ButtonStyles.css';  // Ensure this is included if it's not already


const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-detail__info">
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>  {/* Use addToCart */}
      </div>
    </div>
  );
};

export default ProductDetailPage;
