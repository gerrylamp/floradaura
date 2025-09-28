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
  };
}
const ReviewCard = ({
  review
}: ReviewProps) => {
  return <div className="bg-white rounded-lg p-6 shadow-sm border border-[#f8d7da]/30 h-full flex flex-col hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img src={review.avatar} alt={`${review.name}'s avatar`} className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#f8d7da]" />
        <div>
          <h3 className="font-medium text-[#343a40]">{review.name}</h3>
          <p className="text-sm text-[#5a6268]">{review.date}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {Array.from({
        length: 5
      }).map((_, index) => <StarIcon key={index} size={16} className={index < review.rating ? 'text-[#d4af37] fill-[#d4af37]' : 'text-gray-300 fill-gray-300'} />)}
      </div>
      <p className="text-[#5a6268] italic flex-grow">"{review.text}"</p>
    </div>;
};
export default ReviewCard;