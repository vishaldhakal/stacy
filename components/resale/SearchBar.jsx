"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { CgSearch } from "react-icons/cg";
import { searchProperties } from "@/app/_resale-api/getSalesData";
import debounce from "lodash.debounce";
import Autosuggest from "./Autosuggest";
import useDeviceView from "@/helpers/useDeviceView";

const ResaleSearchBar = ({
  numberOfSuggestions = 10,
  small = false,
  placeholder = "Search by address, city, neighbourhood or postal code",
}) => {
  const [displaySuggestions, setDisplaySuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { isMobileView } = useDeviceView();
  // Debouncing
  const handleChange = async (value) => {
    await getSuggestions(value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(async (value) => await handleChange(value), 100);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  }, []);

  const getSuggestions = async (searchTerm) => {
    const inputValueLowerCase = searchTerm?.trim()?.toLowerCase();
    const filteredCities = citiesWithProvinces.filter((data) =>
      data.city.toLowerCase().includes(inputValueLowerCase)
    );
    // return filteredCities;
    const filteredProperties = await searchProperties(searchTerm);
    console.log(filteredProperties);
    // const addressArray = filteredProperties.map((property, idx) => {
    //   return property.Address;
    // });
    setSuggestions([...filteredCities, ...filteredProperties]);
  };
  const citiesWithProvinces = [
    { city: "Barrie", province: "Ontario" },
    { city: "Belleville", province: "Ontario" },
    { city: "Brampton", province: "Ontario" },
    { city: "Brant", province: "Ontario" },
    { city: "Brantford", province: "Ontario" },
    { city: "Brockville", province: "Ontario" },
    { city: "Burlington", province: "Ontario" },
    { city: "Cambridge", province: "Ontario" },
    { city: "Clarence-Rockland", province: "Ontario" },
    { city: "Cornwall", province: "Ontario" },
    { city: "Dryden", province: "Ontario" },
    { city: "Elliot Lake", province: "Ontario" },
    { city: "Greater Sudbury", province: "Ontario" },
    { city: "Guelph", province: "Ontario" },
    { city: "Haldimand County", province: "Ontario" },
    { city: "Hamilton", province: "Ontario" },
    { city: "Kawartha Lakes", province: "Ontario" },
    { city: "Kenora", province: "Ontario" },
    { city: "Kingston", province: "Ontario" },
    { city: "Kitchener", province: "Ontario" },
    { city: "London", province: "Ontario" },
    { city: "Markham", province: "Ontario" },
    { city: "Mississauga", province: "Ontario" },
    { city: "Niagara Falls", province: "Ontario" },
    { city: "Norfolk County", province: "Ontario" },
    { city: "North Bay", province: "Ontario" },
    { city: "Orillia", province: "Ontario" },
    { city: "Oshawa", province: "Ontario" },
    { city: "Ottawa", province: "Ontario" },
    { city: "Owen Sound", province: "Ontario" },
    { city: "Pembroke", province: "Ontario" },
    { city: "Peterborough", province: "Ontario" },
    { city: "Pickering", province: "Ontario" },
    { city: "Port Colborne", province: "Ontario" },
    { city: "Prince Edward County", province: "Ontario" },
    { city: "Quinte West", province: "Ontario" },
    { city: "Richmond Hill", province: "Ontario" },
    { city: "Sarnia", province: "Ontario" },
    { city: "Sault Ste Marie", province: "Ontario" },
    { city: "St Catharines", province: "Ontario" },
    { city: "St Thomas", province: "Ontario" },
    { city: "Stratford", province: "Ontario" },
    { city: "Temiskaming Shores", province: "Ontario" },
    { city: "Thorold", province: "Ontario" },
    { city: "Thunder Bay", province: "Ontario" },
    { city: "Timmins", province: "Ontario" },
    { city: "Toronto", province: "Ontario" },
    { city: "Vaughan", province: "Ontario" },
    { city: "Waterloo", province: "Ontario" },
    { city: "Welland", province: "Ontario" },
    { city: "Windsor", province: "Ontario" },
    { city: "Woodstock", province: "Ontario" },
    { city: "Ajax", province: "Ontario" },
    { city: "Whitby", province: "Ontario" },
    { city: "Courtice", province: "Ontario" },
    { city: "Bowmanville", province: "Ontario" },
    { city: "Innisfil", province: "Ontario" },
    { city: "Bradford", province: "Ontario" },
  ];

  //style for input box
  let inputBoxClass = [];
  if (!small && !displaySuggestions) {
    inputBoxClass.push("border-2 border-gray-300");
  } else if (!displaySuggestions) {
    inputBoxClass.push("border-1 border-gray-300");
  }
  if (displaySuggestions) {
    inputBoxClass.push("border-1 border-gray-300 rounded-t-md");
  } else {
    inputBoxClass.push("rounded-md");
  }

  return (
    <div className={`flex flex-col relative rounded-md shadow-xl`}>
      <div
        className={`w-full h-full flex overflow-hidden ${inputBoxClass.join(
          " "
        )} shadow-none! z-10`}
      >
        <input
          className={`w-full ${
            small ? "py-1" : "py-3"
          } px-2 focus:outline-none focus:shadow-2xl text-center placeholder:text-center placeholder:text-sm sm:placeholder:text-medium`}
          placeholder={displaySuggestions ? "" : placeholder}
          onChange={(e) => {
            setDisplaySuggestions(true);
            setSearchTerm(e.target.value);
            debouncedResults(e.target.value);
          }}
          onFocus={() => {
            setDisplaySuggestions(true);
          }}
          onBlur={() => {
            setTimeout(() => setDisplaySuggestions(false), 200);
          }}
          value={searchTerm}
        />
        <div className="flex items-center pr-1 pl-0 justify-center bg-white">
          {/* <CgSearch size="1.25rem" /> */}
          {/* {!small && !isMobileView ? (
            <Button className={`bg-black rounded-full text-white font-medium`}>
              {" "}
              Search{" "}
            </Button>
          ) : small ? (
            <CgSearch size="1.25rem" className="mr-2" />
          ) : (
          )} */}
          <CgSearch size={small ? "1.2rem" : `1.75rem`} className="mr-2" />
        </div>
      </div>
      <div className="relative">
        {displaySuggestions && (
          <Autosuggest
            displaySuggestions={displaySuggestions}
            searchTerm={searchTerm}
            suggestions={suggestions}
            numberOfSuggestions={numberOfSuggestions}
            setSearchTerm={setSearchTerm}
          />
        )}
      </div>
    </div>
  );
};

export default ResaleSearchBar;
