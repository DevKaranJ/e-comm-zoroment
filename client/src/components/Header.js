import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
    const { cart } = useCart();
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="header">
            <nav className="nav-container">
                <Link to="/" className="logo">
                    EShop
                </Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/checkout" className="cart-link">
                        Cart ({cartItemCount})
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;