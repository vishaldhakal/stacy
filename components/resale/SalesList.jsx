"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

//HELPERS
import capitalizeFirstLetter from "@/helpers/capitalizeFirstLetter";
import { ImSpinner } from "react-icons/im";

//COMPONENT

//SERVER
import { getFilteredRetsData } from "@/app/_resale-api/getSalesData";

//CONSTANT
import { saleLease, bedCount, houseType } from "@/constant";
import ResaleCard from "./ResaleCard";
import CreateSchema from "@/helpers/CreateSchema";
import PageSelector from "./PageSelector";

const SalesList = ({
  salesData,
  city,
  INITIAL_LIMIT,
  setSalesData,
  offset,
  setOffset,
  filterState,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const _getMergedHouseType = (state) => {
    let mergedHouseType = [];
    const selectedHouseType = Object.values(houseType).filter((type) =>
      state.type.includes(type.value)
    );
    for (const type of selectedHouseType) {
      if (type.value === null) {
        mergedHouseType = null;
        break;
      } else {
        mergedHouseType.push(type.value);
      }
    }
    return mergedHouseType;
  };

  const loadMoreSalesData = async () => {
    const queryParams = {
      offset,
      limit: INITIAL_LIMIT,
      city: capitalizeFirstLetter(city),
      saleLease: Object.values(saleLease).filter(
        (state) => state.name === filterState.saleLease
      )[0].value,
      bed: Object.values(bedCount).find(
        (bedObj) => bedObj.name === filterState.bed
      )?.value,
      minListPrice: Number(filterState.priceRange?.min ?? 0),
      maxListPrice: Number(filterState.priceRange?.max ?? 0),
      houseType: _getMergedHouseType(filterState),
      hasBasement: filterState.hasBasement,
      sepEntrance: filterState.sepEntrance,
      washroom: filterState.washroom,
      priceDecreased: filterState.priceDecreased,
    };

    setIsLoading(true);
    const moreSalesListData = await getFilteredRetsData(queryParams);

    // setSalesData([...salesData, ...moreSalesListData]);
    setSalesData([...moreSalesListData]);
    setOffset((prev) => {
      return prev + INITIAL_LIMIT;
    });
    setIsLoading(false);
  };

  // useEffect(() => {
  //   if (inView) {
  //     loadMoreSalesData();
  //   }
  // }, [inView]);

  const setPage = () => {
    setSalesData([]);
    setIsLoading(true);
    loadMoreSalesData();
  };
  return (
    <>
      {salesData?.length > 0 ? (
        <>
          {salesData?.map((curElem, index) => {
            return (
              <div key={curElem.ListingKey}>
                <script
                  key={curElem.Address}
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify(CreateSchema(curElem)),
                  }}
                />
                <ResaleCard curElem={curElem} />
              </div>
            );
            // }
            // return null
          })}
          {/* <div ref={ref} className="flex justify-center items-center w-100">
            {isLoading ? <ImSpinner size={24} /> : null}
          </div> */}
        </>
      ) : (
        <div className="fs-4 text-center flex w-100 flex-col items-center">
          <Image
            src="/no-record-found.jpg"
            width="500"
            height="500"
            alt="no record found"
          />
          <p>No Records Found</p>
        </div>
      )}
    </>
  );
};

export default SalesList;
