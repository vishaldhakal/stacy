"use client";
import { generateURL } from "@/helpers/generateResaleURL";
import Link from "next/link";
import React, { useRef } from "react";
import { CSSTransition, Transition } from "react-transition-group";
import { CgPin } from "react-icons/cg";

const Autosuggest = ({
  displaySuggestions,
  searchTerm,
  suggestions,

  numberOfSuggestions,
  setSearchTerm,
}) => {
  //For enter & exit animation
  // const [inProp, setInProp] = useState(false);

  const recentSearchArray =
    typeof window !== "undefined"
      ? JSON.parse(window.localStorage.getItem("searchValue"))
      : [];
  return (
    <div
      className={`absolute top-0 border-r-1 border-l-1 border-b-1 border-gray-300 rounded-b-md w-full bg-white p-4 overflow-hidden shadow-xl z-0 ${
        displaySuggestions
          ? "searchbar-animation-open"
          : "searchbar-animation-close"
      }`}
    >
      {/* <section className="my-1 flex items-center cursor-pointer rounded-lg hover:bg-lime-100 px-2">
              <CgTrack size="1.25rem" />
              <div className="ml-2 py-4">Current Location</div>
            </section> */}

      {/* SUGGESTIONS */}
      <div className="text-xs text-center text-gray-600 font-bold">
        SUGGESTIONS
      </div>
      {searchTerm && suggestions.length > 0 ? (
        <section className="my-1">
          <div>
            {suggestions.slice(0, numberOfSuggestions).map((suggestion) => {
              return (
                <SearchOption
                  suggestion={suggestion}
                  setSearchTerm={setSearchTerm}
                  key={suggestion?.ListingKey || suggestion?.city}
                />
              );
            })}
          </div>
          <span className="text-gray-700"></span>
        </section>
      ) : (
        <div className="text-gray-400 text-sm mt-2 mb-6">
          No search results found.
        </div>
      )}

      {/* RECENT SEARCHES */}
      {typeof window !== "undefined" &&
        recentSearchArray &&
        recentSearchArray.length > 0 && (
          <section
            className={`my-1 ${
              suggestions.length > 0 && searchTerm && "border-t-1 mt-2 pt-2"
            }`}
          >
            <div className="text-xs text-gray-600 font-bold text-center">
              RECENT SEARCHES
            </div>
            <div>
              {[...new Set(recentSearchArray)]?.map((suggestion) => (
                <SearchOption
                  suggestion={JSON.parse(suggestion)}
                  key={suggestion?.ListingKey || suggestion?.city}
                />
              ))}
            </div>
          </section>
        )}
    </div>
  );
};

const SearchOption = ({ suggestion, setSearchTerm }) => {
  const addToLocalStorage = () => {
    if (window) {
      let searchesArray =
        JSON.parse(window.localStorage.getItem("searchValue")) || [];
      if (suggestion?.ListingKey) {
        const searchObj = JSON.stringify({
          UnparsedAddress: suggestion?.UnparsedAddress,
          CountyOrParish: suggestion?.CountyOrParish,
          ListingKey: suggestion?.ListingKey,
        });
        searchesArray.unshift(searchObj);
        if (searchesArray.length > 3) searchesArray = searchesArray.slice(0, 3);
        window.localStorage.setItem(
          "searchValue",
          JSON.stringify(searchesArray)
        );
      } else {
        const searchObj = JSON.stringify({
          province: suggestion?.province,
          city: suggestion?.city,
        });
        searchesArray.unshift(searchObj);
        if (searchesArray.length > 3) searchesArray = searchesArray.slice(0, 3);
        window.localStorage.setItem(
          "searchValue",
          JSON.stringify(searchesArray)
        );
      }
    }
  };
  return (
    <Link
      href={
        suggestion?.ListingKey
          ? generateURL({
              listingIDVal: suggestion.ListingKey,
              cityVal: suggestion?.CountyOrParish,
            }) //for a listing
          : generateURL({ cityVal: suggestion?.city })
      }
      onClick={() => {
        setSearchTerm("");
        addToLocalStorage();
      }}
      className="w-full py-2 flex justify-center items-center cursor-pointer rounded-lg hover:bg-lime-100 px-2"
      // key={suggestion?.ListingKey || suggestion?.city}
    >
      <div className="flex justify-between me-3">
        <div className="flex justify-center items-center">
          <div>
            <CgPin className="1.25rem"></CgPin>
          </div>

          <span className="ml-2 text-center">
            {suggestion?.UnparsedAddress || suggestion.city}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Autosuggest;
