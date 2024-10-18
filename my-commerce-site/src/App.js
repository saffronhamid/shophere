import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';  // Import the ProfilePage component
import MenPage from './pages/MenPage';  // Update with the correct casing
import WomenPage from './pages/WomenPage';  // Import WomenPage
import KidsPage from './pages/KidsPage';  // Import KidsPage
import HomeAndLivingPage from './pages/HomeAndLivingPage';
import ProductPage from './pages/ProductPage'; 
import MenWinterProduct from './pages/MenWinterProduct';
import MenSummerProduct from './pages/MenSummerProduct';
import ProductDetailPage from './pages/ProductDetailPage';
import { CartProvider } from './context/CartContext';  // Correct import for named export
import { WishlistProvider } from './context/WishlistContext'; // Import WishlistProvider

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/profile" element={<ProfilePage />} /> {/* Add Profile Page Route */}
              <Route path="/men" element={<MenPage />} />  {/* Add MenPage Route */}
              <Route path="/women" element={<WomenPage />} />  {/* Add WomenPage Route */}
              <Route path="/kids" element={<KidsPage />} />  {/* Add KidsPage Route */}
              <Route path="/home-living" element={<HomeAndLivingPage />} />
              <Route path="/Product-Page" element={<ProductPage />} />
              <Route path="/men/winter" element={<MenWinterProduct />} /> {/* Winter Men Products */}
              <Route path="/men/summer" element={<MenSummerProduct />} /> {/* Summer Men Products */}
              <Route path="/products" element={<ProductPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/men/winter" element={<MenWinterProduct />} />

            </Routes>
          </div>
          <Footer />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
