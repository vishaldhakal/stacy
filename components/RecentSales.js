"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const RecentSales = () => {
  const [hovegreenIndex, setHovegreenIndex] = useState(null);

  const sales = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `/latest/${i + 1}.jpeg`,
    address: "123 Main Street",
    price: "$789,900",
    date: "March 2024",
  }));

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-5xl tracking-tight font-extrabold leading-[1.2] md:leading-[1.2] text-black pb-2 text-center">
          Our Recent Sales
        </h2>
        <p className="mt-0 text-lg leading-6 text-gray-700">
          Take a look at our latest successful transactions in the London area
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {sales.map((sale, index) => (
          <div
            key={sale.id}
            className="relative group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="absolute top-2 right-2 z-10">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                Sold
              </span>
            </div>

            <div className="relative h-48 sm:h-56">
              <Image
                src={sale.image}
                alt={`Recent sale ${sale.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          Ready to buy or sell your property? Let's make your home our next
          success story.
        </p>
        <Link
          href="/appointment"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-200"
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default RecentSales;
