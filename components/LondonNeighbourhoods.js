import Link from "next/link";

const LondonNeighbourhoods = () => {
  const neighbourhoods = {
    "North London": ["Hyde Park", "Masonville", "Stoneybrook", "Medway"],
    "South London": ["White Oaks", "Westminster", "Cleardale", "Glendale"],
    "East London": ["Argyle", "Hamilton Road", "Crumlin", "Fairmont"],
    "West London": ["Byron", "Westmount", "Oakridge", "Riverside"],
    "Central London": ["Old North", "Downtown", "Woodfield", "Wortley Village"],
  };

  return (
    <section className="py-12 sm:py-16 lg:py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl md:text-5xl tracking-tight font-extrabold leading-[1.2] md:leading-[1.2] text-center mb-12">
          London Communities For Your Family
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {Object.entries(neighbourhoods).map(([region, communities]) => (
            <div key={region} className="text-center">
              <h3 className="text-lg font-semibold text-black mb-4">
                {region}
              </h3>
              <ul className="space-y-2">
                {communities.map((community) => (
                  <li
                    key={community}
                    className="text-sm text-gray-600 hover:text-black transition-colors cursor-pointer"
                  >
                    {community}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="flex justify-center items-center">
          <img
            src="/london.png"
            alt="London Ontario Satellite Map"
            className="w-96 h-96"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to explore real estate opportunities in London?
          </p>
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-all duration-200"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LondonNeighbourhoods;
