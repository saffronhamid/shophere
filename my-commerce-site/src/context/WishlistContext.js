import React, { createContext, useState, useContext } from 'react';

// Create Wishlist context
export const WishlistContext = createContext();

// Wishlist Provider component
export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);  // Initialize as an empty array

    // Function to add product to wishlist
    const addToWishlist = (product) => {
        // Prevent adding duplicate products
        const exists = wishlist.some(item => item.id === product.id);
        if (!exists) {
            setWishlist([...wishlist, product]);
        }
    };

    // Function to remove product from wishlist
    const removeFromWishlist = (productId) => {
        setWishlist(wishlist.filter(item => item.id !== productId));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

// Custom hook to use Wishlist context
export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
};
