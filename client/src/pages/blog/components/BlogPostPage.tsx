// pages/Blog/BlogPostPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Images from '../../../components/contants/Images';
import Footer from '../../../components/footer/Footer';
import Newsletter from '../../home/components/Newsletter';

const blogPosts = [
  {
    id: '1',
    category: 'Insight',
    title: 'Independent contractor or employee? How to classify your workers',
    content: `
      Classifying your workers properly is crucial to remain compliant with IRS and labor laws.
      Independent contractors typically control how they complete tasks, supply their own tools, and take on multiple clients.
      Employees, on the other hand, follow company schedules, receive training, and use provided resources.
      Misclassification can result in costly fines and tax liabilities.
      Learn how to evaluate behavioral control, financial control, and the relationship between you and your workers to classify them correctly.
    `,
    date: 'November 28, 2022',
    image: Images.TaxImgOne,
  },
  {
    id: '2',
    category: 'Accounting',
    title: 'Here’s how you can budget your small business!',
    content: `
      Budgeting helps ensure your business stays on track financially.
      Start by listing all sources of income, then track your fixed and variable expenses.
      Use software like QuickBooks or Wave to automate tracking.
      Forecast cash flow to identify when expenses will exceed income.
      Adjust your budget monthly based on performance and goals.
      With a disciplined budget, your business can withstand market fluctuations and make smarter investments.
    `,
    date: 'November 28, 2022',
    image: Images.TaxImgTwo,
  },
  {
    id: '3',
    category: 'Insight',
    title: '2 ways you can avoid penalties from the IRS',
    content: `
      Avoiding IRS penalties starts with timely estimated tax payments and meticulous record-keeping.
      First, determine your tax liability early and divide it into quarterly payments.
      Missing these deadlines can result in interest and penalties.
      Secondly, keep all financial documents organized: receipts, invoices, mileage logs, and bank statements.
      Use cloud-based tools for secure and accessible documentation.
      Consistent tracking ensures accurate filings and lowers your risk of IRS audits or penalties.
    `,
    date: 'November 28, 2022',
    image: Images.TaxImgThree,
  },
  {
    id: '4',
    category: 'Cloud Accounting',
    title: '3 good reasons to switch to cloud accounting',
    content: `
      Cloud accounting offers real-time access, automatic updates, and easier collaboration.
      You can view financial data from any device, making remote work seamless.
      Software like Xero and QuickBooks Online backs up your data and keeps it secure.
      Collaborate effortlessly with your accountant, who can access your books instantly.
      It also integrates with other business tools like inventory systems and payment processors.
      If you're scaling or need efficiency, cloud accounting is a smart upgrade.
    `,
    date: 'November 28, 2022',
    image: Images.TaxImgFour,
  },
  {
    id: '5',
    category: 'Accounting',
    title: 'How to make sense of complicated balance sheets',
    content: `
      A balance sheet shows your business's financial position at a glance.
      Assets represent what you own: cash, inventory, and equipment.
      Liabilities show what you owe: loans, accounts payable, and taxes.
      Equity reflects your ownership in the business.
      Learn to evaluate key ratios like debt-to-equity and current ratio to assess financial health.
      Understanding your balance sheet helps with decision-making, securing funding, and tracking progress over time.
    `,
    date: 'November 28, 2022',
    image: Images.TaxImgFive,
  },
  {
    id: '6',
    category: 'Analytics',
    title: 'Steps for initiating your startup business',
    content: `
      Starting a business involves more than just a good idea.
      Begin with thorough market research to validate demand and competition.
      Create a solid business plan detailing your product, audience, and revenue model.
      Register your business legally, get the necessary permits, and open a business bank account.
      Build an online presence through a website and social media.
      Set up accounting systems early to track income, expenses, and taxes.
      Preparation sets the foundation for long-term growth and resilience.
    `,
    date: 'November 28, 2022',
    image: Images.TaxImgSix,
  },
];

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) return <div className="text-center py-10">Post not found</div>;

  return (
       <div>
         <div className="max-w-4xl mx-auto px-4 py-10">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <span className="text-blue-600 uppercase font-semibold text-sm">
        {post.category}
      </span>
      <h1 className="text-4xl font-bold my-4">{post.title}</h1>
      <div className="text-sm text-gray-400 mb-6">{post.date}</div>
      <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
        {post.content.trim()}
      </p>
    </div>
    <Newsletter />
    <Footer />
       </div>
  );
};

export default BlogPostPage;
