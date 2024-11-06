import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function PaymentStatus() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { clearCart } = useCart();
    const status = searchParams.get('status');

    useEffect(() => {
        if (status === 'success') {
            clearCart();  // Clear cart after successful payment
        }

        const timer = setTimeout(() => {
            navigate('/');  // Redirect to home after 5 seconds
        }, 5000);

        return () => clearTimeout(timer);
    }, [status, navigate, clearCart]);

    return (
        <div className={`payment-status ${status}`}>
            {status === 'success' ? (
                <div className="success-message">
                    <h2>Payment Successful!</h2>
                    <p>Thank you for your purchase.</p>
                    <p>You will be redirected to the homepage shortly...</p>
                </div>
            ) : (
                <div className="failure-message">
                    <h2>Payment Failed</h2>
                    <p>Something went wrong with your payment.</p>
                    <p>Please try again or contact support.</p>
                </div>
            )}
        </div>
    );
}

export default PaymentStatus;
