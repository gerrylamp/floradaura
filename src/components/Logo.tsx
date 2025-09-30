import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Logo = ({
  className = ''
}) => {
  return <HashLink smooth to='/#' className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="text-[#d4af37] font-serif italic font-medium text-3xl relative z-10 flex items-center">
          <span className="mr-1">Flora d'</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#f8d7da]">
            Aura
          </span>
          <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-[#f8d7da]/40 to-transparent -top-1 -left-2 blur-md"></div>
        </div>
        <p className='uppercase text-xs text-[#d4af37]'>Flower and Personalized Gifts</p>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#f8d7da]/20 to-transparent blur-lg rounded-full"></div>
      </div>
    </HashLink>;
};
export default Logo;