import React from 'react';
import Logo from './Logo';
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
const Footer = () => {
  return <footer className="bg-[#343a40] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo className="text-white mb-4" />
            <p className="text-[#f8f9fa]/80 text-sm mb-6">
              Creating moments of beauty and wonder with handcrafted flower bouquets and crystal artistry, proudly made in Cebu.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-[#f8f9fa]/80 hover:text-[#d4af37] transition-colors">
                <InstagramIcon size={20} />
              </a> */}
              <a href="https://www.facebook.com/profile.php?id=61571762714156" target='_blank' aria-label="Facebook" rel="noopener noreferrer" className="text-[#f8f9fa]/80 hover:text-[#d4af37] transition-colors">
                <FacebookIcon size={20} />
              </a>
              {/* <a href="#" className="text-[#f8f9fa]/80 hover:text-[#d4af37] transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-[#f8f9fa]/80 hover:text-[#d4af37] transition-colors">
                <YoutubeIcon size={20} />
              </a> */}
              <a href="https://www.tiktok.com/@blossom_bites8" target="_blank" aria-label="TikTok" rel="noopener noreferrer" className="text-[#f8f9fa]/80 hover:text-[#d4af37] transition-colors">
                <SiTiktok size={20} />
              </a>
            </div>
          </div>
          <div className='md:col-span-2'>
            <h3 className="text-lg font-medium mb-4 md:text-center">Quick Links</h3>
            <div className='flex md:flex-row flex-col justify-around'>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-[#f8f9fa]/80 hover:text-[#d4af37] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-[#f8f9fa]/80 hover:text-[#d4af37] transition-colors">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="text-[#f8f9fa]/80 hover:text-[#d4af37] transition-colors">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-[#f8f9fa]/80 hover:text-[#d4af37] transition-colors">
                    About
                  </a>
                </li>
              </ul>

              <ul className="space-y-2">
                <li>
                  <a href="#gift-sets" className="text-[#f8f9fa]/80 hover:text-[#d4af37] transition-colors">
                    Gift Sets
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[#f8f9fa]/80 hover:text-[#d4af37] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic text-[#f8f9fa]/80">
              <p>Cebu City, Philippines</p>
              <a href='tel: 0927 117 6792' className="mt-2">0927 117 6792</a>
              <br />
              <a href='mailto: cebu.floradaura@gmail.com'>cebu.floradaura@gmail.com</a>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#f8f9fa]/10 text-center text-[#f8f9fa]/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Flora d'Aura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;