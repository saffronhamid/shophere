import React, { useContext } from 'react';
import './ProductCard.css';
import { CartContext } from '../context/CartContext'; // Import the CartContext
import { WishlistContext } from '../context/WishlistContext'; // Import the WishlistContext


const MenSummerProduct = () => {
  const { addToCart } = useContext(CartContext); // Use Cart Context
  const { addToWishlist } = useContext(WishlistContext); // Use Wishlist Context
  const products = [
    { 
      id: 1, 
      name: 'Winter Jacket', 
      price: 120, 
      image: 'https://media.istockphoto.com/id/929654528/photo/wintery-scene-of-a-man-with-furry-and-full-beard-shivering-in-a-snow-storm.webp?a=1&b=1&s=612x612&w=0&k=20&c=UsNUwEDjD0IUP2TkxUkZ8YNsiahwvDDMUGKv1UXtJso='
    },
    { 
      id: 2, 
      name: 'Thermal Sweater', 
      price: 80, 
      image: 'https://plus.unsplash.com/premium_photo-1701108112679-ee16096d84d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyJTIwZnVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D'
    },
  ];
  
  return (
    <div className="product-list">
      <h2>Men's Summer Collection</h2>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenSummerProduct;
