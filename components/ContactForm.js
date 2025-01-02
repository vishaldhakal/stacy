"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    isRealtor: "No",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-[700px] mx-auto px-4 py-12 sm:py-16">
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

      <form
        onSubmit={handleSubmit}
        className="space-y-6 mx-auto max-w-[300px] md:max-w-[600px]"
      >
        <div className="relative">
          <input
            type="text"
            id="fullName"
            className="block px-4 pb-2.5 pt-4 w-full h-14 text-gray-900 bg-white rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-black border border-gray-200 transition-all"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            placeholder=" "
          />
          <label
            htmlFor="fullName"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-5 scale-75 top-6 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Full Name
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="email"
              id="email"
              className="block px-4 pb-2.5 pt-4 w-full h-14 text-gray-900 bg-white rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-black border border-gray-200 transition-all"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-5 scale-75 top-6 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              Your email
            </label>
          </div>

          <div className="relative">
            <input
              type="tel"
              id="phone"
              className="block px-4 pb-2.5 pt-4 w-full h-14 text-gray-900 bg-white rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-black border border-gray-200 transition-all"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-5 scale-75 top-6 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              Phone
            </label>
          </div>
        </div>

        <div className="relative">
          <select
            id="isRealtor"
            className="block px-4 pb-2.5 pt-4 w-full h-14 text-gray-900 bg-white rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-black border border-gray-200 transition-all"
            value={formData.isRealtor}
            onChange={(e) =>
              setFormData({ ...formData, isRealtor: e.target.value })
            }
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
          <label
            htmlFor="isRealtor"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-5 scale-75 top-6 z-10 origin-[0] left-4"
          >
            Are you a realtor or working with one?
          </label>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="relative">
          <textarea
            id="message"
            rows={4}
            className="block px-4 pb-2.5 pt-4 w-full text-gray-900 bg-white rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-black border border-gray-200 transition-all resize-none"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder=" "
          />
          <label
            htmlFor="message"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-5 scale-75 top-6 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Enter your message
          </label>
        </div>

        <div className="text-[0.6rem] text-gray-500 leading-relaxed text-center">
          By submitting this form, you agree to be contacted regarding your real
          estate inquiry. Your information will be kept confidential and will
          not be shared with third parties.
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="w-full md:w-auto min-w-[200px] px-8 py-4 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-200 text-base font-medium"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
