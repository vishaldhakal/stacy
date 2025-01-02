"use client";
import React, { useState } from "react";

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
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
    console.log(formData);
  };

  return (
    <section className="min-h-screen bg-white py-12 sm:py-16 lg:py-20 px-4">
      <div className="text-center mb-5">
        <div className="flex justify-center">
          <img src="/stacy.png" alt="logo" className="w-32 h-32" />
        </div>
        <h2 className="text-5xl font-extrabold text-gray-900 sm:text-3xl lg:text-5xl text-center mt-4">
          Get in Touch
        </h2>
        <p className="mt-3 text-sm sm:text-lg text-black max-w-2xl mx-auto">
          Have questions about buying or selling?
        </p>
      </div>
      <div className="max-w-[1000px] mx-auto mt-16 bg-gray-50 p-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-black text-md font-semibold tracking-wider">
                  Sutton Group Select Realty Inc. Brokerage
                </h3>
              </div>
              <div className="text-gray-700 ml-9 space-y-1">
                <p>250 Wharncliffe Road North</p>
                <p>London, ON</p>
                <p>N6H 2B8 Canada</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <a
                href="mailto:admin@condowong.ca"
                className="text-black hover:text-amber-600"
              >
                stacyanast@yahoo.ca
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <a
                href="tel:+19058826882"
                className="text-black hover:text-amber-600"
              >
                519 933-7344
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <a
                href="tel:+16476293838"
                className="text-black hover:text-amber-600"
              >
                519 433-4331
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-300 text-gray-900 px-0 py-2 focus:outline-none focus:border-black placeholder-gray-500"
                    placeholder="First Name *"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-300 text-gray-900 px-0 py-2 focus:outline-none focus:border-black placeholder-gray-500"
                    placeholder="Last Name *"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-300 text-gray-900 px-0 py-2 focus:outline-none focus:border-black placeholder-gray-500"
                  placeholder="Email *"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-300 text-gray-900 px-0 py-2 focus:outline-none focus:border-black placeholder-gray-500"
                  placeholder="Subject *"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-300 text-gray-900 px-0 py-2 focus:outline-none focus:border-black resize-none placeholder-gray-500"
                  placeholder="Message *"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white px-12 py-3 font-medium hover:bg-amber-600 transition-colors duration-200 w-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentPage;
