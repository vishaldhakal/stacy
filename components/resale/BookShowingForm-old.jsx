"use client";

import { useEffect, useState } from "react";
import React from "react";
// import { fetchHostEmail } from "@/actions/fetchHostEmail";
import { usePathname } from "next/navigation";
// import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import { sendEmail } from "@/app/_resale-api/resend";
export default function BookShowingForm(props) {
  const pathname = usePathname();
  const [submitbtn, setSubmitbtn] = useState("Book now");
  const [credentials, setCredentials] = useState({
    name: "",
    phone: "",
    email: "",
    message: props.defaultmessage,
    proj_name: props.proj_name,
    city: props.city,
    realtor: "",
    domainEmail: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCredentials({
      name: "",
      phone: "",
      email: "",
      message: props.defaultmessage,
      proj_name: props.proj_name,
      city: props.city,
      realtor: "",
      domainEmail: "",
    });
    sendEmail({
      content: credentials,
      page: "Resale Page",
      title: `Inquiry for ${props.address} from Resale Property page`,
    });
    setSubmitbtn("Submitted!");
    // ContactFormSubmit(
    //   credentials,
    //   setSubmitbtn,
    //   setCredentials,
    //   contactType,
    //   leadEmail
    // );
  };

  const getEmail = async () => {
    const hostname = new URL(document.referrer).hostname;
    const email = await fetchHostEmail(hostname);
    setCredentials({
      ...credentials,
      domainEmail: email,
    });
  };
  useEffect(() => {
    if (pathname.includes("/embedded-site")) {
      getEmail();
    }
  }, []);
  return (
    <div
      className="fixed-title pe-0 shadow-lg sticky top-20 shadow-black-box-shadow"
      id="contact"
    >
      <div className="p-6 pb-0 box-shadow-custom rounded-mine bordt bg-white border-[#e8e9ea] flex-col items-center ">
        <h5 className="font-extrabold text-center text-3xl">Book a Showing!</h5>
        <p className="text-center  text-[1.1rem]">
          {/* with a {credentials.city}{" "}
          <span className="font-bold pr-1">Buyer's</span>
          agent */}
          Check out this home
        </p>

        {/* <div className="my-4"></div> */}
        <form
          method="POST"
          className="mb-3 mt-10 flex flex-col items-center"
          onSubmit={(e) => handleFormSubmit(e)}
          id="contactForm"
        >
          <div className="w-full">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder=""
                name="name"
                id="name"
                value={credentials.name}
                onChange={(e) => handleChange(e)}
                className="fields fff w-full px-4 pt-5 pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer placeholder:translate-y-1/2 placeholder:scale-100"
              />
              <label
                htmlFor="name"
                className="absolute left-0 px-4 text-gray-500 transition-all duration-300 peer-focus:-translate-y-[0.75] peer-focus:scale-30 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100"
              >
                Name
              </label>
            </div>
            <div className="relative mb-3">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder=""
                value={credentials.phone}
                onChange={(e) => handleChange(e)}
                required={true}
                className="fields fff w-full px-4 pt-5 pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer placeholder:translate-y-1/2 placeholder:scale-100"
              />
              <label
                htmlFor="phone"
                className="absolute left-0 px-4 text-gray-500 transition-all duration-300 peer-focus:-translate-y-[0.75] peer-focus:scale-30 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100"
              >
                Phone
              </label>
            </div>
            {/* <BookingDate handleChange={handleChange} /> */}
            {/* <div className="row me-0 row-cols-1 g-0">
              <div className="col">
                <div className="relative mb-3">
                  <input
                    type="email"
                    aria-describedby="emailHelp"
                    placeholder=""
                    name="email"
                    id="email"
                    value={credentials.email}
                    onChange={(e) => handleChange(e)}
                    className="fields fff w-full px-4 pt-5 pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer placeholder:translate-y-1/2 placeholder:scale-100"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 px-4 text-gray-500 transition-all duration-300 peer-focus:-translate-y-[0.75] peer-focus:scale-30 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100"
                  >
                    Your Email
                  </label>
                </div>
              </div>
            </div> */}
            <div className="w-full">
              <div className="mb-3">
                <textarea
                  id="message"
                  name="message"
                  className="w-full text-gray-500"
                  rows="2"
                  value={credentials.message}
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
            </div>
          </div>

          <div></div>

          <div className="mb-3">
            <div className="">
              {/* <Checkbox
                defaultSelected
                color="success"
                size="lg"
                radius="sm"
                className="flex"
                style={{ alignItems: "flex-start !important" }}
              ></Checkbox> */}
              <p className="text-gray-400 text-xs text-justify">
                I would like to receive marketing and promotional messages by
                telephone, text message, and email from Fara, including
                information and updates about properties of interest and the
                services and features of Fara and our selected partners. I may
                withdraw my consent at any time. Message and data rates may
                apply. Consent is not required to receive real estate services.
              </p>
            </div>
          </div>
          <input
            type="submit"
            value={submitbtn}
            className="px-4 py-2 !bg-primary-green !text-white px-4 py-2-md w-75 mb-3 rounded-full text-lg font-bold hover:cursor-pointer"
            id="subbtn"
          />
          <div className="border-b border-gray-300 my-4 w-full"></div>
          <div className="pb-4 pt-2 flex flex-col justify-center items-center">
            <span className="text-md block">Not a good time?</span>
            <Link href={"#"} className="text-red-700 font-bold text-lg block">
              Schedule a call
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
