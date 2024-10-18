import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      <button className="add-to-wishlist-btn" onClick={() => addToWishlist(product)}>
        Add to Wishlist
      </button>
    </div>
  );
};

export default ProductCard;
