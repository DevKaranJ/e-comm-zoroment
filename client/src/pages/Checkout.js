import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import PaymentForm from '../components/PaymentForm';

function Checkout() {
    const { cart } = useCart();
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleAddressAutofill = () => {
        // Autofill with a demo address
        setAddress('M8FC+JCW, DSIIDC COMPLEX, Jhilmil Industrial Area, Delhi, 110095');
    };

    const handlePaymentMethodAutofill = () => {
        // Autofill payment method with debit/credit
        setPaymentMethod('Debit/Credit Card');
    };

    if (cart.length === 0) {
        return (
            <div className="checkout-empty">
                <h2>Your cart is empty</h2>
                <p>Add some products to your cart to proceed with checkout</p>
            </div>
        );
    }

    return (
        <div className="checkout">
            <div className="checkout-items">
                <h2>Your Cart</h2>
                {cart.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
                <div className="cart-total">
                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            </div>

            <div className="checkout-address">
                <h3>Shipping Address</h3>
                <input 
                    type="text" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    placeholder="Enter your address"
                />
                <button onClick={handleAddressAutofill}>Autofill Address</button>
            </div>

            <div className="checkout-payment">
                <h3>Payment Method</h3>
                <select 
                    value={paymentMethod} 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                >
                    <option value="Debit/Credit Card">Debit/Credit Card</option>
                    <option value="COD">Cash on Delivery</option>
                    <option value="UPI">UPI</option>
                    <option value="Crypto">Crypto</option>
                </select>
            </div>

            <PaymentForm total={total} />
        </div>
    );
}

export default Checkout;
