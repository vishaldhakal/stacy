import Image from "next/image";
import Link from "next/link";

const PromoSection = () => {
  return (
    <section className="pt-10 bg-amber-50 2xl:py-24 2xl:bg-white sm:pt-16 md:pt-0 my-10 md:my-20">
      <div className="px-4 mx-auto rounded-md bg-amber-50 max-w-7xl sm:px-6 lg:px-8">
        <div className="2xl:pl-24">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
            <div className="text-center md:py-16 xl:py-24 md:text-left">
              <blockquote>
                <p className="text-2xl font-semibold leading-relaxed text-gray-900">
                  I am a well established Realtor in the London area able to
                  negotiate Residential, Commercial, Multi-family, and
                  Development land transactions.
                </p>
              </blockquote>
              <div className="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                <p className="text-base font-semibold text-gray-900">
                  Stacy Anastasiadis
                </p>
                <p className="mt-2 text-base text-gray-700 sm:mt-0 sm:ml-2">
                  Sales Representative - Sutton Group
                </p>
              </div>
              <p className="mt-12 text-base text-gray-900 lg:mt-20">
                Want to see Stacy in action?
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 mt-4 text-base font-semibold text-white transition-all duration-200 bg-black rounded-md hover:opacity-80 focus:opacity-80"
                role="button"
              >
                Book an Appointment
              </Link>
            </div>

            <div className="relative">
              <Image
                className="md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20"
                src="/stac.png"
                alt="Smiling man in business attire"
                width={600}
                height={800}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
