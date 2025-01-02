"use client";
import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownSection,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Switch,
  Slider,
  Chip,
  cn,
} from "@nextui-org/react";

//CONSTANT
import {
  bedCount,
  saleLease,
  houseType,
  washroomCount,
  priceRangesSaleProperties,
  priceRangesLeaseProperties,
} from "@/constant";

import useDeviceView from "@/helpers/useDeviceView";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { generateURL } from "@/helpers/generateResaleURL";
// import Dropdown from "./Dropdown";

const bgColor = {
  saleLease: "bg-black",
  priceDecreased: "bg-black",
  time: "bg-black",
  type: "bg-black",
  minTimestampSql: "bg-[#eb7e6c]/1",
  bed: "bg-black",
};

const textColor = {
  saleLease: "text-white",
  areas: "text-white",
  time: "text-black",
  type: "text-white",
  minTimestampSql: "text-black",
  bed: "text-white",
};

const Filters = ({ filterState, setFilterState, fetchFilteredData }) => {
  const [navbar, setNavbar] = useState(false);

  const { isMobileView } = useDeviceView();

  //options for lease or sale
  const saleLeaseOptions = Object.values(saleLease).map((item) => item.name);
  //options for bed count
  const bedCountOptions = Object.values(bedCount)
    .filter((opt) => opt.value > 0)
    .map((item) => item.name);
  //options for house type
  const houseTypeOptions = Object.values(houseType)
    .filter((item) => item.value)
    .map((item) => item.name);
  //options for washroom counts
  const washroomCountOptions = Object.values(washroomCount).map(
    (item) => item.name
  );

  const priceRangeOptionsSaleProperties = Object.keys(
    priceRangesSaleProperties
  );
  const priceRangeOptionsLeaseProperties = Object.keys(
    priceRangesLeaseProperties
  );

  //dynamic price range generator based on sale or lease options
  // const minMaxPrice = useMemo(() => {
  //   if (filterState.saleLease.includes(Object.values(saleLease)[1].name)) {
  //     //i.e for lease, display different min and max value
  //     return {
  //       min: 1500,
  //       max: 8000,
  //     };
  //   } else {
  //     return {
  //       min: 300000,
  //       max: 1500000,
  //     };
  //   }
  // }, [filterState]);

  const handleFilterChange = (name, value) => {
    const newFilterState = { ...filterState };
    newFilterState[name] = value;
    if (name === "saleLease") {
      //reset the price filter
      newFilterState["priceRange"] = {
        min: 0,
        max: 0,
      };
    }
    console.log(name, value);
    scrollToFilters();
    setFilterState({ ...newFilterState });
    fetchFilteredData(newFilterState);
  };

  const handlePriceChange = (name, value) => {
    const newFilterState = { ...filterState };
    const priceRange =
      filterState.saleLease == saleLease.sale.name
        ? priceRangesSaleProperties[value]
        : priceRangesLeaseProperties[value];
    newFilterState[name] = {
      min: priceRange.min,
      max: priceRange.max,
    };

    scrollToFilters();
    setFilterState({ ...newFilterState });
    fetchFilteredData(newFilterState);
  };

  const scrollToFilters = () => {
    //if window exists scroll to #contact smoothly
    if (window) {
      // Check for browser environment
      const contactElement = document.getElementById("filters");
      if (contactElement) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  const additonalFilterChange = (filteredValue) => {
    const newFilterState = { ...filterState, ...filteredValue };

    setFilterState({ ...newFilterState });

    fetchFilteredData(newFilterState);
  };

  useEffect(() => {
    const rect = document.body.getBoundingClientRect();
    if (window) {
      window.addEventListener("scroll", () => {
        setNavbar(false);
      });

      document.addEventListener("DOMContentLoaded", function () {
        // Code to ensure that the Slider component receives focus when clicked directly
        document
          .querySelector(".price-range__slider")
          .addEventListener("click", function (event) {
            const slider = event.target.closest(".max-w-md.slider");
            if (slider) {
              slider.focus();
            }
          });
      });
    }
  }, []);

  const allPriceRanges =
    filterState.saleLease == saleLease.sale.name
      ? priceRangesSaleProperties
      : priceRangesLeaseProperties;

  return (
    <>
      <div
        className={`justify-center sm:justify-start gap-2 gap-md-3 mt-2 sm:my-2 flex flex-wrap bg-white overflow-visible${
          navbar
            ? `filter__scrolled mt-4 pb-2 container-fluid`
            : `top-[0px] items-center`
        }`}
        id="filters"
      >
        <IndividualFilterButton
          options={saleLeaseOptions}
          name="saleLease"
          value={filterState.saleLease}
          handleFilterChange={handleFilterChange}
          city={filterState.city}
          type={filterState.type}
        />

        <div className="rounded-full sm:mr-4">
          {isMobileView ? (
            <IndividualFilter
              options={bedCountOptions}
              defaultValue={bedCountOptions[0]}
              name="bed"
              value={filterState.bed}
              setFilterState={setFilterState}
              handleFilterChange={handleFilterChange}
              isMobileView={isMobileView}
            />
          ) : (
            <IndividualFilterButtonNoLink
              options={bedCountOptions}
              defaultValue={filterState.bed}
              name="bed"
              value={filterState.bed}
              setFilterState={setFilterState}
              handleFilterChange={handleFilterChange}
            />
          )}
        </div>

        <div className="rounded-full overflow-hidden sm:mr-4 hover:shadow-lg">
          <IndividualFilter
            options={houseTypeOptions}
            defaultValue={
              Object.values(houseType).find((val) => val.value == null).name
            }
            name="type"
            value={filterState.type}
            setFilterState={setFilterState}
            handleFilterChange={handleFilterChange}
            isMulti={false}
            isMobileView={isMobileView}
            city={filterState.city}
            saleLease={filterState.saleLease}
          />
        </div>

        {/* {isMobileView ? (
          <div className="basement__filter">
            <IndividualFilterWithCancel
              name="hasBasement"
              {...{ handleFilterChange }}
              value={filterState.hasBasement}
            />
          </div>
        ) : null} */}

        {/* 
        <IndividualFilterNoOptions
          label="Price Decreased"
          name="priceDecreased"
          value={filterState.priceDecreased}
          handleFilterChange={handleFilterChange}
        /> */}
        {/* {!isMobileView ? (
          <div className="price-range__filter ml-2 h-[34px] pb-14 px-10 w-[25vw]">
            <div
              className={
                filterState.saleLease == "For Sale" ? "block" : "hidden"
              }
            >
              <PriceRangeFilter
                name="priceRange"
                value={filterState.priceRange}
                handleFilterChange={handleFilterChange}
                minMaxPrice={{
                  min: 300000,
                  max: 1500000,
                }}
              />
            </div>

            <div
              className={
                filterState.saleLease == "For Lease" ? "block" : "hidden"
              }
            >
              <PriceRangeFilter
                name="priceRange"
                value={filterState.priceRange}
                handleFilterChange={handleFilterChange}
                minMaxPrice={{ min: 1500, max: 8000 }}
              />
            </div>
          </div>
        ) : null} */}
      </div>
      <div className="flex justify-center sm:justify-start">
        <IndividualFilterButtonNoLink
          options={
            filterState.saleLease == saleLease.sale.name
              ? priceRangeOptionsSaleProperties
              : priceRangeOptionsLeaseProperties
          }
          name="priceRange"
          value={Object.keys(allPriceRanges).find(
            (opt) =>
              allPriceRanges[opt].min == filterState?.priceRange?.min &&
              allPriceRanges[opt].max == filterState?.priceRange?.max
          )}
          handleFilterChange={handlePriceChange}
          city={filterState.city}
          type={filterState.type}
        />
      </div>

      {/* <div className="rounded-full">
        <MoreFilter
          {...{ washroomCountOptions, additonalFilterChange, filterState }}
        />
      </div> */}
    </>
  );
};

const CustomDropdown = ({
  options,
  name,
  value,
  handleFilterChange,
  isMobileView,
  isMulti = false,
  defaultValue,
  city,
  saleLease,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState(
    isMulti ? [...value] : [value]
  );
  const dropdownRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const handleSelect = (option) => {
    let newValues;
    if (isMulti) {
      newValues = selectedValues.includes(option)
        ? selectedValues.filter((val) => val !== option)
        : [...selectedValues, option];
    } else {
      newValues = [
        Object.values(houseType).find((obj) => {
          if (obj.name == option) return obj.value;
        }).value,
      ];
      setIsOpen(false);
    }

    setSelectedValues(newValues);
    handleFilterChange(name, newValues.join(", ").replaceAll("_", " "));
  };

  return (
    <div className="inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-between
          capitalize text-xs sm:text-sm h-[28px] sm:h-[34px] 
          rounded-full px-3 border
          ${isMobileView ? "px-1 gap-1 min-w-[40px]" : "min-w-[120px]"}
          ${
            selectedValues[0] !== defaultValue
              ? `bg-black text-white border-black`
              : "border-gray-300 bg-white "
          }
          hover:shadow-md transition-all text-center
        `}
      >
        <span className="truncate">
          {Object.values(houseType).find((obj) => obj.value == selectedValues)
            ?.name || "House Type"}
        </span>
        <FaChevronDown
          size={10}
          className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className={`
            min-w-[200px] max-h-[300px] overflow-y-auto
            bg-white rounded-lg shadow-lg
            border border-gray-200
            mt-2
          `}
          style={{
            position: "absolute",
            zIndex: 1000,
            marginTop: "8px",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        >
          {options.map((option) => {
            if (name === "type") {
              const url = generateURL({
                cityVal: city,
                houseTypeVal: option,
                saleLeaseVal: saleLease,
              });

              return (
                <Link
                  key={option}
                  href={url}
                  className="
                    block w-full px-4 py-2
                    hover:bg-gray-100 
                    text-sm text-gray-700
                    cursor-pointer
                  "
                >
                  {option}
                </Link>
              );
            }

            return (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                className={`
                  px-4 py-2
                  hover:bg-gray-100 
                  text-sm cursor-pointer
                  ${
                    selectedValues.includes(option)
                      ? "bg-gray-50 text-black font-medium"
                      : "text-gray-700"
                  }
                `}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// Replace the IndividualFilter component with CustomDropdown
const IndividualFilter = (props) => {
  return <CustomDropdown {...props} />;
};

const MoreFilter = ({
  washroomCountOptions,
  additonalFilterChange,
  filterState,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [moreFilterState, setMoreFilterState] = useState({
    hasBasement: filterState.hasBasement,
    sepEntrance: filterState.sepEntrance,
    washroom: filterState.washroom,
  });

  const _handleFilterChange = (name, value) => {
    const newFilterState = {
      ...moreFilterState,
      [name]: value,
    };
    setMoreFilterState(newFilterState);
  };

  const handleClick = (key) => {
    const foundWashroom = Object.values(washroomCount).find(
      (washroom) => washroom.name === key
    );
    _handleFilterChange("washroom", foundWashroom.value);
  };

  const isActiveWashroom = useCallback(
    (key) => {
      const foundWashroom = Object.values(washroomCount).find(
        (washroom) => washroom.name === key
      );
      return foundWashroom.value === moreFilterState.washroom;
    },
    [moreFilterState]
  );

  return (
    <div className="mr-4">
      <Button
        onPress={onOpen}
        variant="faded"
        className="capitalize px-1 min-w-10 sm:px-3 py-1 text-xs sm:text-sm h-[28px] sm:h-[34px]  bg-white rounded-full hover:shadow-md"
        size="md"
      >
        More Filter
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xl"
        className={{
          footer: "z-[999]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col font-bold text-4xl gap-1">
                Filters
              </ModalHeader>
              <ModalBody>
                <div className="basement__bool">
                  <p className="mb-2">Basement</p>
                  <div className="flex gap-5">
                    <Switch
                      isSelected={moreFilterState.hasBasement}
                      onValueChange={(value) =>
                        _handleFilterChange("hasBasement", value)
                      }
                      classNames={{
                        wrapper: cn("group-data-[selected=true]:bg-black"),
                      }}
                    >
                      Finished Basement
                    </Switch>

                    <Switch
                      isSelected={moreFilterState.sepEntrance}
                      onValueChange={(value) =>
                        _handleFilterChange("sepEntrance", value)
                      }
                      classNames={{
                        wrapper: cn("group-data-[selected=true]:bg-black"),
                      }}
                    >
                      Separate Entrance
                    </Switch>
                  </div>
                </div>

                <div className="washroom__count mt-3">
                  <p className="fs-5 fs-sm-4 fw-500 mb-2">Washrooms</p>
                  <div className="flex gap-3 flex-wrap">
                    {washroomCountOptions.map((washroom, index) => {
                      return (
                        <div
                          key={index}
                          className={`border border-secondary-subtle rounded-full px-3 py-1 cursor-pointer ${
                            isActiveWashroom(washroom) ? "active-pills" : ""
                          }`}
                          onClick={() => handleClick(washroom)}
                        >
                          {washroom}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="w-full flex">
                <Button
                  color="secondary"
                  variant="faded"
                  onPress={onClose}
                  className="w-50 dynamic"
                >
                  Close
                </Button>
                <Button
                  onPress={() => {
                    additonalFilterChange(moreFilterState);
                    onClose();
                  }}
                  className="w-50 dynamic bg-black text-white"
                >
                  Apply
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

const PriceRangeFilterBottom = ({
  name,
  value,
  handleFilterChange,
  minMaxPrice,
}) => {
  const [price, setPrice] = useState({
    min: 0,
    max: 0,
  });

  const [defaultPrice, setDefaultPrice] = useState({
    min: minMaxPrice.min,
    max: minMaxPrice.max,
  });

  const [unMount, setUnMount] = useState(false);

  const convertIntoCurrency = useCallback(
    (price) => {
      return Number(price).toLocaleString("en-US", {
        style: "currency",
        currency: "CAD",
        maximumFractionDigits: 0,
      });
    },
    [price]
  );

  const handleRangeChange = ([min, max]) => {
    const newPrice = { min, max };
    setPrice(newPrice);
    handleFilterChange(name, newPrice);
  };

  useEffect(() => {
    const newPrice = {
      min: value?.min > 0 ? value?.min : minMaxPrice.min,
      max: value?.max > 0 ? value?.max : minMaxPrice.max,
    };

    const newDefaultPrice = {
      min: minMaxPrice.min,
      max: minMaxPrice.max,
    };
    setDefaultPrice(newDefaultPrice);
    setPrice(newPrice);

    if (value.min === 0 && value.max === 0) {
      setUnMount(true);
      setTimeout(() => {
        setUnMount(false);
      }, [10]);
    }
  }, [value, minMaxPrice]);

  return (
    <>
      <div className="w-full fixed bottom-0 border-t-2 left-0 px-4 py-4 bg-white">
        {!unMount && (
          <Slider
            step={50}
            label=""
            color="foreground"
            minValue={defaultPrice.min}
            maxValue={defaultPrice.max}
            showTooltip={true}
            // value={[price.min, price.max]}
            onChangeEnd={handleRangeChange}
            defaultValue={[defaultPrice.min, defaultPrice.max]}
            formatOptions={{ style: "currency", currency: "USD" }}
            classNames={{
              base: "max-w-md slider gap-3",
              track: "bg-gray-100 border border-secondary",
              filler: "bg-black bg-gradient-to-r",
              value: "font-bold fs-6 text-white",
            }}
            renderThumb={(props) => {
              return (
                <div
                  {...props}
                  className="bg-black group p-1 top-1/2 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                >
                  <span className="bg-black shadow rounded-full w-3 h-3 block" />
                  {!props["data-pressed"] && (
                    <>
                      {props.index === 0 ? (
                        <span
                          style={{
                            position: "absolute",
                            top: -32,
                            left: -10,
                            fontSize: "11px",
                            color: "white",
                          }}
                          className="bg-black custom-range-thumb p-1 border-md"
                        >
                          {convertIntoCurrency(price.min)}
                        </span>
                      ) : null}
                      {props.index === 1 ? (
                        <span
                          style={{
                            position: "absolute",
                            top: -32,
                            left: -30,
                            fontSize: "11px",
                            color: "white",
                          }}
                          className="bg-black  custom-range-thumb p-1 border-md"
                        >
                          {convertIntoCurrency(price.max)}
                        </span>
                      ) : null}
                    </>
                  )}
                </div>
              );
            }}
            tooltipProps={{
              offset: 10,
              placement: "bottom",
              classNames: {
                base: [
                  // arrow color
                  "custom-range-thumb",
                ],
                content: [
                  "py-2 shadow-xl",
                  "text-white bg-[#217955] custom-range-thumb rounded-circle",
                ],
              },
            }}
          />
        )}
      </div>
    </>
  );
};

const IndividualFilterButton = ({
  options,
  name,
  value,
  handleFilterChange,
  city,
  type,
}) => {
  const [activeFilter, setActiveFilter] = useState(value);

  const isActive = (key) => {
    const foundSalesLease = options.find((option) => option === key);
    return foundSalesLease === activeFilter;
  };

  const handleClick = (name, option) => {
    setActiveFilter(option);
    handleFilterChange(name, option);
  };

  return (
    <div className="inline-flex sm:mr-4 flex-wrap gap-y-2">
      {options.map((option, index) => {
        return (
          <div
            key={index}
            className={`mx-[2px] px-1 sm:px-3 py-1 cursor-pointer text-nowrap text-xs sm:text-sm h-[28px] leading-[1.2rem] sm:leading-normal sm:h-[34px] flex justify-content-center align-items-center rounded-full hover:shadow-lg border-[2px] ${
              isActive(option)
                ? `border-black! text-white bg-black`
                : "border-gray-filter"
            }`}
            // onClick={() => handleClick(name, option)}
            // style={{ border: "2px solid #e5e7eb" }}
          >
            <Link
              href={generateURL({
                saleLeaseVal: option,
                cityVal: city,
                houseTypeVal: type,
              })}
            >
              {option}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
const IndividualFilterButtonNoLink = ({
  options,
  name,
  value,
  handleFilterChange,
  city,
  type,
}) => {
  const [activeFilter, setActiveFilter] = useState(value);

  const handleClick = (name, option) => {
    setActiveFilter(option);
    handleFilterChange(name, option);
  };

  return (
    <div className="inline-flex sm:justify-normal justify-center sm:mr-4 flex-wrap gap-y-2 py-2 sm:py-0">
      {console.log(activeFilter)}
      {options.map((option, index) => {
        return (
          <div
            key={index}
            className={`mx-[2px] px-2 sm:px-3  sm:h-[34px] py-1 cursor-pointer text-nowrap flex justify-content-center align-items-center rounded-full hover:shadow-lg text-xs sm:text-sm
            ${
              activeFilter == option
                ? `border-black bg-black text-white`
                : "border-[2px] border-gray-filter"
            }`}
            onClick={() => handleClick(name, option)}
            // style={{ border: "2px solid #e5e7eb" }}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
};

const IndividualFilterNoOptions = ({
  label,
  name,
  value,
  handleFilterChange,
}) => {
  const [isActive, setActive] = useState(value);

  const handleClick = (name, value) => {
    setActive(value);
    handleFilterChange(name, value);
  };

  return (
    <div
      className={`px-3 py-1 cursor-pointer text-nowrap text-small h-[34px] flex justify-content-center align-items-center rounded-full border-2 ${
        isActive ? "bg-black text-white border-black" : "border-black"
      }`}
      onClick={() => handleClick(name, !value)}
      style={{ border: "2px solid #e5e7eb" }}
    >
      {label}
    </div>
  );
};

const IndividualFilterWithCancel = ({ name, value, handleFilterChange }) => {
  return (
    <Chip
      className="h-[34px] roundedPill"
      onClose={value ? () => handleFilterChange(name, false) : undefined}
      radius="md"
      variant={value ? "solid" : "bordered"}
      onClick={() => handleFilterChange(name, !value)}
      classNames={{
        base: value ? "bg-black" : "default",
        content: value ? "text-white" : "text-dark",
        closeButton: value ? "text-white" : "text-dark",
      }}
    >
      Finished Basement
    </Chip>
  );
};

export default Filters;
