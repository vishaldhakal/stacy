import Image from "next/image";
import Link from "next/link";

const buyingSteps = [
  {
    title: "Financial Preparation",
    description:
      "Understand your budget, get pre-approved for a mortgage, and learn about down payment options and first-time buyer programs.",
    icon: (
      <svg
        className="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "House Hunting",
    description:
      "Identify your must-haves, explore different neighborhoods, and view properties that match your criteria and budget.",
    icon: (
      <svg
        className="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Making an Offer",
    description:
      "Get guidance on making competitive offers, understanding purchase agreements, and navigating negotiations.",
    icon: (
      <svg
        className="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Closing Process",
    description:
      "Learn about home inspections, finalizing your mortgage, and what to expect during the closing process.",
    icon: (
      <svg
        className="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
];

const FirstTimeBuyers = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 my-6 md:my-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center text-center lg:text-left">
          {/* Image Column - Moved to top for mobile */}
          <div className="lg:w-1/2 order-1 lg:order-2 w-full">
            <div className="relative flex justify-center items-center">
              <Image
                src="/firsttime.png"
                alt="Happy first-time home buyers receiving their keys"
                width={400}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full max-w-sm mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
                First-Time Home Buyer?
              </h2>
              <p className="mt-3 text-sm sm:text-lg text-black max-w-[300px] md:max-w-[400px] mx-auto md:mx-0">
                Buying your first home is an exciting journey. I'm here to guide
                you through every step of the process, making it simple and
                stress-free.
              </p>

              <div className="mt-6 sm:mt-8 space-y-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0 justify-center max-w-[300px] md:max-w-[400px] mx-auto md:mx-0">
                {buyingSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center md:items-center text-center lg:text-left gap-2 sm:gap-3"
                  >
                    <div className="flex-shrink-0 mb-1 sm:mb-2">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-10 md:px-0 max-w-[300px] md:max-w-[350px] mx-auto md:mx-0">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium text-white bg-black rounded-md shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Schedule an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstTimeBuyers;
