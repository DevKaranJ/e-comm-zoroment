import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Your trusted online shopping destination</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: support@eshop.com</p>
                    <p>Phone: (555) 123-4567</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 EShop. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;