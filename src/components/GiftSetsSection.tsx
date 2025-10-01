import React from 'react'
import { GiftIcon } from 'lucide-react'
import Button from './ui/Button'

const GiftSetsSection = () => {
  const giftSets = [
    {
      name: 'Classic Bloom Bouquet',
      price: 899,
      description:
        'A timeless bouquet of fresh seasonal flowers, handcrafted to brighten birthdays, anniversaries, or simple “just because” moments.',
      features: [
        '1 Handcrafted bouquet with seasonal blooms',
        'Freshly arranged on the day of delivery',
        'Free same-day delivery within Cebu City',
        'Elegant wrapping with ribbon',
      ],
      buttonText: 'Send Classic Bloom',
    },
    {
      name: 'Bouquet + Crystal Keepsake',
      price: 1399,
      description:
        'Our best-selling gift set — a premium bouquet paired with a personalized 3D crystal ball keepsake for an unforgettable surprise.',
      features: [
        '1 Premium handcrafted bouquet',
        '1 - 3D crystal ball',
        'Custom message card included',
        'Luxury gift packaging',
        'Free same-day delivery in Cebu',
      ],
      buttonText: 'Gift Bouquet + Crystal',
      highlighted: true,
    },
    {
      name: 'Grand Celebration Bundle',
      price: 2499,
      description:
        'The ultimate gift set for weddings, proposals, and milestone celebrations — combining luxury flowers and crystals for a truly memorable moment.',
      features: [
        '2 Luxury handcrafted bouquets',
        '2 - 3D crystal balls',
        'Priority same-day delivery within Cebu',
        'Exclusive gift wrapping with premium box',
        'Free personalized message cards',
      ],
      buttonText: 'Celebrate Grandly',
    },
  ]


  return (
    <section id="gift-sets" className="py-20 bg-[#f9f5f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GiftIcon className="mx-auto text-[#d4af37] mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl font-serif text-[#343a40] mb-4">
            Curated Gift Sets for Every Occasion
          </h2>
          <p className="text-lg text-[#5a6268] max-w-2xl mx-auto">
            Thoughtfully designed flower bouquets and 3D crystal gifts — perfect for birthdays, anniversaries, romantic surprises, or simply showing you care in Cebu.
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
