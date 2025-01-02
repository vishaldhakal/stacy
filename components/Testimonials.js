import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Residential Seller",
    avatar: "SJ",
    avatarColor: "bg-blue-500",
    content:
      "Excellent negotiation skills and deep knowledge of the rental market. Made our investment decision confident and informed.",
    rating: 4,
  },
  {
    id: 2,
    name: "Robert Wilson",
    role: "Real Estate Investor",
    avatar: "RW",
    avatarColor: "bg-blue-500",
    content:
      "Excellent negotiation skills and deep knowledge of the rental market. Made our investment decision confident and informed.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Zhang",
    role: "Home Buyer",
    avatar: "EZ",
    avatarColor: "bg-purple-500",
    content:
      "As newcomers to London, her knowledge of different neighborhoods was invaluable. Found our perfect home in Masonville.",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-amber-400" : "text-gray-200"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-center lg:items-start bg-white rounded-lg p-6 shadow-sm">
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-4 mb-4">
        <div
          className={`w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white text-lg font-semibold mb-3 lg:mb-0`}
        >
          {testimonial.avatar}
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold text-gray-900">
            {testimonial.name}
          </h3>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <StarRating rating={testimonial.rating} />
      <p className="mt-4 text-gray-600 text-center lg:text-left">
        {testimonial.content}
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 my-6 md:my-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what my clients have to say about their experience working with
            me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
