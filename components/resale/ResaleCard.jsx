"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TimeAgo from "./TimeAgo";
import { residential } from "@/app/_resale-api/routes/fetchRoutes";
import { houseType, saleLease } from "@/constant";
import { generateURL } from "@/helpers/generateResaleURL";

import Favorite from "./Favorite";
import { isLocalStorageAvailable } from "@/helpers/checkLocalStorageAvailable";
import { getImageUrls } from "@/app/_resale-api/getSalesData";
import { Spinner } from "@nextui-org/react";
import Image from "next/image";

const ResaleCard = ({ curElem, small = false, showDecreasedPrice = false }) => {
  // const [address, setAddress] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const price = Number(curElem.ListPrice).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const mapObj = {
    MLS: curElem.ListingKey,
    index: 1,
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = `/noimage.webp`;
  };

  // const streetAndMLS = curElem.StreetName
  //   ? `${curElem.StreetNumber}-${curElem.StreetName?.replace(" ", "-")}-${
  //       curElem.StreetSuffix
  //     }-${curElem.ListingKey}`
  //   : curElem.ListingKey;

  const streetAndMLS = (() => {
    const parts = [];

    if (curElem.StreetNumber) {
      parts.push(curElem.StreetNumber.replace("/", "-"));
    }

    if (curElem.StreetName) {
      const streetName = curElem.StreetName.trim().replace(/ /g, "-");
      parts.push(streetName);
    }

    if (curElem.StreetSuffix) {
      parts.push(curElem.StreetSuffix);
    }

    if (curElem.ListingKey) {
      parts.push(curElem.ListingKey);
    }
    return parts.filter(Boolean).join("-");
  })();

  // Favoriting
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    if (
      window.localStorage.getItem("favorites") &&
      JSON.parse(window.localStorage.getItem("favorites")).includes(
        curElem.ListingKey
      )
    ) {
      setIsFavorite(true);
    }
    setLoadingImage(true);
    getImageUrls({ MLS: curElem.ListingKey, thumbnailOnly: true }).then(
      (url) => {
        setImgUrl(url[0]);
        setLoadingImage(false);
      }
    );
  }, []);
  const toggleFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const favoriteValue = window.localStorage.getItem("favorites");
    if (!isFavorite && isLocalStorageAvailable()) {
      const favorites = favoriteValue
        ? JSON.parse(window.localStorage.getItem("favorites"))
        : [];
      favorites.push(curElem.ListingKey);
      const value = JSON.stringify(favorites);
      window.localStorage.setItem("favorites", value);
    } else if (isFavorite && isLocalStorageAvailable()) {
      const favorites = favoriteValue
        ? JSON.parse(window.localStorage.getItem("favorites"))
        : [];
      const value = JSON.stringify(
        favorites.filter((val) => val !== curElem.ListingKey)
      );
      window.localStorage.setItem("favorites", value);
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <section className="relative transition-all duration-200 transform bg-white group rounded-xl hover:shadow-lg hover:-translate-y-1 overflow-hidden border border-gray-200">
      <Link
        href={generateURL({
          cityVal: curElem.CountyOrParish,
          listingIDVal: streetAndMLS,
        })}
        className="text-black"
      >
        <div className="lg:px-0 h-full w-full">
          <div className={`flex flex-col overflow-hidden relative`}>
            <div className="h-[220px] overflow-hidden relative">
              <div className="h-full relative z-10">
                {loadingImage ? (
                  <Spinner />
                ) : (
                  <img
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                    src={imgUrl}
                    width="900"
                    height="800"
                    alt="property image"
                    onError={handleImageError}
                  />
                )}
              </div>

              <div className="absolute bottom-3 left-2 flex flex-row z-20">
                <div className="text-black text-xs p-1 px-2 shadow-sm rounded-md mx-1 bg-white/90 flex items-center">
                  {curElem.PropertySubType}
                </div>
                {curElem.ApproxSquareFootage && (
                  <div className="text-black text-xs p-1 px-2 shadow-sm rounded-md mx-1 bg-white/90 items-center">
                    {curElem.ApproxSquareFootage} Sq.Ft.
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 p-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h2 className="font-bold text-2xl items-center justify-start">
                  <span className="font-bold text-black">{price}</span>
                  {curElem.SaleLease === saleLease.lease.value && (
                    <span> /mo</span>
                  )}
                </h2>
                <div className="text-xs font-medium text-red-600">
                  <TimeAgo
                    modificationTimestamp={curElem.OriginalEntryTimestamp}
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 mt-3 text-sm">
                {curElem.BedroomsTotal && (
                  <div className="flex items-center">
                    <img
                      src="/resale-card-img/bedrooms.svg"
                      className="w-3 mr-1"
                      alt="bedrooms"
                    />
                    <span>{Math.floor(curElem.BedroomsTotal)} bed</span>
                  </div>
                )}
                {curElem.BathroomsTotalInteger && (
                  <div className="flex items-center">
                    <img
                      src="/resale-card-img/bathrooms.svg"
                      className="w-3 mr-1"
                      alt="washrooms"
                    />
                    <span>
                      {Math.floor(curElem.BathroomsTotalInteger)} bath
                    </span>
                  </div>
                )}
                {curElem.GarageParkingSpaces && (
                  <div className="flex items-center">
                    <img
                      src="/resale-card-img/garage.svg"
                      className="w-3 mr-1"
                      alt="garage"
                    />
                    <span>
                      {Math.floor(curElem.GarageParkingSpaces)} garage
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <div className="text-black">
                  <div className="text-sm">
                    {curElem.StreetName ? (
                      `${curElem.StreetNumber} ${curElem.StreetName}${" "}
                    ${curElem.StreetSuffix} ${curElem.CountyOrParish}, Ontario`
                    ) : (
                      <span className="p-4"></span>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                MLS® {curElem.ListingKey}
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className={`absolute ${"top-4"} right-2 z-10`}>
        <Favorite
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
          MLS={curElem.ListingKey}
          size={4}
        />
      </div>
    </section>
  );
};

export default ResaleCard;
