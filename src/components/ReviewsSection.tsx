import React, { useState } from 'react';
import ReviewCard from './ui/ReviewCard';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

// Define the shape of a review for clarity
interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}
const reviews: Review[] = [{
  id: 1,
  name: 'Sophia Anderson',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  rating: 5,
  text: 'The crystal ball I purchased is absolutely breathtaking. The detail of the 3D flowers inside is exquisite, and it catches the light in the most magical way. It s become the centerpiece of my living room : . ,: date March 15, 2023',
  date: 'March 15, 2023'
}, {
  id: 2,
  name: 'James Bennett',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  rating: 5,
  text: 'I ordered a custom bouquet for my wife s birthday and Flora d Aura exceeded all expectations. The arrangement was stunning and stayed fresh for an impressively long time. The attention to detail and artistry is unmatched.',
  date: 'April 2, 2023'
}, {
  id: 3,
  name: 'Elena Rodriguez',
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  rating: 4,
  text: 'The Celestial Dreams Crystal is even more beautiful in person than in the photos. It s clearly handcrafted with care and precision : .The only reason for 4 stars instead of 5 is that shipping took longer than expected : . ,: date May 18, 2023',
  date: 'May 18, 2023'
}, {
  id: 4,
  name: 'Michael Thompson',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  rating: 5,
  text: 'I ve purchased from several high - end florists but Flora d Aura is in a league of their own. The Spring Meadow Bouquet I ordered for our anniversary was a work of art. My wife was speechless when she saw it.',
  date: 'June 10, 2023'
}, {
  id: 5,
  name: 'Olivia Chen',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
  rating: 5,
  text: 'The Mystic Garden Crystal is pure magic. It s become my daily meditation focus, and the detail of the tiny garden inside is incredible. Every time I look at it, I notice something new. Worth every penny.',
  date: 'July 24, 2023'
}];
const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const nextSlide = () => {
    setCurrentIndex(prevIndex => prevIndex + reviewsPerPage >= reviews.length ? 0 : prevIndex + reviewsPerPage);
  };
  const prevSlide = () => {
    setCurrentIndex(prevIndex => prevIndex - reviewsPerPage < 0 ? Math.max(0, reviews.length - reviewsPerPage) : prevIndex - reviewsPerPage);
  };
  const currentPageIndex = Math.floor(currentIndex / reviewsPerPage);
  return <section id='reviews' className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#f8d7da]/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#d1e7dd]/10 rounded-full -mr-32 -mb-32 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#343a40] mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-[#5a6268] max-w-2xl mx-auto">
            Discover what our clients say about their Flora d'Aura experience
          </p>
        </div>
        <div className="relative">
          {/* Reviews slider */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${currentIndex * (100 / reviewsPerPage)}%)`
          }}>
              {reviews.map(review => <div key={review.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <ReviewCard review={review} />
                </div>)}
            </div>
          </div>
          {/* Navigation arrows */}
          <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 -ml-4 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md text-[#343a40] hover:text-[#d4af37] transition-colors z-10" aria-label="Previous reviews">
            <ChevronLeftIcon size={24} />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 -mr-4 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md text-[#343a40] hover:text-[#d4af37] transition-colors z-10" aria-label="Next reviews">
            <ChevronRightIcon size={24} />
          </button>
        </div>
        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({
          length: totalPages
        }).map((_, index) => <button key={index} onClick={() => setCurrentIndex(index * reviewsPerPage)} className={`w-2.5 h-2.5 rounded-full transition-colors ${currentPageIndex === index ? 'bg-[#d4af37]' : 'bg-[#d1e7dd]'}`} aria-label={`Go to page ${index + 1}`} />)}
        </div>
      </div>
    </section>;
};
export default ReviewsSection;