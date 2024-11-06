const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Define the getFeaturedProducts function
exports.getFeaturedProducts = async (req, res) => {
    try {
        // Replace 'isFeatured' with the actual field in your Product schema that indicates a featured product
        const featuredProducts = await Product.find({ isFeatured: true });
        res.json(featuredProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
