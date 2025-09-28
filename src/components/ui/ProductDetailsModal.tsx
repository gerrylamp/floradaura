import React from 'react';
import { X as CloseIcon } from 'lucide-react';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}
interface ProductDetailsModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}
const ProductDetailsModal = ({
  product,
  isOpen,
  onClose
}: ProductDetailsModalProps) => {
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-[#f8d7da] transition-colors z-10" onClick={onClose} aria-label="Close details">
          <CloseIcon size={20} className="text-[#343a40]" />
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 h-full">
            <div className="relative h-80 md:h-full">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-[#343a40] text-xs rounded-full">
                {product.category === 'bouquets' ? 'Bouquet' : 'Crystal Ball'}
              </span>
            </div>
          </div>
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
            <h2 className="text-2xl font-serif text-[#343a40] mb-3">
              {product.name}
            </h2>
            <div className="mb-4">
              <span className="text-xl text-[#d4af37] font-medium">
                ${product.price}
              </span>
            </div>
            <div className="mb-6 flex-grow">
              <h3 className="text-sm font-medium text-[#343a40] mb-2">
                Description
              </h3>
              <p className="text-[#5a6268]">{product.description}</p>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-[#343a40] mb-2">
                  Details
                </h3>
                <ul className="text-[#5a6268] list-disc pl-5 space-y-1">
                  {product.category === 'bouquets' ? <>
                      <li>Freshly cut and arranged</li>
                      <li>Includes care instructions</li>
                      <li>Available for delivery or pickup</li>
                      <li>Vase not included</li>
                    </> : <>
                      <li>Handcrafted crystal sphere</li>
                      <li>Includes display stand</li>
                      <li>Comes in a luxury gift box</li>
                      <li>Certificate of authenticity included</li>
                    </>}
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-3 flex border rounded overflow-hidden">
                  <button className="px-3 py-1 bg-[#f8f9fa] hover:bg-[#f1f3f5] text-[#343a40] border-r">
                    -
                  </button>
                  <input type="number" min="1" value="1" readOnly className="w-12 text-center p-1 focus:outline-none" />
                  <button className="px-3 py-1 bg-[#f8f9fa] hover:bg-[#f1f3f5] text-[#343a40] border-l">
                    +
                  </button>
                </div>
                <span className="text-sm text-[#5a6268]">In stock</span>
              </div>
              <button className="w-full py-3 bg-[#d4af37] text-white rounded hover:bg-[#c4a030] transition-colors">
                Add to Cart
              </button>
              <button className="w-full py-3 bg-transparent border border-[#d4af37] text-[#d4af37] rounded hover:bg-[#f9f5f6] transition-colors">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProductDetailsModal;