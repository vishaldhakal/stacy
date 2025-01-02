import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center lg:text-left">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Hey 👋 I am <br className="block sm:hidden" /> Stacy Anastasiadis
            </h1>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              With over 15 years experience in the real estate industry, I am
              passionate about working with my clients by comprehending their
              needs and giving them the right advice.
            </p>

            <p className="mt-4 text-xl text-gray-600 md:mt-8">
              <span className="relative inline-block me-4">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                <span className="relative"> Have a question?</span>
              </span>
              <br className="block sm:hidden" />
              Ask me on{" "}
              <Link
                target="_blank"
                href="https://wa.me/5199337344"
                className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
              >
                WhatsApp
              </Link>
            </p>
          </div>
        </div>

        <div className="relative">
          <Image
            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
            src="/stacy.png"
            alt="Jenny Carter - Professional Portrait"
            width={600}
            height={800}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
