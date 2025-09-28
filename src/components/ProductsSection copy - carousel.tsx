import React, { useState } from 'react';
import ProductCard from './ui/ProductCard';
import ProductDetailsModal from './ui/ProductDetailsModal';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'bouquets', name: 'Bouquets' },
    { id: 'crystals', name: 'Crystal Balls' },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Enchanted Rose Bouquet',
      description: "A delicate arrangement of premium roses with baby's breath.",
      price: 1399.99,
      image:
        'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
      category: 'bouquets',
    },
    {
      id: 2,
      name: 'Valentines Crystal Ball',
      description: 'Hand-crafted crystal ball with 3D floral design inside.',
      price: 129.99,
      image: '/assets/images/crystalball-valentines.jpg',
      category: 'crystals',
    },
    {
      id: 3,
      name: 'Spring Meadow Bouquet',
      description:
        'Vibrant seasonal flowers arranged to capture the essence of spring.',
      price: 1749.99,
      image:
        'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      category: 'bouquets',
    },
    {
      id: 4,
      name: 'Anniversary Crystal Ball',
      description:
        'Crystal ball with intricate constellation designs and subtle glow.',
      price: 129.99,
      image: '/assets/images/crystalball-anniversary.jpg',
      category: 'crystals',
    },
    {
      id: 5,
      name: 'Whispering Lilies Bouquet',
      description:
        'Elegant arrangement of white lilies symbolizing purity and renewal.',
      price: 1949.99,
      image:
        'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
      category: 'bouquets',
    },
    {
      id: 6,
      name: 'Mystic Flower Crystal',
      description: 'Crystal ball featuring a miniature enchanted garden scene.',
      price: 129.99,
      image: '/assets/images/crystalball-flower.jpg',
      category: 'crystals',
    },
    {
      id: 7,
      name: 'Creative Carnation Rose Soap Flower Bouquet',
      description: 'Unique soap flower bouquet perfect as a lasting gift.',
      price: 1499.99,
      image: '/assets/images/flower1.jpg',
      category: 'bouquets',
    },
    {
      id: 8,
      name: 'Graduation Crystal',
      description: 'Crystal ball featuring a graduation-themed 3D design.',
      price: 129.99,
      image: '/assets/images/crystalball-graduation.jpg',
      category: 'crystals',
    },
    {
      id: 9,
      name: 'Eternal Flower Bouquet',
      description: 'Bouquet designed to symbolize everlasting love.',
      price: 1699.99,
      image: '/assets/images/flower2.jpg',
      category: 'bouquets',
    },
  ];

  // Filter products
  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((product) => product.category === activeCategory);

  // Responsive slides per view
  const productsPerPage =
    typeof window !== 'undefined'
      ? window.innerWidth >= 1024
        ? 3
        : window.innerWidth >= 640
        ? 2
        : 1
      : 1;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + productsPerPage >= filteredProducts.length
        ? 0
        : prevIndex + productsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - productsPerPage < 0
        ? Math.max(0, filteredProducts.length - productsPerPage)
        : prevIndex - productsPerPage
    );
  };

  const currentPageIndex = Math.floor(currentIndex / productsPerPage);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#343a40] mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-[#5a6268] max-w-2xl mx-auto">
            Discover our exquisite range of handcrafted floral arrangements and
            crystal creations
          </p>
        </div>

        {/* Category filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 text-sm font-medium border ${
                  activeCategory === category.id
                    ? 'bg-[#f8d7da] text-[#343a40] border-[#f8d7da]'
                    : 'bg-white text-[#5a6268] border-[#d1e7dd] hover:bg-[#f9f5f6]'
                } ${category.id === 'all' ? 'rounded-l-md' : ''} ${
                  category.id === 'crystals' ? 'rounded-r-md' : ''
                }`}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentIndex(0);
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / productsPerPage)
                }%)`,
              }}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <ProductCard
                    product={product}
                    onViewDetails={handleViewDetails}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -ml-4 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md text-[#343a40] hover:text-[#d4af37] transition-colors z-10"
            aria-label="Previous products"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 -mr-4 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md text-[#343a40] hover:text-[#d4af37] transition-colors z-10"
            aria-label="Next products"
          >
            ›
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * productsPerPage)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentPageIndex === index ? 'bg-[#d4af37]' : 'bg-[#d1e7dd]'
              }`}
              aria-label={`Go to page ${index + 1}`}
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
    </section>
  );
};

export default ProductsSection;
