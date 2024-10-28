import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose, onAddToCart, onAddToWishlist }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon" onClick={onClose}>×</button>
        
        {/* Left: Image Section */}
        <div className="modal-image-section">
          <img src={product.image} alt={product.title} className="modal-image" />
        </div>

        {/* Right: Details Section */}
        <div className="modal-details-section">
          <h2 className="modal-title">{product.title}</h2>
          <p className="modal-category">Category: {product.category}</p>
          <p className="modal-price">Price: ${product.price}</p>

          {/* Optional multiple images */}
          <div className="image-options">
            {/* Replace these with actual image URLs if available */}
            {[product.image, product.image, product.image].map((img, index) => (
              <img key={index} src={img} alt={`Option ${index}`} className="image-option" />
            ))}
          </div>

          {/* Size Options */}
          <div className="size-options">
            {["XS", "S", "M", "L"].map(size => (
              <div key={size} className="size-option">{size}</div>
            ))}
          </div>

          {/* Buttons */}
          <div className="modal-buttons">
            <button className="modal-button add-to-cart" onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>
            <button className="modal-button favorite" onClick={() => onAddToWishlist(product)}>
              Favorite ♡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
