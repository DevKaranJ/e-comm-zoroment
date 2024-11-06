import React from 'react';
import { useCart } from '../context/CartContext';

function CartItem({ item }) {
    const { removeFromCart } = useCart();

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button 
                onClick={() => removeFromCart(item.id)}
                className="remove-button"
            >
                Remove
            </button>
        </div>
    );
}

export default CartItem;