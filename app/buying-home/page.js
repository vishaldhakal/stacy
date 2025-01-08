"use client";
import Image from "next/image";
import Link from "next/link";

const HomeInspectionChecklist = [
  "Foundation",
  "Doors and windows",
  "Roof and exterior walls",
  "Attics",
  "Plumbing and electrical systems",
  "Heating and air conditioning systems",
  "Ceilings, walls and floors",
  "Insulation",
  "Ventilation",
  "Septic tanks, wells or sewer lines",
  "Any other buildings such as a detached garage",
  "The lot, including drainage away from buildings, slopes and natural vegetation",
  "Overall opinion of structural integrity of the buildings",
  "Common areas (in the case of a condominium/strata or co-operative)",
];

const LawyerRequirements = [
  "Should be a licensed full-time lawyer/notary",
  "Should be local and understand real estate laws, regulations and restrictions",
  "Should have realistic and acceptable fees",
  "Can explain things in plain language",
];

const BuyerPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        {/* Initial Tips Section */}
        <section className="mb-12">
          <div className="prose max-w-none">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-start">
              Understanding Your Home Purchase
            </h2>

            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">
                Understand the Total Cost of Buying
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your real estate agent and lender will guide you through costs
                including mortgage, land transfer taxes, and other fees. Get a
                detailed breakdown of closing costs from your lawyer. Consider
                additional expenses like moving costs, new appliances, and home
                furnishings.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">Be Realistic</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Property value is determined by multiple factors: Location,
                Layout, Presentation, Amenities, and Upgrades/Updates. Unless
                you have an unlimited budget, expect to make some compromises in
                your search.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Know your priorities to make informed trade-offs that fit your
                lifestyle. Your real estate agent will help identify
                deal-breakers and find properties that align with your needs,
                goals, and long-term plans. The ultimate goal is finding the
                best overall value within your budget.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Team Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Your Professional Support Team
          </h2>

          {/* Realtor Section */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Your Realtor</h3>
            <p className="text-gray-700 mb-4">
              Your Realtor® plays the most crucial role in your home-buying
              journey. Their responsibilities include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Finding your ideal home</li>
              <li>Writing and submitting purchase offers</li>
              <li>Negotiating the best possible deal</li>
              <li>Providing community information</li>
              <li>Coordinating home inspections</li>
              <li>Saving you time, trouble, and money</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Don't hesitate to ask questions about service charges when
              selecting an agent. While vendors typically pay the commission,
              some agents may charge buyers additional fees.
            </p>
          </div>

          {/* Mortgage Section */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Lender/Mortgage Broker
            </h3>
            <p className="text-gray-700 mb-4">
              Start your mortgage pre-qualification early. Various institutions
              offer mortgages: banks, trust companies, credit unions, pension
              funds, and more. Compare multiple lenders as terms and options
              vary significantly.
            </p>
            <p className="text-gray-700 mb-6">
              Consider working with a mortgage broker who can find the best
              terms and rates across multiple lenders.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-lg mb-2">
                  Katherine McIntyre
                </h4>
                <p className="text-gray-600">Mortgage Alliance</p>
                <p className="text-black">519-719-9415</p>
                <a
                  href="mailto:kmcintyre@mortgagealliance.com"
                  className="text-black hover:underline"
                >
                  kmcintyre@mortgagealliance.com
                </a>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-lg mb-2">David Yuzpe</h4>
                <p className="text-gray-600">Real Mortgage Associates</p>
                <p className="text-black">519-670-6427</p>
                <a
                  href="mailto:davidyuzpe@rmabroker.ca"
                  className="text-black hover:underline"
                >
                  davidyuzpe@rmabroker.ca
                </a>
              </div>
            </div>
          </div>

          {/* Legal Section */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Legal Support</h3>
            <p className="text-gray-700 mb-4">
              A lawyer protects your legal interests by checking for liens,
              reviewing contracts, and ensuring a smooth property transfer.
              Choose a lawyer who:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              {LawyerRequirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Jordan Overholt</h4>
                <p className="text-gray-600">
                  380 Wellington Street Tower B, 6th Floor
                </p>
                <p className="text-black">226-926-9007</p>
                <a
                  href="mailto:jordan@jtoverholt.com"
                  className="text-black hover:underline"
                >
                  jordan@jtoverholt.com
                </a>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Doug Cassino</h4>
                <p className="text-gray-600">153-759 Hyde Park Road</p>
                <p className="text-black">519-472-6310</p>
                <a
                  href="mailto:cassinolaw@execulink.com"
                  className="text-black hover:underline"
                >
                  cassinolaw@execulink.com
                </a>
              </div>
            </div>
          </div>

          {/* Home Inspector Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Home Inspection</h3>
            <p className="text-gray-700 mb-4">
              A professional home inspection is crucial. Your inspector will
              evaluate the property's condition, identify issues, and highlight
              potential concerns. Every inspection should cover:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {HomeInspectionChecklist.map((item, index) => (
                <li key={index} className="text-gray-700 list-none">
                  • {item}
                </li>
              ))}
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm mb-6">
              <h4 className="font-semibold text-lg mb-2">David Kelly RHI</h4>
              <p className="text-gray-600">Valley Home Inspection Inc.</p>
              <p className="text-gray-600">London - St. Thomas</p>
              <p className="text-black">519-319-7589</p>
            </div>
            <div className=" p-4 rounded-md">
              <h4 className="font-semibold mb-2">W.E.T.T. Inspections</h4>
              <p className="text-gray-700 mb-4">
                A WETT inspection examines your solid fuel burning system for
                safety and compliance. Often required for home insurance.
              </p>
              <div className="text-gray-700">
                <p className="font-medium">Safe Home Fireplace</p>
                <p>519-245-7080</p>
                <a
                  href="mailto:info@safehomefireplace.ca"
                  className="text-black hover:underline"
                >
                  info@safehomefireplace.ca
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <Link
            href="/appointment"
            className="inline-block bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </section>
      </div>
    </div>
  );
};

export default BuyerPage;
