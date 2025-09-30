import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./ui/ProductCard";
import ProductDetailsModal from "./ui/ProductDetailsModal";
import Button from "./ui/Button";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductsSection = () => {
  const location = useLocation(); // gives current route
  const isProductsPage = location.pathname === "/products";

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: "all", name: "Products" },
    { id: "bouquets", name: "Bouquets" },
    { id: "crystals", name: "Crystal Balls" },
  ];

  const products = [
    {
      id: 1,
      name: "Eternal and Fresh (Mix)",
      description: "Seventeen roses symbolizing faith and sincerity — a heartfelt gesture that speaks of trust and devotion.",
      ideal: "Ideal for: Anniversaries, birthdays, or affirming commitment.",
      price: 1500,
      image: "/assets/images/flower1.jpg",
      category: "bouquets",
    },
    {
      id: 2,
      name: "Valentine’s Crystal Ball – Eternal Romance",
      description: "An enchanting crystal sphere capturing love in its purest form — a timeless keepsake of devotion and passion.",
      ideal: "Ideal for: Valentine’s Day, anniversaries, or romantic surprises.",
      price: 130,
      image: "/assets/images/crystalball-valentines.jpg",
      category: "crystals",
    },
    
    {
      id: 3,
      name: "Twilight Serenade (Mix)",
      description: "A luminous bouquet of seventeen roses, adorned with gentle fairy lights, capturing the magic of love under starlit skies.",
      ideal: 'Ideal for: Romantic evenings, surprises, or unforgettable declarations of love.',
      price: 1600,
      image: "/assets/images/flower2.jpg",
      category: "bouquets",
    },
    {
      id: 4,
      name: "Anniversary Crystal Ball – Timeless Bond",
      description: "A radiant crystal that reflects the beauty of years shared together, symbolizing commitment and everlasting love.",
      ideal: "Ideal for: Anniversaries, milestone celebrations, or vow renewals.",
      price: 130,
      image: "/assets/images/crystalball-anniversary.jpg",
      category: "crystals",
    },
    {
      id: 5,
      name: "Celestial Glow (Red Roses)",
      description: "A radiant arrangement of ten roses, signifying completeness and harmony. A perfect way to say “you are my universe.",
      ideal: "Ideal for: Anniversaries, birthdays, or heartfelt confessions.",
      price: 500,
      image: "/assets/images/flower3.jpg",
      category: "bouquets",
    },
    {
      id: 6,
      name: "Mystic Flower Crystal – Bloom of Infinity",
      description: "A mesmerizing bloom encased in crystal, signifying growth, renewal, and the magic of nature’s wonders.",
      ideal: "Ideal for: Nature lovers, birthdays, or unique home décor.",
      price: 130,
      image: "/assets/images/crystalball-flower.jpg",
      category: "crystals",
    },
    {
      id: 7,
      name: "Luna's Charm (Pink Roses)",
      description: "Five delicate roses symbolizing admiration, joy, and care, capturing the soft glow of moonlight in every petal.",
      ideal: "Ideal for: Celebrating milestones or showing appreciation to someone special.",
      price: 400,
      image: "/assets/images/flower5.jpg",
      category: "bouquets",
    },
    {
      id: 8,
      name: "Graduation Crystal Ball – Brilliance Ahead",
      description: "A shining crystal crafted to celebrate achievement, symbolizing knowledge, new beginnings, and bright futures.",
      ideal: "Ideal for: Graduations, promotions, or career milestones.",
      price: 130,
      image: "/assets/images/crystalball-graduation.jpg",
      category: "crystals",
    },
    {
      id: 9,
      name: "Celestial Glow (Pink Roses)",
      description: "A radiant arrangement of ten roses, signifying completeness and harmony. A perfect way to say “you are my universe.",
      ideal: "Ideal for: Anniversaries, birthdays, or heartfelt confessions.",
      price: 500,
      image: "/assets/images/flower6.jpg",
      category: "bouquets",
    },
    {
      id: 10,
      name: "Cat Crystal Ball – Whiskered Wonder",
      description: "A charming feline design frozen in crystal — a tribute to playfulness, loyalty, and companionship.",
      ideal: "Ideal for: Cat lovers, pet memorials, or thoughtful gifts for animal enthusiasts.",
      price: 130,
      image: "/assets/images/crystalball-cat.jpg",
      category: "crystals",
    },
    {
      id: 11,
      name: "Luna's Charm (Violet Roses)",
      description: "Five delicate roses symbolizing admiration, joy, and care, capturing the soft glow of moonlight in every petal.",
      ideal: "Ideal for: Celebrating milestones or showing appreciation to someone special.",
      price: 300,
      image: "/assets/images/flower7.jpg",
      category: "bouquets",
    },
    {
      id: 12,
      name: "Dog Crystal Ball – Faithful Spirit",
      description: "A loyal companion immortalized in crystal, representing friendship, trust, and unconditional love.",
      ideal: "Ideal for: Dog lovers, memorial keepsakes, or heartfelt gifts.",
      price: 130,
      image: "/assets/images/crystalball-dog.jpg",
      category: "crystals",
    },
    {
      id: 13,
      name: "Celestial Glow",
      description: "A radiant arrangement of ten roses, signifying completeness and harmony. A perfect way to say “you are my universe.",
      ideal: "Ideal for: Anniversaries, birthdays, or heartfelt confessions.",
      price: 1000,
      image: "/assets/images/flower8.jpg",
      category: "bouquets",
    },
    {
      id: 14,
      name: "Dress Crystal Ball – Grace in Crystal",
      description: "A delicate dress captured within, symbolizing beauty, elegance, and timeless femininity.",
      ideal: "Ideal for: Birthdays, fashion lovers, quinceañeras, or sweet sixteen gifts.",
      price: 130,
      image: "/assets/images/crystalball-dress.jpg",
      category: "crystals",
    },
    {
      id: 15,
      name: "Luna's Charm (Pink Roses)",
      description: "Five delicate roses symbolizing admiration, joy, and care, capturing the soft glow of moonlight in every petal.",
      ideal: "Ideal for: Celebrating milestones or showing appreciation to someone special.",
      price: 300,
      image: "/assets/images/flower9.jpg",
      category: "bouquets",
    },
    {
      id: 16,
      name: "Heart Crystal Ball – Forever in Crystal",
      description: "A glowing heart encased in crystal, the ultimate symbol of love, care, and cherished memories.",
      ideal: "Ideal for: Valentine’s Day, anniversaries, weddings, or tokens of affection.",
      price: 130,
      image: "/assets/images/crystalball-heart.jpg",
      category: "crystals",
    },
    {
      id: 17,
      name: "Starlit Whisper (Pink Rose)",
      description: "A single rose that speaks volumes. Perfect for expressing a simple yet profound gesture of love, admiration, or remembrance.",
      ideal: 'Ideal for: First dates, anniversaries, or “just because.”',
      price: 100,
      image: "/assets/images/flower10.jpg",
      category: "bouquets",
    },
    {
      id: 18,
      name: "Moon Crystal Ball – Lunar Dreamscape",
      description: "A celestial crystal inspired by the moon’s mystery and serenity, offering calm and inspiration.",
      ideal: "Ideal for: Astrology lovers, dreamers, night gazers, or spiritual souls.",
      price: 130,
      image: "/assets/images/crystalball-moon.jpg",
      category: "crystals",
    },
    {
      id: 19,
      name: "Celestial Glow (Red Roses)",
      description: "A radiant arrangement of ten roses, signifying completeness and harmony. A perfect way to say “you are my universe.",
      ideal: "Ideal for: Anniversaries, birthdays, or heartfelt confessions.",
      price: 500,
      image: "/assets/images/flower11.jpg",
      category: "bouquets",
    },
    {
      id: 20,
      name: "Ship Crystal Ball – Voyage of Destiny",
      description: "A majestic ship sailing through crystal seas, representing adventure, courage, and life’s journey.",
      ideal: "Ideal for: Travelers, seafarers, retirement gifts, or new ventures.",
      price: 130,
      image: "/assets/images/crystalball-ship.jpg",
      category: "crystals",
    },
    {
      id: 21,
      name: "Aurora’s Embrace (Red Roses)",
      description: "Fifteen roses entwined in grace, embodying the warmth of a sunrise and the beauty of new beginnings.",
      ideal: "Ideal for: Celebrating love’s journey, engagements, or cherished friendships.",
      price: 700,
      image: "/assets/images/flower12.jpg",
      category: "bouquets",
    },
    {
      id: 22,
      name: "Celestial Glow (Pink Roses)",
      description: "A radiant arrangement of ten roses, signifying completeness and harmony. A perfect way to say “you are my universe.",
      ideal: "Ideal for: Anniversaries, birthdays, or heartfelt confessions.",
      price: 500,
      image: "/assets/images/flower13.jpg",
      category: "bouquets",
    },
    {
      id: 23,
      name: "Celestial Glow (Violet Roses)",
      description: "A radiant arrangement of ten roses, signifying completeness and harmony. A perfect way to say “you are my universe.",
      ideal: "Ideal for: Anniversaries, birthdays, or heartfelt confessions.",
      price: 500,
      image: "/assets/images/flower14.jpg",
      category: "bouquets",
    },
    {
      id: 24,
      name: "Handmade Flower Bouquets",
      description: "A handcrafted bouquet featuring a graceful mix of seasonal flowers, carefully arranged to balance color, texture, and fragrance. Each piece is unique, radiating charm and heartfelt elegance—perfect for making any moment unforgettable.",
      ideal: "Ideal for: Birthdays, anniversaries, thank-you gifts, housewarmings or everyday surprises.",
      price: 500,
      image: "/assets/images/flower15.jpg",
      category: "bouquets",
    },
    {
      id: 25,
      name: "Celestial Glow (Blue Roses)",
      description: "A radiant arrangement of ten roses, signifying completeness and harmony. A perfect way to say “you are my universe.",
      ideal: "Ideal for: Anniversaries, birthdays, or heartfelt confessions.",
      price: 500,
      image: "/assets/images/flower16.jpg",
      category: "bouquets",
    },
    {
      id: 26,
      name: "Roses in a Box w/ Chocolates",
      description: "A luxurious keepsake box filled with fresh, hand-picked roses paired with delectable chocolates. This timeless duo combines elegance and sweetness, creating the ultimate gift of love and indulgence.",
      ideal: "Ideal for: Valentine’s Day, anniversaries, marriage proposals, birthdays or surprise romantic gestures.",
      price: 1800,
      image: "/assets/images/flower18.jpg",
      category: "bouquets",
    },
    {
      id: 27,
      name: "Roses in a Box w/ Chocolates",
      description: "A luxurious keepsake box filled with fresh, hand-picked roses paired with delectable chocolates. This timeless duo combines elegance and sweetness, creating the ultimate gift of love and indulgence.",
      ideal: "Ideal for: Valentine’s Day, anniversaries, marriage proposals, birthdays or surprise romantic gestures.",
      price: 1800,
      image: "/assets/images/flower19.jpg",
      category: "bouquets",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // If on homepage → limit to 6 products, else show all
  const displayedProducts = isProductsPage
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const content = (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#343a40] mb-4">
            🌸 Our Collection
          </h2>
          <p className="text-lg text-[#5a6268] max-w-2xl mx-auto">
            Discover our exquisite range of handcrafted floral arrangements and enchanting 3D Crystal Balls. Each flower bouquet can also be customized to perfectly match your special moments.</p>
        </div>

        {/* Category filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 text-sm font-medium border ${
                  activeCategory === category.id
                    ? "bg-[#f8d7da] text-[#343a40] border-[#f8d7da]"
                    : "bg-white text-[#5a6268] border-[#d1e7dd] hover:bg-[#f9f5f6]"
                } ${category.id === "all" ? "rounded-l-md" : ""} ${
                  category.id === "crystals" ? "rounded-r-md" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}

      {/* Only show "Load More" on homepage */}
      {!isProductsPage && (
        <div className="text-center mt-12">
          <Button href="/products" primary>
            Load More
          </Button>
        </div>
      )}
    </section>
  );

  // On /products, wrap with Header & Footer
  return isProductsPage ? (
    <>
      <Navbar />
      {content}
      <Footer />
    </>
  ) : (
    content
  );
};

export default ProductsSection;
