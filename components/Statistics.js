"use client";
import { useState, useEffect, useRef } from "react";

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Properties Sold",
    description: "Successfully closed deals",
  },
  {
    number: 15,
    suffix: "+",
    label: "Years Experience",
    description: "In London real estate",
  },
  {
    number: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on client reviews",
  },
  {
    number: 50,
    suffix: "M+",
    label: "In Sales Volume",
    description: "Total transaction value",
  },
];

const StatCard = ({ number, suffix, label, description }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000; // Animation duration in milliseconds
          const steps = 50; // Number of steps in the animation
          const increment = number / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
              setCount(number);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [number]);

  return (
    <div
      ref={countRef}
      className="relative p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col items-center text-center">
        <div className="flex items-baseline">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-500">
            {count}
          </span>
          <span className="text-xl sm:text-2xl font-semibold text-amber-500 ml-1">
            {suffix}
          </span>
        </div>
        <h3 className="mt-3 text-base sm:text-lg font-semibold text-gray-900">
          {label}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const Statistics = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 my-6 md:my-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            Proven Track Record
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Years of experience and dedication in the London real estate market
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
