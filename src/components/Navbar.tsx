import React, { useState } from 'react';
import Logo from './Logo';
import { MenuIcon, XIcon } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#f8d7da]/30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        <Logo />
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <HashLink smooth to="/#home" className="text-[#343a40] hover:text-[#d4af37] transition-colors">
            Home
          </HashLink>
          <HashLink smooth to="/#products" className="text-[#343a40] hover:text-[#d4af37] transition-colors">
            Shop
          </HashLink>
          <HashLink smooth to="/#reviews" className="text-[#343a40] hover:text-[#d4af37] transition-colors">
            Reviews
          </HashLink>
          <HashLink smooth to="/#about" className="text-[#343a40] hover:text-[#d4af37] transition-colors">
            About
          </HashLink>
          <HashLink smooth to="/#gift-sets" className="text-[#343a40] hover:text-[#d4af37] transition-colors">
            Gift Sets
          </HashLink>
          <HashLink smooth to="/#contact" className="text-[#343a40] hover:text-[#d4af37] transition-colors">
            Contact
          </HashLink>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#343a40]">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden py-4 px-4 bg-white border-t border-[#f8d7da]/30">
          <div className="flex flex-col space-y-4">
            <HashLink smooth to="/#home" className="text-[#343a40] hover:text-[#d4af37] transition-colors" onClick={toggleMenu}>
              Home
            </HashLink>
            <HashLink smooth to="/#products" className="text-[#343a40] hover:text-[#d4af37] transition-colors" onClick={toggleMenu}>
              Shop
            </HashLink>
            <HashLink smooth to="/#reviews" className="text-[#343a40] hover:text-[#d4af37] transition-colors" onClick={toggleMenu}>
              Reviews
            </HashLink>
            <HashLink smooth to="/#about" className="text-[#343a40] hover:text-[#d4af37] transition-colors" onClick={toggleMenu}>
              About
            </HashLink>
            <HashLink smooth to="/#gift-sets" className="text-[#343a40] hover:text-[#d4af37] transition-colors" onClick={toggleMenu}>
              Gift Sets
            </HashLink>
            <HashLink smooth to="/#contact" className="text-[#343a40] hover:text-[#d4af37] transition-colors" onClick={toggleMenu}>
              Contact
            </HashLink>
          </div>
        </div>}
    </nav>;
};
export default Navbar;