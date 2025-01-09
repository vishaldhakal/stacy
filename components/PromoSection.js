import Image from "next/image";
import Link from "next/link";

const PromoSection = () => {
  return (
    <section className="py-6 sm:py-12 bg-amber-50 2xl:py-24 2xl:bg-white my-6 md:my-20">
      <div className="px-4 mx-auto rounded-md bg-amber-50 max-w-7xl sm:px-6 lg:px-8">
        <div>
          <div className="grid grid-cols-1 gap-y-8 md:gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 order-1 md:col-span-2">
              <img
                src="/stacy-image.png"
                alt="Stacy Anastasiadis"
                className="w-40 sm:w-56 md:w-72 lg:w-80 h-auto object-cover rounded-lg"
              />
              <img
                src="/louise.png"
                alt="Louise Anastasiadis"
                className="w-40 sm:w-56 md:w-72 lg:w-80 h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="text-center py-6 sm:py-8 md:py-12 order-2 md:col-span-2 max-w-3xl mx-auto">
              <blockquote>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-gray-900">
                  "Together, we make your life easier and your transition
                  seamless. Our combined experience in real estate and banking
                  ensures you'll feel comfortable and confident throughout your
                  real estate journey."
                </p>
              </blockquote>
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                <p className="text-sm sm:text-base font-semibold text-gray-900">
                  Stacy & Louise Anastasiadis
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700">
                  The Anastasiadis Real Estate Team - Sutton Group
                </p>
              </div>
              <p className="mt-6 sm:mt-8 text-sm sm:text-base text-gray-900">
                Ready to start your real estate journey with us?
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 mt-4 text-sm sm:text-base font-semibold text-white transition-all duration-200 bg-black rounded-md hover:opacity-80 focus:opacity-80"
                role="button"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
