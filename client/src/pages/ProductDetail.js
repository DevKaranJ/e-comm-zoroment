import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from '../services/mockData';
import { useCart } from '../context/CartContext';

function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); // Initial quantity set to 1

    useEffect(() => {
        const foundProduct = mockProducts.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    const increaseQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        // Pass the quantity along with the product details
        addToCart({ ...product, quantity });
    };

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>

            {/* Quantity Selection */}
            <div className="quantity-selector">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
            </div>

            <button onClick={handleAddToCart}>Add {quantity} to Cart</button>
        </div>
    );
}

export default ProductDetail;
