import React from 'react';
const AboutSection = () => {
  return <section id="about" className="py-20 bg-[#f9f5f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif text-[#343a40] mb-6">
              Our Story
            </h2>
            <p className="text-[#5a6268] mb-6">
              Founded with a passion for natural beauty and artistic expression,
              Flora d'Aura brings together two unique art forms: floral design
              and crystal craftsmanship.
            </p>
            <p className="text-[#5a6268] mb-6">
              Our journey began when our founder, an avid botanist and crystal
              enthusiast, sought to create pieces that capture both the
              ephemeral beauty of flowers and the timeless elegance of crystal.
            </p>
            <p className="text-[#5a6268] mb-6">
              Today, each Flora d'Aura creation is handcrafted with meticulous
              attention to detail, using only the finest materials. Our bouquets
              feature premium blooms sourced from sustainable growers, while our
              crystal balls are crafted by master artisans.
            </p>
            <p className="text-[#5a6268]">
              We believe in the power of beauty to transform spaces and elevate
              moments. Whether through a stunning bouquet or a mesmerizing
              crystal ball, our mission is to bring elegance, wonder, and a
              touch of magic into your life.
            </p>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1596438459194-f275f413d6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Artisan creating floral arrangements" className="w-full h-auto" />
            </div>
            <div className="absolute top-6 -right-6 w-64 h-64 bg-[#d1e7dd]/30 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-[#f8d7da]/30 rounded-full blur-xl -z-10"></div>
          </div>
        </div> */}
        {/* Values section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-[#f8d7da]/40 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌸</span>
            </div>
            <h3 className="text-xl font-serif text-[#343a40] mb-3">Artistry in Every Bouquet</h3>
            <p className="text-[#5a6268]">
              Each flower arrangement is designed as a unique work of art — blending creativity, elegance, and 
              meaning to capture life’s most cherished moments.
            </p>
          </div>

          <div className="p-6">
            <div className="w-16 h-16 bg-[#d1e7dd]/40 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-serif text-[#343a40] mb-3">Premium Quality</h3>
            <p className="text-[#5a6268]">
              From fresh flowers to 3D crystal gifts, we use only premium materials to ensure lasting beauty and 
              unforgettable surprises for birthdays, anniversaries, and weddings.
            </p>
          </div>

          <div className="p-6">
            <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔮</span>
            </div>
            <h3 className="text-xl font-serif text-[#343a40] mb-3">Innovative & Personal</h3>
            <p className="text-[#5a6268]">
              We bring innovation to traditional gifting with customizable bouquets and enchanting crystal ball keepsakes, 
              proudly crafted in Cebu for your most special occasions.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;