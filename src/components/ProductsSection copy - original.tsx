import React, { useState } from 'react';
import ProductCard from './ui/ProductCard';
import ProductDetailsModal from './ui/ProductDetailsModal';
const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = [{
    id: 'all',
    name: 'All Products'
  }, {
    id: 'bouquets',
    name: 'Bouquets'
  }, {
    id: 'crystals',
    name: 'Crystal Balls'
  }];
  const products = [{
    id: 1,
    name: 'Enchanted Rose Bouquet',
    description: "A delicate arrangement of premium roses with baby's breath.",
    price: 1399.99,
    image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
    category: 'bouquets'
  }, {
    id: 2,
    name: 'Valentines Crystal Ball',
    description: 'Hand-crafted crystal ball with 3D floral design inside.',
    price: 129.99,
    image: '/assets/images/crystalball-valentines.jpg',
    category: 'crystals'
  }, {
    id: 3,
    name: 'Spring Meadow Bouquet',
    description: 'Vibrant seasonal flowers arranged to capture the essence of spring.',
    price: 1749.99,
    image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    category: 'bouquets'
  }, {
    id: 4,
    name: 'Anniversary Crystal Ball',
    description: 'Crystal ball with intricate constellation designs and subtle glow.',
    price: 129.99,
    image: '/assets/images/crystalball-anniversary.jpg',
    category: 'crystals'
  }, {
    id: 5,
    name: 'Whispering Lilies Bouquet',
    description: 'Elegant arrangement of white lilies symbolizing purity and renewal.',
    price: 1949.99,
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    category: 'bouquets'
  },
  {
    id: 6,
    name: 'Mystic Flower Crystal',
    description: 'Crystal ball featuring a miniature enchanted garden scene.',
    price: 129.99,
    image: '/assets/images/crystalball-flower.jpg',
    category: 'crystals'
  },
  {
    id: 7,
    name: 'Creative Carnation Rose Soap Flower Bouquet',
    description: 'Crystal ball featuring a miniature enchanted garden scene.',
    price: 1499.99,
    image: '/assets/images/flower1.jpg',
    category: 'bouquets'
  },
  {
    id: 8,
    name: 'Graduation Crystal',
    description: 'Crystal ball featuring a miniature enchanted garden scene.',
    price: 129.99,
    image: '/assets/images/crystalball-graduation.jpg',
    category: 'crystals'
  },
  {
    id: 7,
    name: 'Eternal Flower Bouquet',
    description: 'Crystal ball featuring a miniature enchanted garden scene.',
    price: 1699.99,
    image: '/assets/images/flower2.jpg',
    category: 'bouquets'
  },
];
  const filteredProducts = activeCategory === 'all' ? products : products.filter(product => product.category === activeCategory);
  const handleViewDetails = product => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {categories.map(category => <button key={category.id} className={`px-5 py-2 text-sm font-medium border ${activeCategory === category.id ? 'bg-[#f8d7da] text-[#343a40] border-[#f8d7da]' : 'bg-white text-[#5a6268] border-[#d1e7dd] hover:bg-[#f9f5f6]'} ${category.id === 'all' ? 'rounded-l-md' : ''} ${category.id === 'crystals' ? 'rounded-r-md' : ''}`} onClick={() => setActiveCategory(category.id)}>
                {category.name}
              </button>)}
          </div>
        </div>
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />)}
        </div>
      </div>
      {selectedProduct && <ProductDetailsModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />}
    </section>;
};
export default ProductsSection;