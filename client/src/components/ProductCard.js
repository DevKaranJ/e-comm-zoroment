import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
            </Link>
        </div>
    );
}

export default ProductCard;