import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import './WishlistPage.css';  // Import the CSS file

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="page-container">
      <h2>Wishlist</h2>
      <div className="page-items">
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty</p>
        ) : (
          wishlistItems.map((item) => (
            <div className="page-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="page-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div className="page-actions">
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                  <button className="remove-btn" onClick={() => removeFromWishlist(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
