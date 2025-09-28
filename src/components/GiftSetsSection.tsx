import React from 'react'
import { GiftIcon } from 'lucide-react'
import Button from './ui/Button'

const GiftSetsSection = () => {
  const giftSets = [
    {
      name: 'Classic Bloom Set',
      price: 899,
      description: 'A fresh bouquet with a touch of elegance.',
      features: [
        '1 Handcrafted bouquet',
        'Seasonal fresh flowers',
        'Free delivery',
      ],
      buttonText: 'Order Classic Bloom',
    },
    {
      name: 'Bloom + Crystal Gift',
      price: 1399,
      description: 'Our bestseller — flowers with a crystal ball keepsake.',
      features: [
        '1 Premium bouquet',
        'Crystal ball (1 included)',
        'Personalized message card',
        'Gift packaging',
      ],
      buttonText: 'Order Bloom + Crystal',
      highlighted: true,
    },
    {
      name: 'Grand Celebration Set',
      price: 2499,
      description: 'The ultimate gift for life’s biggest moments.',
      features: [
        '2 Luxury bouquets',
        '2 Crystal balls',
        'VIP delivery',
        'Special gift wrapping',
      ],
      buttonText: 'Order Grand Celebration',
    },
  ]

  return (
    <section id="gift-sets" className="py-20 bg-[#f9f5f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GiftIcon className="mx-auto text-[#d4af37] mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl font-serif text-[#343a40] mb-4">
            One-Time Gift Sets
          </h2>
          <p className="text-lg text-[#5a6268] max-w-2xl mx-auto">
            Perfect for birthdays, anniversaries, and special surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {giftSets.map((set) => (
            <div
              key={set.name}
              className={`rounded-lg overflow-hidden border transition-all duration-300 ${set.highlighted ? 'border-[#d4af37] shadow-lg transform md:-translate-y-4' : 'border-[#f8d7da] hover:shadow-md'}`}
            >
              <div className="p-8 h-full flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-2xl font-serif text-[#343a40] mb-2">
                    {set.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-medium text-[#d4af37]">
                      ₱{set.price}
                    </span>
                  </div>
                  <p className="text-[#5a6268] mb-6">{set.description}</p>
                  <ul className="space-y-3 mb-8">
                    {set.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="mr-2 text-[#d4af37]">✔</span>
                        <span className="text-[#5a6268]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  primary={set.highlighted}
                  className="w-full justify-center"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {set.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GiftSetsSection
