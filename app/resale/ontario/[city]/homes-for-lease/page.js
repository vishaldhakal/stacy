import React from "react";
import dynamic from "next/dynamic";

import capitalizeFirstLetter from "@/helpers/capitalizeFirstLetter";
import { getSalesData } from "@/app/_resale-api/getSalesData";
import { ImSpinner } from "react-icons/im";

const FiltersWithSalesList = dynamic(
  () => import("@/components/resale/FiltersWithSalesList"),
  {
    loading: () => (
      <div className="flex justify-center align-item-center">
        <ImSpinner size={24} />
      </div>
    ),
  }
);

const INITIAL_LIMIT = 30;
const page = async ({ params }) => {
  const city = params.city.split("-").join(" ");
  const formattedSlug = encodeURIComponent(capitalizeFirstLetter(city));
  const salesListData = await getSalesData(0, INITIAL_LIMIT, formattedSlug);
  const saleLeaseVal = "lease";
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="">
          <div className="">
            <FiltersWithSalesList
              {...{ salesListData, INITIAL_LIMIT, city, saleLeaseVal }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export async function generateMetadata({ params }, parent) {
  const formattedCity = capitalizeFirstLetter(params.city.replace("-", " "));
  return {
    ...parent,
    alternates: {
      canonical: `https://homebaba.ca/ontario/${params.city}/homes-for-lease`,
    },
    openGraph: {
      images: "/favicon.ico",
    },
    title: [
      `100+ ${formattedCity} Detached, Semi detached & Townhomes for lease`,
      ,
      "New Listings",
      "Homebaba.ca",
    ].join(" | "),
    description: `Find houses for sale in ${formattedCity}, ON. Visit Homebaba.ca to see all the ${params.city}, ON real estate listings on the MLS® Systems today! Prices starting at $1 💰`,
  };
}

export default page;
