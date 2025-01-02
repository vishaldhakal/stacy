import { houseType, saleLease } from "@/constant";
import { isLocalStorageAvailable } from "./checkLocalStorageAvailable";
const houseTypeLinkObj = {};
Object.values(houseType).forEach((elem) => {
  houseTypeLinkObj[elem.name.toLowerCase()] = elem.slug;
});
console.log(houseTypeLinkObj);
export const generateURL = ({
  cityVal,
  houseTypeVal,
  saleLeaseVal,
  listingIDVal = null,
  embeddedSite = false,
}) => {
  const filterState =
    isLocalStorageAvailable() &&
    JSON.parse(localStorage.getItem("filterState"));
  const city = cityVal?.toLowerCase().replaceAll(" ", "-");
  let houseType =
    houseTypeVal?.toLowerCase() || filterState?.type?.toLowerCase() || null;
  if (houseType == "house type") {
    houseType = null; //edge case for housetype object where housetype option represents nothing
  }
  const saleLeaseType =
    Object.keys(saleLease).find((key) => key == saleLeaseVal) ||
    Object.keys(saleLease)
      .find((key) => saleLease[key].name == saleLeaseVal)
      ?.toLowerCase() ||
    Object.keys(saleLease)
      .find((key) => saleLease[key].name == filterState?.saleLease)
      ?.toLowerCase();
  null;
  if (listingIDVal && city)
    return `/resale/ontario/${city}/listings/${listingIDVal}`;
  let finalLink = `/resale/ontario`;

  if (city) finalLink += "/" + city;

  if (!houseType && !saleLeaseType) return finalLink + "/homes-for-sale";

  // console.log(houseTypeLinkObj, houseType);
  if (houseType && !city) finalLink += "/homes/" + houseTypeLinkObj[houseType];
  if (houseType && city) finalLink += "/" + houseTypeLinkObj[houseType];

  console.log(houseType, city);

  if (saleLeaseType && houseType) finalLink += "-for-" + saleLeaseType;
  if (saleLeaseType && !houseType) finalLink += "/homes-for-" + saleLeaseType;

  return finalLink;
};
