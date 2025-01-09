"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const RecentSales = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
        <h2 className="text-2xl md:text-5xl tracking-tight font-extrabold leading-[1.2] md:leading-[1.2] bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent pb-2 text-center">
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
