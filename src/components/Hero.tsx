import React from 'react';
import Button from './ui/Button';
const Hero = () => {
  return <section id="home" className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
        <div className="bg-hero h-dvh w-full">
          <video autoPlay muted loop playsInline className='h-dvh w-full object-cover'>
            <source src="/assets/videos/bg-hero1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-[black]/70"></div>
        </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="md:w-3/5 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-tight mb-4">
            Where every <span className="italic text-[#d4af37]">Flower</span> {' '}
            whispers love, and every <span className="italic text-[#d4af37]">Gift</span> tells a story.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            Exquisite floral arrangements and enchanting 3D crystal balls — designed to bring elegance, joy, and meaning to life’s most cherished moments in Cebu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#products" primary>
              Explore Collection
            </Button>
            <Button href="#contact">Contact Us</Button>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#f8d7da]/20 rounded-full -mr-32 -mb-32 blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#d1e7dd]/30 rounded-full blur-2xl"></div>
    </section>;
};
export default Hero;