import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../../../components/contants/Images';

const blogPosts = [
  {
    id: '1',
    category: 'Insight',
    title: 'Independent contractor or employee? How to classify your workers',
    excerpt: 'Understand the key differences between contractors and employees to ensure compliance with labor laws and tax regulations.',
    date: 'November 28, 2022',
    image: Images.TaxImgOne,
  },
  {
    id: '2',
    category: 'Accounting',
    title: 'Here’s how you can budget your small business!',
    excerpt: 'Learn simple yet effective budgeting strategies to keep your small business financially healthy and on track for growth.',
    date: 'November 28, 2022',
    image: Images.TaxImgTwo,
  },
  {
    id: '3',
    category: 'Insight',
    title: '2 ways you can avoid penalties from the IRS',
    excerpt: 'Discover the most common IRS pitfalls and how to avoid them by staying compliant with tax filing and payment deadlines.',
    date: 'November 28, 2022',
    image: Images.TaxImgThree,
  },
  {
    id: '4',
    category: 'Cloud Accounting',
    title: '3 good reasons to switch to cloud accounting',
    excerpt: 'Switching to cloud accounting improves real-time access, collaboration, and simplifies your financial processes.',
    date: 'November 28, 2022',
    image: Images.TaxImgFour,
  },
  {
    id: '5',
    category: 'Accounting',
    title: 'How to make sense of complicated balance sheets',
    excerpt: 'Break down complex balance sheets into understandable parts to better analyze your company’s financial health.',
    date: 'November 28, 2022',
    image: Images.TaxImgFive,
  },
  {
    id: '6',
    category: 'Analytics',
    title: 'Steps for initiating your startup business',
    excerpt: 'From ideation to registration, explore a step-by-step guide to launching your startup successfully.',
    date: 'November 28, 2022',
    image: Images.TaxImgSix,
  },
];

const BlogCardPostSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 py-[4rem] text-[#004aac] font-sans text-center">Finance & Accounting Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="block rounded-[3px] shadow hover:shadow-lg transition overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
            <div className="p-6">
              <span className="text-sm text-[#004aac] font-semibold uppercase">{post.category}</span>
              <h2 className="text-2xl font-semibold mt-2 mb-4">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-400 mb-4">
                <span>{post.date}</span>
              </div>
              <button className="text-[#004aac] font-semibold hover:underline">Learn More</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCardPostSection;
