import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductsPage.css';

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
