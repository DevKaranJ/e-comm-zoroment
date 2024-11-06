import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentForm({ total }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name: '',
        upiId: ''
    });
    const [paymentMethod, setPaymentMethod] = useState('card'); // Default to Debit/Credit Card

    // Handle changes for form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Simulate autofill for Debit/Credit Card fields
    useEffect(() => {
        if (paymentMethod === 'card') {
            // Autofill Debit/Credit card fields
            setFormData({
                ...formData,
                cardNumber: '4111 1111 1111 1111', // Sample card number
                expiryDate: '12/24', // Sample expiry date
                cvv: '123', // Sample CVV
                name: 'Karan Joshi' // Sample cardholder name
            });
        } else if (paymentMethod === 'upi') {
            // Clear the card fields if UPI is selected
            setFormData({
                ...formData,
                cardNumber: '',
                expiryDate: '',
                cvv: '',
                name: '',
                upiId: ''
            });
        }
    }, [paymentMethod]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const success = Math.random() > 0.5; // Simulate success/failure
            navigate(`/payment-status?status=${success ? 'success' : 'failure'}`);
        } catch (error) {
            console.error('Payment processing error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="payment-form">
            <h2>Payment Details</h2>
            <p>Total Amount: ${total.toFixed(2)}</p>

            {/* Payment Method Selection */}
            <div className="form-group">
                <label>Payment Method</label>
                <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                >
                    <option value="card">Debit/Credit Card</option>
                    <option value="upi">UPI</option>
                </select>
            </div>

            {/* Show Debit/Credit Card details when selected */}
            {paymentMethod === 'card' && (
                <>
                    <div className="form-group">
                        <label>Card Number</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            maxLength="16"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Expiry Date</label>
                            <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                maxLength="5"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                placeholder="123"
                                maxLength="3"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Cardholder Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
                    </div>
                </>
            )}

            {/* Show UPI ID details when selected */}
            {paymentMethod === 'upi' && (
                <div className="form-group">
                    <label>UPI ID</label>
                    <input
                        type="text"
                        name="upiId"
                        value={formData.upiId}
                        onChange={handleChange}
                        placeholder="john.doe@upi"
                        required
                    />
                </div>
            )}

            <button type="submit" className="submit-button">
                Pay Now
            </button>
        </form>
    );
}

export default PaymentForm;
