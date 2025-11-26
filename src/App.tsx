import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// ⭐ NEW PAGES
import { ServicesPage } from "./pages/ServicesPage";
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';

export default function App() {
  return (
    <Router>
      <div 
        className="min-h-screen bg-gradient-to-br from-[#f6efe9] via-white to-[#f6efe9]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(107, 122, 79, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(59, 47, 47, 0.05) 0%, transparent 50%)
          `,
        }}
      >
        <Nav />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* ⭐ NEW ROUTES */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        
        <Footer />
        
        <Toaster 
          position="top-right" 
          richColors 
          closeButton
          toastOptions={{
            style: {
              background: 'rgba(246, 239, 233, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            },
          }}
        />
      </div>
    </Router>
  );
}
