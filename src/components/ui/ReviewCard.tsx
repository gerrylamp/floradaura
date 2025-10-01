import React from 'react';
import { StarIcon } from 'lucide-react';
interface ReviewProps {
  review: {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    text: string;
    date: string;
    image: string;
  };
}
const ReviewCard = ({
  review
}: ReviewProps) => {
  return <div className="bg-white rounded-lg p-6 shadow-sm border border-[#f8d7da]/30 h-full flex flex-col hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img src={review.image} alt={review.name} />
      </div>
    </div>;
};
export default ReviewCard;