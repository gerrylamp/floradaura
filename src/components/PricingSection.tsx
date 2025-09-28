import React from 'react'
import { CheckIcon } from 'lucide-react'
import Button from './ui/Button'
const PricingSection = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: 29.99,
      period: 'per month',
      description: 'Perfect for occasional flower lovers',
      features: [
        'One bouquet per month',
        'Seasonal flowers selection',
        'Free delivery',
        'Email support',
      ],
      buttonText: 'Choose Basic',
      highlighted: false,
    },
    {
      name: 'Premium',
      price: 59.99,
      period: 'per month',
      description: 'Our most popular subscription plan',
      features: [
        'Two bouquets per month',
        'Premium flowers selection',
        'Free delivery',
        'Crystal ball gift (quarterly)',
        'Priority email & phone support',
      ],
      buttonText: 'Choose Premium',
      highlighted: true,
    },
    {
      name: 'Deluxe',
      price: 99.99,
      period: 'per month',
      description: 'The ultimate floral experience',
      features: [
        'Four bouquets per month',
        'Luxury flowers selection',
        'Free priority delivery',
        'Monthly crystal ball',
        'Personal floral consultant',
        'Exclusive workshops & events',
      ],
      buttonText: 'Choose Deluxe',
      highlighted: false,
    },
  ]
  return (
    <section id="pricing" className="py-20 bg-[#f9f5f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#343a40] mb-4">
            Subscription Plans
          </h2>
          <p className="text-lg text-[#5a6268] max-w-2xl mx-auto">
            Experience the magic of fresh flowers and crystal art with our
            flexible subscription options
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg overflow-hidden border transition-all duration-300 ${plan.highlighted ? 'border-[#d4af37] shadow-lg transform md:-translate-y-4' : 'border-[#f8d7da] hover:shadow-md'}`}
            >
              <div
                className={`p-8 h-full flex flex-col justify-between ${plan.highlighted ? 'bg-[#f8d7da]/20' : 'bg-white'}`}
              >
                <div>
                    <h3 className="text-2xl font-serif text-[#343a40] mb-2">
                    {plan.name}
                    </h3>
                    <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-medium text-[#d4af37]">
                        ${plan.price}
                    </span>
                    <span className="ml-1 text-[#5a6268]">{plan.period}</span>
                    </div>
                    <p className="text-[#5a6268] mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                        <CheckIcon
                            size={18}
                            className="mr-2 text-[#d4af37] flex-shrink-0 mt-1"
                        />
                        <span className="text-[#5a6268]">{feature}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                <Button
                  primary={plan.highlighted}
                  className="w-full justify-center"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-[#5a6268] mb-4">
            All plans include a 14-day satisfaction guarantee
          </p>
          <a
            href="#contact"
            className="inline-block text-[#d4af37] hover:underline"
          >
            Have questions? Contact us for details
          </a>
        </div>
      </div>
    </section>
  )
}
export default PricingSection
