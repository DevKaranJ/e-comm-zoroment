import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../services/mockData';

function ProductListing() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setProducts(mockProducts);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return <div className="loading">Loading products...</div>;
    }

    return (
        <div className="product-listing">
            <h1>Our Products</h1>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductListing;