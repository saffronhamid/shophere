import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';  // Import useCart
import './WishlistPage.css';

const WishlistPage = () => {
    const { wishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();  // Destructure addToCart from Cart context

    return (
        <div className="wishlist-container">
            <h1 className="wishlist-title">Wishlist</h1>
            <div className="wishlist-items">
                {wishlist.map((item) => (
                    <div key={item.id} className="wishlist-item">
                        <img src={item.image} alt={item.title} />
                        <h2 className="wishlist-item-title">{item.title}</h2>
                        <p className="wishlist-item-description">
                            {item.description.length > 80
                                ? `${item.description.substring(0, 80)}...`
                                : item.description}
                        </p>
                        <p className="wishlist-item-price">Price: ${item.price}</p>
                        <div className="wishlist-actions">
                            <button
                                className="wishlist-button add-to-cart"
                                onClick={() => addToCart(item)}  // Call addToCart when clicked
                            >
                                Add to Cart
                            </button>
                            <button
                                className="wishlist-button remove"
                                onClick={() => removeFromWishlist(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishlistPage;
