import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-inter text-[#E1b04a]  sm:text-4xl">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-[16px] leading-6 text-gray-600">
          Stay updated with the latest news, articles, and resources, sent to your inbox weekly.
        </p>
        <form className="mt-8 sm:flex sm:justify-center">
          <div className="sm:max-w-md w-full sm:flex">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="w-full px-5 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="w-full px-5 py-3 bg-[#004aac] text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
        <p className="mt-4 text-sm text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
