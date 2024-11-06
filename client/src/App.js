import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import PaymentStatus from './pages/PaymentStatus';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <div className="app">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<ProductListing />} />
                            <Route path="/product/:id" element={<ProductDetail />} /> {/* Dynamic Product Detail Route */}
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/payment-status" element={<PaymentStatus />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
