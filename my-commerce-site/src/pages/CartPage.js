import React from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css';  // Import the CSS file

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="page-container">
      <h2>Shopping Cart</h2>
      <div className="page-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="page-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="page-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.qty}</p>
                <div className="page-actions">
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="page-summary">
          <h3>Total: ${cartItems.reduce((total, item) => total + item.price * item.qty, 0)}</h3>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
