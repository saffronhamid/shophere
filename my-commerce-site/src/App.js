import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import KidsPage from './pages/KidsPage';
import HomeAndLivingPage from './pages/HomeAndLivingPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import WishlistPage from './pages/WishlistPage';
import BeautyPage from './pages/BeautyPage'; // Import BeautyPage
import StudioPage from './pages/StudioPage'; // Import StudioPage
import ProductModal from './components/ProductModal';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

import './styles/global.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/men" element={<MenPage onProductClick={handleProductClick} />} />
              <Route path="/women" element={<WomenPage onProductClick={handleProductClick} />} />
              <Route path="/kids" element={<KidsPage onProductClick={handleProductClick} />} />
              <Route path="/home-living" element={<HomeAndLivingPage onProductClick={handleProductClick} />} />
              <Route path="/beauty" element={<BeautyPage onProductClick={handleProductClick} />} /> {/* Beauty Route */}
              <Route path="/studio" element={<StudioPage onProductClick={handleProductClick} />} /> {/* Studio Route */}
              <Route path="/products" element={<ProductPage onProductClick={handleProductClick} />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
            </Routes>
          </div>
          <Footer />

          {/* Product Modal */}
          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={closeModal}
              onAddToCart={(product) => console.log('Add to Cart:', product)}
              onAddToWishlist={(product) => console.log('Add to Wishlist:', product)}
            />
          )}
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
