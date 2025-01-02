"use client";
import { useState } from "react";
import Image from "next/image";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 my-6 md:my-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <Image
              src="/stacy.png"
              alt="Stacy Anastasiadis"
              width={140}
              height={128}
              className="rounded-full object-cover shadow-lg border-4 border-amber-500"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              Let's Connect
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              Have questions about buying or selling? I'm here to help you make
              the right move.
            </p>
          </div>

          {/* Contact Info */}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer h-14 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-amber-500"
                  placeholder="Name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all 
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4
                  peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Your Name
                </label>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer h-14 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-amber-500"
                  placeholder="Email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all 
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4
                  peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>

              {/* Phone Input */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="peer h-14 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-amber-500"
                  placeholder="Phone"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all 
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4
                  peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Phone Number
                </label>
              </div>

              {/* Property Type Select */}
              <div className="relative">
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="peer h-14 w-full border-b-2 border-gray-300 text-gray-900 bg-transparent focus:outline-none focus:border-amber-500"
                  required
                >
                  <option value="" disabled></option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="investment">Investment Property</option>
                  <option value="land">Land</option>
                </select>
                <label
                  htmlFor="propertyType"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all 
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4
                  peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Property Type
                </label>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-amber-500 resize-none"
                placeholder="Message"
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-amber-500 rounded-md shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <div className="flex justify-center lg:justify-start items-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <p className="text-gray-600 text-center lg:text-left text-xs">
                +1 (519) 933-7344
              </p>
            </div>
            <div>
              <div className="flex justify-center lg:justify-start items-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-600 text-center lg:text-left">
                stacy@sutton.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
