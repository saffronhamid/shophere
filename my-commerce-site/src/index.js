import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead of 'react-dom'
import './index.css';
import App from './App';
import { CartProvider } from './context/CartContext'; 
import { WishlistProvider } from './context/WishlistContext';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css'; // Import global styles


// Create the root element and use createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </BrowserRouter>
);
