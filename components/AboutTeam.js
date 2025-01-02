import Image from "next/image";
import Link from "next/link";

const AboutTeam = () => {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 my-6 md:my-16 bg-gradient-to-b from-amber-50/50 to-white"
      id="about"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-3xl lg:text-4xl relative inline-block">
            "Stacy & Louise Realty Team: Experience You Can Trust"
            <div className="absolute -bottom-2 w-full h-1 bg-amber-400/30"></div>
          </h2>
          <p className="mt-6 text-sm sm:text-lg text-black max-w-2xl mx-auto">
            A husband and wife team that strives to make your real estate goals
            come true!
          </p>
        </div>

        {/* Profile Image - Centered */}
        <div className="flex justify-center mb-0">
          <div className="relative w-56 h-56 lg:w-64 lg:h-64">
            <Image
              src="/stacy.png"
              alt="Stacy Anastasiadis"
              fill
              className="object-cover rounded-full shadow-lg border-4 border-amber-100"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 items-start max-w-5xl mx-auto">
          {/* Stacy's Section */}
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-gray-900">
              Stacy Anastasiadis
            </h3>
            <p className="text-sm text-black mb-6 font-medium">
              Real Estate Agent | 20+ Years Experience
            </p>
            <p className="text-sm sm:text-base text-black leading-relaxed">
              With over 20 years in real estate serving London and surrounding
              territories, I specialize in residential sales, commercial
              investments, and vacant land transactions. My vast experience
              allows me to provide valuable insights and expertise to my
              clients.
            </p>
          </div>

          {/* Louise's Section */}
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1 pb-0">
              Louise Anastasiadis
            </h3>
            <p className="text-sm text-black mb-6 mt-0 font-medium pb-0 leading-none">
              Licensed Realtor | Former Banking Professional
            </p>
            <p className="text-sm sm:text-base text-black leading-relaxed">
              After 25+ years in banking specializing in mortgage financing and
              customer relations, I joined Stacy as his assistant and recently
              became a licensed Realtor. My background in financial services
              adds valuable perspective to our team's offerings.
            </p>
          </div>
        </div>

        {/* Team Value Proposition */}
        <div className="mt-16 lg:mt-20 text-center max-w-3xl mx-auto bg-amber-50/50 p-8 rounded-2xl">
          <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
            "Together, we make your life easier and your transition seamless.
            Our combined experience in real estate and banking ensures you'll
            feel comfortable and confident throughout your real estate journey."
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-medium text-white bg-black rounded-xl shadow-md hover:bg-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
