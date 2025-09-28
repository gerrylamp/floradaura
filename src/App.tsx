import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import '/public/assets/css/style.css';
import PricingSection from './components/PricingSection';
import GiftSetsSection from './components/GiftSetsSection';
export function App() {
  return <div className="font-serif bg-gradient-to-b from-white to-[#f9f5f6] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProductsSection />
        <hr className='w-4/5 mx-auto' />
        <AboutSection />
        <ReviewsSection />
        {/* <BlogSection /> */}
        <GiftSetsSection />
        {/* <PricingSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>;
}