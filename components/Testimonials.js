import Image from "next/image";

const testimonialData = [
  {
    text: "Stacy's knowledge of the London market was invaluable. She negotiated a great price and was always available for questions.",
    author: "Michael Thompson",
    role: "First-Time Home Buyer",
    rating: 5,
  },
  {
    text: "Her expertise in commercial transactions was evident. She helped me secure an excellent investment property in downtown London.",
    author: "Sarah Richardson",
    role: "Commercial Property Investor",
    rating: 5,
  },
  {
    text: "Great understanding of zoning laws and development regulations. Made the multi-family property development process smooth.",
    author: "David Chen",
    role: "Property Developer",
    rating: 4,
  },
  {
    text: "Her market analysis helped us get top dollar for our Westmount home. The transition to our downtown condo was seamless.",
    author: "Patricia Miller",
    role: "Residential Seller",
    rating: 5,
  },
  {
    text: "Excellent negotiation skills and deep knowledge of the rental market. Made our investment decision confident and informed.",
    author: "Robert Wilson",
    role: "Real Estate Investor",
    rating: 4,
  },
  {
    text: "As newcomers to London, her knowledge of different neighborhoods was invaluable. Found our perfect home in Masonville.",
    author: "Emily Zhang",
    role: "Home Buyer",
    rating: 5,
  },
];

const getInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const getRandomColor = (name) => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  const index = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[index % colors.length];
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ text, author, role, rating }) => {
  const initials = getInitials(author);
  const bgColor = getRandomColor(author);

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-md">
      <div className="flex flex-col justify-between flex-1 p-6">
        <div className="flex-1">
          <StarRating rating={rating} />
          <blockquote>
            <p className="text-base text-gray-800 leading-relaxed">{text}</p>
          </blockquote>
        </div>

        <div className="mt-6">
          <div className="w-full h-0 mb-6 border-t-2 border-gray-200 border-dotted"></div>
          <div className="flex items-center">
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full ${bgColor} flex items-center justify-center`}
            >
              <span className="text-white font-medium text-xs">{initials}</span>
            </div>
            <div className="min-w-0 ml-3">
              <p className="text-sm font-semibold text-gray-800 truncate">
                {author}
              </p>
              <p className="text-sm text-gray-500 truncate">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            What My Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from satisfied clients about their experience working with me
            in London's diverse real estate market
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 md:grid-cols-3">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
