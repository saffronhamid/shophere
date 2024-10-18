import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      {/* Cart Items Section */}
      <div className="cart-items-section">
        <h2>My Shopping Bag ({cartItems.length} Items)</h2>
        
        {/* Loop through cartItems and display each one */}
        <ul className="cart-items-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
            </li>
          ))}
        </ul>

        <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
      </div>

      {/* Price Details Section */}
      <div className="price-details-section">
        <h3>Price Details</h3>
        <div className="price-summary">
          <p>Bag Total: <span>${totalPrice.toFixed(2)}</span></p>
          <p>Discount: <span>$0.00</span></p>
          <p>Coupon Discount: <span>Apply Coupon</span></p>
          <p>Delivery Charges: <span>Free</span></p>
        </div>
        <h3>Total: <span>${totalPrice.toFixed(2)}</span></h3>

        <button 
          className="checkout-btn" 
          onClick={() => navigate('/address')}  
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartPage;
