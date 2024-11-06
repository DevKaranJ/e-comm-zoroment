const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: String,
    products: [{
        productId: String,
        quantity: Number,
        price: Number
    }],
    totalAmount: Number,
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema);