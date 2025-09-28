import React from 'react';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}
interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}
const ProductCard = ({
  product,
  onViewDetails
}: ProductCardProps) => {
  return <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#f8f9fa]">
      <div className="aspect-w-4 aspect-h-3 bg-gray-200 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif text-[#343a40] mb-2">
          {product.name}
        </h3>
        <p className="text-[#5a6268] mb-4 text-sm h-12 overflow-hidden">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-[#d4af37] font-medium">₱{product.price}</span>
          <button className="px-4 py-2 text-sm bg-transparent border border-[#d4af37] text-[#d4af37] rounded hover:bg-[#d4af37] hover:text-white transition-colors" onClick={() => onViewDetails(product)}>
            View Details
          </button>
        </div>
      </div>
    </div>;
};
export default ProductCard;