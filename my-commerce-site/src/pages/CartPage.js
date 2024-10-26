import React from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css';  // Import the CSS file

const CartPage = () => {
  const { cartItems = [], removeFromCart } = useCart(); // Set a default empty array for cartItems to avoid undefined errors

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <div className="page-container">
      <h2>Shopping Cart</h2>
      <div className="page-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="page-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="page-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price.toFixed(2)}</p> {/* Ensures price has two decimal places */}
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
          <h3>Total: ${totalPrice.toFixed(2)}</h3> {/* Ensures total has two decimal places */}
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
