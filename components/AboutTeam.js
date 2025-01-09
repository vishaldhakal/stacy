import Image from "next/image";
import Link from "next/link";

const AboutTeam = () => {
  return (
    <>
      <section
        className="py-12 sm:py-16 lg:py-20 my-6 md:my-16 relative"
        id="about"
      >
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-amber-50"></div>

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-3xl lg:text-4xl relative inline-block">
              "Stacy & Louise Realty Team: Experience You Can Trust"
              <div className="absolute -bottom-2 w-full h-1 bg-amber-400/30"></div>
            </h2>
            <p className="mt-6 text-sm sm:text-lg text-black max-w-2xl mx-auto">
              A husband and wife team that strives to make your real estate
              goals come true!
            </p>
          </div>
          {/* Profile Images - Centered */}
          <div className="flex justify-center gap-8 mb-12 relative z-10">
            {/* Stacy's Image */}
            <div className="relative w-48 h-48 lg:w-56 lg:h-56">
              <Image
                src="/stacy.jpg"
                alt="Stacy Anastasiadis"
                fill
                className="object-cover rounded-full border-4 border-amber-100 shadow-[0_0_20px_rgba(0,0,0,0.1),0_10px_20px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(0,0,0,0.15),0_15px_25px_-15px_rgba(0,0,0,0.3)] transition-shadow duration-300"
                priority
              />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-b from-amber-100/20 to-transparent -z-10 blur-sm"></div>
            </div>

            {/* Louise's Image */}
            <div className="relative w-48 h-48 lg:w-56 lg:h-56">
              <Image
                src="/louise.jpg"
                alt="Louise Anastasiadis"
                fill
                className="object-cover rounded-full border-4 border-amber-100 shadow-[0_0_20px_rgba(0,0,0,0.1),0_10px_20px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(0,0,0,0.15),0_15px_25px_-15px_rgba(0,0,0,0.3)] transition-shadow duration-300"
                priority
              />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-b from-amber-100/20 to-transparent -z-10 blur-sm"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 items-start max-w-5xl mx-auto relative z-10">
            {/* Stacy's Section */}
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-gray-900">
                Stacy Anastasiadis
              </h3>
              <p className="text-sm text-black mb-6 font-medium">
                Licensed Realtor® | 20+ Years Experience
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
                Licensed Realtor® | Former Banking Professional
              </p>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                After 25+ years in banking specializing in mortgage financing
                and customer relations, I joined Stacy as his assistant and
                recently became a licensed Realtor. My background in financial
                services adds valuable perspective to our team's offerings.
              </p>
            </div>
          </div>{" "}
          {/* Team Value Proposition */}
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
