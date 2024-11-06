import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        // Check if the product already exists in the cart
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            // If product exists, update the quantity
            setCart(cart.map(item => 
                item.id === product.id
                    ? { ...item, quantity: item.quantity + product.quantity } // Add the new quantity
                    : item
            ));
        } else {
            // If product doesn't exist, add it with the selected quantity
            setCart([...cart, product]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
