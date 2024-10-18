import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';

const ProductDetailPage = ({ product }) => {
  const { addToWishlist } = useContext(WishlistContext);

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <button onClick={handleAddToWishlist}>Add to Wishlist</button>
    </div>
  );
};

export default ProductDetailPage;
