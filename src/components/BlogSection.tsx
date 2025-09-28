import React from 'react';
import BlogPostCard from './ui/BlogPostCard';
import Button from './ui/Button';
const blogPosts = [{
  id: 1,
  title: 'The Language of Flowers: What Your Bouquet Is Saying',
  excerpt: 'Explore the rich history and meaning behind different flowers and how to create arrangements that convey specific sentiments.',
  image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
  category: 'Floral Design',
  date: 'April 15, 2023',
  author: 'Eliza Bloom',
  authorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
}, {
  id: 2,
  title: 'Crystal Balls: Ancient Art Meets Modern Decor',
  excerpt: 'Discover how crystal spheres have evolved from mystical tools to sophisticated home decor, and how to style them in contemporary spaces.',
  image: 'https://images.unsplash.com/photo-1517241080758-95a42c519c1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  category: 'Crystal Craft',
  date: 'May 22, 2023',
  author: 'Marcus Crystal',
  authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
}, {
  id: 3,
  title: 'Seasonal Blooms: Creating the Perfect Summer Arrangement',
  excerpt: 'Learn which flowers thrive in summer and how to create stunning arrangements that capture the vibrant energy of the season.',
  image: 'https://images.unsplash.com/photo-1464982326199-86f32f81b211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  category: 'Seasonal Guide',
  date: 'June 10, 2023',
  author: 'Eliza Bloom',
  authorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
}];
const BlogSection = () => {
  return <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#343a40] mb-4">
            From Our Journal
          </h2>
          <p className="text-lg text-[#5a6268] max-w-2xl mx-auto">
            Insights, inspiration, and stories from the world of floral design
            and crystal artistry
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => <BlogPostCard key={post.id} post={post} />)}
        </div>
        {/* <div className="mt-12 text-center">
          <Button href="#">View All Articles</Button>
        </div> */}
      </div>
    </section>;
};
export default BlogSection;