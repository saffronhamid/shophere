// ProductModal.js

import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose, onAddToCart, onAddToWishlist }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>Close</button>
                <h2 className="modal-product-title">{product.title}</h2>
                <img src={product.image} alt={product.title} className="modal-product-image" />
                <p className="modal-product-description">{product.description}</p>
                <p className="modal-product-price">Price: ${product.price}</p>
                <div className="modal-actions">
                    <button className="modal-button add-to-cart" onClick={() => onAddToCart(product)}>
                        Add to Cart
                    </button>
                    <button className="modal-button add-to-wishlist" onClick={() => onAddToWishlist(product)}>
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
