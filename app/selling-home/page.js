import PromoSection from "@/components/PromoSection";
const StagingBenefits = [
  "Staged properties outperform non-staged competing homes on the market",
  "Statistical data confirms staged properties command higher prices and sell significantly faster",
  "Real estate agents prioritize showing staged properties to potential buyers",
  "Buyers consistently identify staged homes as premium properties worth viewing",
];

const PreparationSteps = [
  "Begin decluttering months before listing - remove personal items and excess furniture",
  "Deep clean all surfaces including walls, windows, and flooring",
  "Address maintenance issues like squeaky doors and loose fixtures",
  "Organize storage spaces including closets and garage",
  "Enhance curb appeal with fresh paint and landscaping",
  "Maintain spotless conditions during the entire selling period",
];

export const metadata = {
  title: "Selling Your Home | Stacy and Louise Anastasiadis",
  description:
    "Sell your home with Stacy and Louise Anastasiadis. We can help you sell your home for the best price in the shortest amount of time.",
};

const SellingPage = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Staging Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Staging Market Advantage
            </h2>
            <div className="bg-teal-50 p-4 rounded-lg mb-6">
              <p className="text-teal-700 font-semibold">
                Transform your property into a buyer's dream home - efficiently
                and cost-effectively!
              </p>
            </div>

            <div className="prose max-w-none">
              <p className="mb-6">
                Home staging represents a strategic marketing investment in your
                property's sale. This proven approach transforms lived-in spaces
                into appealing environments where potential buyers can envision
                their future. Across Canadian real estate markets, staging has
                demonstrated consistent success in achieving superior sales
                outcomes.
              </p>

              <h3 className="text-xl font-bold mb-4">
                Professional Staging Impact
              </h3>
              <ul className="list-disc pl-6 space-y-3 mb-8">
                {StagingBenefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">
                    {benefit}
                  </li>
                ))}
              </ul>

              <p className="mb-8">
                Professional home stagers specialize in creating neutral,
                appealing spaces that allow potential buyers to mentally move
                in, effectively turning your property into their future home.
              </p>
            </div>
          </section>

          {/* Show-Stopper Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Creating a Show-Stopping Property
            </h2>
            <div className="prose max-w-none">
              <p className="mb-6">
                Think of showing your home like preparing for an important first
                impression - presentation matters immensely. A well-maintained
                appearance suggests comprehensive care, including unseen
                elements like plumbing and heating systems.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Key Benefits of Proper Preparation
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accelerated sale timeline</li>
                  <li>Potential for higher offers</li>
                  <li>Enhanced visibility of property improvements</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mb-4">
                Essential Preparation Steps
              </h3>
              <ul className="space-y-3 mb-8">
                {PreparationSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Exterior Considerations */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Exterior Excellence</h2>
            <div className="prose max-w-none">
              <p className="mb-6">
                External appearance creates crucial first impressions. Consider
                these enhancements:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li>Fresh exterior paint or strategic touch-ups</li>
                <li>
                  Well-maintained landscaping with trimmed lawns and bushes
                </li>
                <li>Strategic flower placement using coordinated colors</li>
                <li>Organized and clean garage spaces</li>
              </ul>
            </div>
          </section>

          {/* Pricing Strategy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Critical Pricing Considerations
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                Avoiding Common Pricing Mistakes
              </h3>
              <div className="prose max-w-none">
                <p className="mb-6">
                  The most significant mistake sellers make is choosing an agent
                  based solely on their suggested listing price. Remember:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    Market value is determined by buyer willingness, not seller
                    expectations
                  </li>
                  <li>
                    Pricing combines art and science through comparative market
                    analysis
                  </li>
                  <li>Multiple factors influence final sale prices</li>
                  <li>Overpricing poses more risk than underpricing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Home Inspection Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Preparing for Home Inspection
            </h2>
            <div className="prose max-w-none">
              <p className="mb-6">
                A successful home inspection can make or break your sale. Ensure
                your property is ready for detailed examination by addressing
                maintenance issues proactively.
              </p>
            </div>
          </section>
        </div>
      </div>
      <PromoSection />
    </>
  );
};

export default SellingPage;
