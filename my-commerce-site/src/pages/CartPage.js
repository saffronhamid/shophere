import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>My Cart</h2>
      {cartItems.length === 0 ? <p>Your cart is empty</p> : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
