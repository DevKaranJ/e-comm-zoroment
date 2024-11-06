exports.processPayment = async (req, res) => {
    try {
        // This is a mock payment processing function
        const { amount, cardDetails } = req.body;
        
        // Simulate payment processing delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate success/failure randomly
        const success = Math.random() > 0.2;
        
        if (success) {
            res.json({ 
                success: true, 
                message: 'Payment processed successfully',
                transactionId: Math.random().toString(36).substring(7)
            });
        } else {
            throw new Error('Payment processing failed');
        }
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: error.message 
        });
    }
};