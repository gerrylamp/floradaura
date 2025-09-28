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
      name: "Enchanted Rose Bouquet",
      description: "A delicate arrangement of premium roses with baby's breath.",
      price: 1399.99,
      image:
        "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1025&q=80",
      category: "bouquets",
    },
    {
      id: 2,
      name: "Valentines Crystal Ball",
      description: "Hand-crafted crystal ball with 3D floral design inside.",
      price: 129.99,
      image: "/public/assets/images/crystalball-valentines.jpg",
      category: "crystals",
    },
    {
      id: 3,
      name: "Spring Meadow Bouquet",
      description:
        "Vibrant seasonal flowers arranged to capture the essence of spring.",
      price: 1749.99,
      image:
        "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
      category: "bouquets",
    },
    {
      id: 4,
      name: "Anniversary Crystal Ball",
      description:
        "Crystal ball with intricate constellation designs and subtle glow.",
      price: 129.99,
      image: "/public/assets/images/crystalball-anniversary.jpg",
      category: "crystals",
    },
    {
      id: 5,
      name: "Whispering Lilies Bouquet",
      description:
        "Elegant arrangement of white lilies symbolizing purity and renewal.",
      price: 1949.99,
      image:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      category: "bouquets",
    },
    {
      id: 6,
      name: "Mystic Flower Crystal",
      description: "Crystal ball featuring a miniature enchanted garden scene.",
      price: 129.99,
      image: "/public/assets/images/crystalball-flower.jpg",
      category: "crystals",
    },
    {
      id: 7,
      name: "Creative Carnation Rose Soap Flower Bouquet",
      description: "Beautiful soap flower bouquet with carnations and roses.",
      price: 1499.99,
      image: "/public/assets/images/flower1.jpg",
      category: "bouquets",
    },
    {
      id: 8,
      name: "Graduation Crystal Ball",
      description: "Crystal ball featuring a miniature enchanted garden scene.",
      price: 129.99,
      image: "/public/assets/images/crystalball-graduation.jpg",
      category: "crystals",
    },
    {
      id: 9,
      name: "Eternal Flower Bouquet",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1699.99,
      image: "/public/assets/images/flower2.jpg",
      category: "bouquets",
    },
    {
      id: 10,
      name: "Graduation Crystal Ball",
      description: "Crystal ball featuring a miniature enchanted garden scene.",
      price: 129.99,
      image: "/public/assets/images/crystalball-cat.jpg",
      category: "crystals",
    },
    {
      id: 11,
      name: "Red Rose Bouquet",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1799.99,
      image: "/public/assets/images/flower3.jpg",
      category: "bouquets",
    },
    {
      id: 12,
      name: "Dog Crystal Ball",
      description: "Crystal ball featuring a miniature enchanted garden scene.",
      price: 129.99,
      image: "/public/assets/images/crystalball-dog.jpg",
      category: "crystals",
    },
    {
      id: 13,
      name: "Satin Ribbon Rose Bouquet",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1899.99,
      image: "/public/assets/images/flower5.jpg",
      category: "bouquets",
    },
    {
      id: 14,
      name: "Dress Crystal Ball",
      description: "Crystal ball featuring a miniature enchanted garden scene.",
      price: 129.99,
      image: "/public/assets/images/crystalball-dress.jpg",
      category: "crystals",
    },
    {
      id: 15,
      name: "Pink Rose Bouquet",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1299.99,
      image: "/public/assets/images/flower6.jpg",
      category: "bouquets",
    },
    {
      id: 16,
      name: "Heart Crystal Ball",
      description: "Crystal ball featuring a miniature enchanted garden scene.",
      price: 129.99,
      image: "/public/assets/images/crystalball-heart.jpg",
      category: "crystals",
    },
    {
      id: 17,
      name: "Satin Rose Bouquet",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1299.99,
      image: "/public/assets/images/flower7.jpg",
      category: "bouquets",
    },
    {
      id: 18,
      name: "Moon Crystal Ball",
      description: "Crystal ball featuring a miniature enchanted garden scene.",
      price: 129.99,
      image: "/public/assets/images/crystalball-moon.jpg",
      category: "crystals",
    },
    {
      id: 19,
      name: "Pink Gerbera Bouquet",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1499.99,
      image: "/public/assets/images/flower8.jpg",
      category: "bouquets",
    },
    {
      id: 20,
      name: "Ship Crystal Ball",
      description: "Crystal ball featuring a miniature enchanted garden scene.",
      price: 129.99,
      image: "/public/assets/images/crystalball-ship.jpg",
      category: "crystals",
    },
    {
      id: 21,
      name: "Ribbon & Crochet Bouquet",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1399.99,
      image: "/public/assets/images/flower9.jpg",
      category: "bouquets",
    },
    {
      id: 22,
      name: "Satin Ribbon Rose",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 499.99,
      image: "/public/assets/images/flower10.jpg",
      category: "bouquets",
    },
    {
      id: 23,
      name: "Eternal Rose Bouquet",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1599.99,
      image: "/public/assets/images/flower11.jpg",
      category: "bouquets",
    },
    {
      id: 24,
      name: "Floral Bouquet",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1799.99,
      image: "/public/assets/images/flower12.jpg",
      category: "bouquets",
    },
    {
      id: 25,
      name: "Ribbon Rose Bouquet",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1699.99,
      image: "/public/assets/images/flower13.jpg",
      category: "bouquets",
    },
    {
      id: 26,
      name: "Satin Rose Bouquet",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1899.99,
      image: "/public/assets/images/flower14.jpg",
      category: "bouquets",
    },
    {
      id: 27,
      name: "Handmade Flower Bouquet",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1999.99,
      image: "/public/assets/images/flower15.jpg",
      category: "bouquets",
    },
    {
      id: 28,
      name: "Blue Roses Round Bouquet",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1399.99,
      image: "/public/assets/images/flower16.jpg",
      category: "bouquets",
    },
    {
      id: 29,
      name: "Roses Bouquet",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1499.99,
      image: "/public/assets/images/flower18.jpg",
      category: "bouquets",
    },
    {
      id: 30,
      name: "Flowers and Favors",
      description: "A lasting bouquet crafted with preserved flowers.",
      price: 1699.99,
      image: "/public/assets/images/flower19.jpg",
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
            Our Collection
          </h2>
          <p className="text-lg text-[#5a6268] max-w-2xl mx-auto">
            Discover our exquisite range of handcrafted floral arrangements and
            3D Crystal Balls          </p>
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
