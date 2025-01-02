"use client";
import React, { useState } from "react";
import Image from "next/image";

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    AppointmentType: "buyer",
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
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-4 text-center">
              Book an Appointment
            </h1>
            <p className="text-lg text-gray-600">
              Let's discuss your real estate goals and create a plan that works
              for you
            </p>
          </div>

          {/* Appointment Types */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all text-center ${
                formData.AppointmentType === "buyer"
                  ? "border-black bg-black text-white"
                  : "border-gray-200 hover:border-black"
              }`}
              onClick={() =>
                handleChange({
                  target: { name: "AppointmentType", value: "buyer" },
                })
              }
            >
              <h3 className="text-lg font-semibold mb-2">Buyer Appointment</h3>
              <p className="text-sm opacity-100">
                First-time buyer or looking for your next property? Let's find
                your perfect home.
              </p>
            </div>

            <div
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all text-center ${
                formData.AppointmentType === "seller"
                  ? "border-black bg-black text-white"
                  : "border-gray-200 hover:border-black"
              }`}
              onClick={() =>
                handleChange({
                  target: { name: "AppointmentType", value: "seller" },
                })
              }
            >
              <h3 className="text-lg font-semibold mb-2">Seller Appointment</h3>
              <p className="text-sm opacity-90">
                Ready to sell? Let's discuss your property's value and marketing
                strategy.
              </p>
            </div>
          </div>

          {/* Booking Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white rounded-xl shadow-sm p-8 "
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent text-center"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent text-center"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent text-center"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent text-center"
                  required
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (4PM - 7PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent text-center"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent text-center"
                placeholder="Tell us about your real estate goals..."
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full max-w-md mx-auto px-6 py-4 text-base font-medium text-white bg-black rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
              >
                Schedule Appointment
              </button>
            </div>
          </form>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-center">
              Prefer to talk first? Call me directly at{" "}
              <a
                href="tel:+15199337344"
                className="text-black font-medium hover:underline"
              >
                (519) 933-7344
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentPage;
