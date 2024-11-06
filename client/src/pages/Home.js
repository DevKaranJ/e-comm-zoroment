import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../services/api';

function Home() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true); // To handle loading state
    const [error, setError] = useState(null); // To handle errors

    useEffect(() => {
        const loadFeaturedProducts = async () => {
            try {
                const products = await getFeaturedProducts();
                // Ensure products is an array before setting state
                if (Array.isArray(products)) {
                    setFeaturedProducts(products);
                } else {
                    setFeaturedProducts([]); // Default to empty array if response is invalid
                }
            } catch (error) {
                setError(error.message); // Catch and set error
                setFeaturedProducts([]); // Ensure the state is an empty array on error
            } finally {
                setLoading(false); // Set loading to false once data is fetched
            }
        };
        loadFeaturedProducts();
    }, []);

    return (
        <div className="home">
            <section className="hero">
                <h1>Welcome to Our Store</h1>
                <p>Discover amazing products at great prices</p>
            </section>
            <section className="featured-products">
                <h2>Featured Products</h2>
                {loading ? (
                    <p>Loading products...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : featuredProducts.length === 0 ? (
                    <p>No featured products available</p>
                ) : (
                    <div className="product-grid">
                        {featuredProducts.map(product => (
                            <ProductCard key={product._id} product={product} /> // Ensure _id exists
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default Home;
