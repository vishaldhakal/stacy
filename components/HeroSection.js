import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-black sm:text-4xl leading-8">
              Hey 👋 I am <br className="block sm:hidden" /> Stacy Anastasiadis
            </h2>
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
      </div>
    </section>
  );
};

export default HeroSection;
