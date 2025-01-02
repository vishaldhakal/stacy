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
  {
    id: 4,
    title: "The Future of London's Real Estate Market",
    excerpt:
      "Explore the latest predictions and trends shaping London's real estate market.",
    image: "/1.jpg",
    category: "Market Trends",
    readTime: "7 min read",
    date: "Jan 20, 2024",
  },
];

const BlogCard = ({ post }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 mx-auto w-full">
      <div className="relative h-28 sm:h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-amber-100 text-black text-xs px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
          <span>{post.date}</span>
        </div>
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-black mb-4 line-clamp-2 hidden md:block">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <section className="py-6 sm:py-12 lg:py-16 my-4 md:my-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-center text-gray-900 sm:text-5xl font-extrabold">
            Real Estate Insights
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-black max-w-2xl mx-auto">
            Stay informed about London's real estate market with our latest
            articles and insights
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-medium text-white bg-black rounded-md shadow-sm hover:bg-gray-800 transition-all duration-200"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
