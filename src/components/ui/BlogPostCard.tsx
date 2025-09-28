import React from 'react';
interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    author: string;
    authorImage: string;
  };
}
const BlogPostCard = ({
  post
}: BlogPostProps) => {
  return <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#f8d7da]/20 hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div className="relative">
        <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 text-[#343a40] text-xs rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif text-[#343a40] mb-3 hover:text-[#d4af37] transition-colors">
          <a href="#">{post.title}</a>
        </h3>
        <p className="text-[#5a6268] mb-4 flex-grow">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#f8f9fa]">
          <div className="flex items-center">
            <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full object-cover mr-2" />
            <span className="text-sm text-[#5a6268]">{post.author}</span>
          </div>
          <span className="text-sm text-[#5a6268]">{post.date}</span>
        </div>
      </div>
      <div className="px-6 pb-6">
        <a href="#" className="text-[#d4af37] hover:text-[#c4a030] font-medium flex items-center transition-colors">
          Read More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </article>;
};
export default BlogPostCard;