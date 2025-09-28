import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_px55kd8',   // ⚡ Your EmailJS Service ID
        'template_xhnecee',  // ⚡ Your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        { publicKey: '_XYwcAiQi5ykX9cCH' } // ⚡ New syntax for public key
      )
      .then(
        () => {
          alert('✅ Thank you! Your message has been sent.');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          alert('❌ Oops! Something went wrong: ' + error.text);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#343a40] mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-[#d1e7dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#343a40] mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-[#d1e7dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[#343a40] mb-1">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-[#d1e7dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
        >
          <option value="">Select a subject</option>
          <option value="Custom Order">Custom Order</option>
          <option value="Product Inquiry">Product Inquiry</option>
          <option value="Delivery Question">Delivery Question</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#343a40] mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-[#d1e7dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
        ></textarea>
      </div>
      <Button primary className="w-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
