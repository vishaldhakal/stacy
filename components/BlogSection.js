import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "London's Real Estate Market Trends 2024",
    excerpt:
      "Discover the latest trends in London's housing market, from price changes to neighborhood growth patterns.",
    image: "/1.jpg",
    category: "Market Analysis",
    readTime: "5 min read",
    date: "Feb 15, 2024",
  },
  {
    id: 2,
    title: "Why Old North London Remains a Top Choice",
    excerpt:
      "Explore what makes Old North one of London's most sought-after neighborhoods for families and professionals.",
    image: "/2.gif",
    category: "Neighborhood Guide",
    readTime: "4 min read",
    date: "Feb 10, 2024",
  },
  {
    id: 3,
    title: "Investment Opportunities in Downtown London",
    excerpt:
      "Learn about the growing investment potential in downtown London's real estate market and upcoming developments.",
    image: "/3.jpg",
    category: "Investment",
    readTime: "6 min read",
    date: "Feb 5, 2024",
  },
];

const BlogCard = ({ post }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-2xl overflow-hidden hover:shadow-md transition-shadow mx-auto w-full max-w-xs lg:max-w-none">
      <div className="relative h-40 sm:h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-amber-100 text-black text-xs px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          {post.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 text-start">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-black hover:text-black"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 my-6 md:my-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-center text-gray-900 sm:text-5xl font-extrabold">
            Real Estate Insights
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about London's real estate market with our latest
            articles and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-0">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-md shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
