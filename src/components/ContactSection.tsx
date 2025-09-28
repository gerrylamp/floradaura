import React from 'react';
import ContactForm from './ui/ContactForm';
import { MapPinIcon, PhoneIcon, ClockIcon, MailIcon, FacebookIcon, InstagramIcon } from 'lucide-react';
import { SiTiktok } from 'react-icons/si'; // TikTok is not in lucide-react

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#343a40] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-[#5a6268] max-w-2xl mx-auto">
            Have questions or special requests? We'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-[#f9f5f6] rounded-lg p-8">
            <h3 className="text-2xl font-serif text-[#343a40] mb-6">
              Send Us a Message
            </h3>
            <ContactForm />
          </div>

          {/* Contact information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif text-[#343a40] mb-6">
                Our Studio
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-[#d4af37] mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#343a40] mb-1">Phone</h4>
                    <a href="tel:09271176792" className="text-[#5a6268]">
                      0927 117 6792
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="w-6 h-6 text-[#d4af37] mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#343a40] mb-1">Email</h4>
                    <a href="mailto:hello@floradaura.com" className="text-[#5a6268]">
                      hello@floradaura.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 text-[#d4af37] mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#343a40] mb-1">Hours</h4>
                    <p className="text-green-600">Always open online.</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-medium text-[#343a40] mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61571762714156"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5a6268] hover:text-[#d4af37] transition"
                  >
                    <FacebookIcon className="w-6 h-6" />
                  </a>
                  {/* <a
                    href="https://instagram.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5a6268] hover:text-[#d4af37] transition"
                  >
                    <InstagramIcon className="w-6 h-6" />
                  </a> */}
                  <a
                    href="https://www.tiktok.com/@blossom_bites8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5a6268] hover:text-[#d4af37] transition"
                  >
                    <SiTiktok className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
