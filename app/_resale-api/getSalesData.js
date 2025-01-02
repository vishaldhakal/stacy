"use server";
import { commercial, residential } from "./routes/fetchRoutes";
// import { houseType, saleLease } from "@/constant";

export const getSalesData = async (offset, limit, city, listingType) => {
  try {
    let filterQuery = `${
      city && `CountyOrParish eq '${city || ""}' and `
    }TransactionType eq 'For Sale'`;
    // const lowriseOnly = `TypeOwnSrch='.S.',TypeOwnSrch='.D.',TypeOwnSrch='.A.',TypeOwnSrch='.J.',TypeOwnSrch='.K.'`;
    const queriesArray = [
      `$filter=${filterQuery}`,
      `$skip=${offset}`,
      `$top=${limit}`,
    ];

    const url = residential.properties.replace(
      "$query",
      `?${queriesArray.join("&")}`
    );
    const options = {
      method: "GET",
      headers: {
        Authorization: process.env.BEARER_TOKEN_FOR_API,
      },
    };
    if (listingType) {
      filterQuery += ` and PropertySubType eq ${listingType}`;
    }
    const res = await fetch(url, options);
    const data = await res.json();
    return data.value[0];
  } catch (error) {
    console.error(error);
    throw new Error(`An error happened in getSalesData: ${error}`);
  }
};

export const getFilteredRetsData = async (queryParams) => {
  // const lowriseOnly = `TypeOwnSrch='.S.',TypeOwnSrch='.D.',TypeOwnSrch='.A.',TypeOwnSrch='.J.',TypeOwnSrch='.K.'`;
  try {
    //all the necessary queries possible
    let selectQuery = `${
      queryParams.city ? `CountyOrParish eq '${queryParams.city}'` : ""
    }${
      queryParams.saleLease
        ? `${queryParams.city ? " and " : ""}TransactionType eq '${
            queryParams.saleLease
          }'`
        : ""
    }${
      queryParams.bed
        ? `${
            queryParams.bed ? " and " : ""
          }BedroomsTotal eq ${queryParams.bed?.toFixed(3)}`
        : ""
    }`;
    const skipQuery = `${queryParams.offset}`;
    const limitQuery = `${queryParams.limit}`;
    let rangeQuery =
      queryParams.minListPrice || queryParams.washroom
        ? `and ListPrice ge ${
            queryParams.minListPrice
          } and BathroomsTotalInteger ge ${
            queryParams.washroom?.toFixed(3) || Number(0).toFixed(3)
          }`
        : "";

    if (queryParams.houseType) {
      const houseTypeQuery = ` and PropertySubType eq 'value'`;
      queryParams.houseType.forEach((param, index) => {
        if (param) {
          selectQuery += houseTypeQuery.replace("value", param);
          if (index !== queryParams.houseType.length - 1) {
            selectQuery += "";
          }
        }
      });
    }

    if (queryParams.hasBasement) {
      selectQuery += `and Basement1=Apartment`;
    }

    if (queryParams.sepEntrance) {
      selectQuery += `and Basement2=Sep Entrance`;
    }
    if (queryParams.maxListPrice > queryParams.minListPrice) {
      rangeQuery += ` and ListPrice le ${queryParams.maxListPrice}`;
    }

    if (queryParams.priceDecreased) {
      selectQuery += `,PriceDecreased=true`;
    }
    let url = "";

    if (queryParams.propertyType == "commercial") {
      url = commercial.properties.replace(
        "$query",
        `?$filter=${selectQuery}${rangeQuery}&$skip=${skipQuery}&$top=${limitQuery}&$orderby=OriginalEntryTimestamp desc`
      );
    } else {
      url = residential.properties.replace(
        "$query",
        `?$filter=${selectQuery} ${rangeQuery}&$skip=${skipQuery}&$top=${limitQuery}&$orderby=OriginalEntryTimestamp desc`
      );
    }
    const options = {
      method: "GET",
      headers: {
        Authorization: process.env.BEARER_TOKEN_FOR_API,
      },
      // cache: "no-store",
    };
    console.log(url);
    const res = await fetch(url, options);

    const data = await res.json();
    if (!res.ok) {
      // Check if the response is OK (status in the range 200-299)
      throw new Error(
        `HTTP error! status: ${res.status}. Error:${data.message}`
      );
    }

    return data.value;
  } catch (error) {
    console.log(`An error happened in getFilteredRetsData: ${error}`);
  }
};

export const getImageUrls = async ({ MLS, thumbnailOnly = false }) => {
  if (MLS) {
    const options = {
      method: "GET",
      headers: {
        Authorization: process.env.BEARER_TOKEN_FOR_API,
      },
      // cache: "no-store",
    };

    let imageLink = residential.photos;

    if (thumbnailOnly) imageLink += " and ImageSizeDescription eq 'Large'";
    else imageLink += " and ImageSizeDescription eq 'Largest'";

    const response = await fetch(imageLink.replace("MLS", MLS), options);
    const jsonResponse = await response.json();
    const urls = jsonResponse.value.map((data) => data.MediaURL);
    return urls;
  }
};

export const fetchDataFromMLS = async (listingID) => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization: process.env.BEARER_TOKEN_FOR_API,
      },
    };
    const queriesArray = [`$filter=ListingKey eq '${listingID}'`];
    const urlToFetchMLSDetail = residential.properties.replace(
      "$query",
      `?${queriesArray.join("&")}`
    );
    const resMLSDetail = await fetch(urlToFetchMLSDetail, options);
    const data = await resMLSDetail.json();
    return data.value[0];
  } catch (err) {
    console.log(err);
  }
};

export const fetchStatsFromMLS = async ({
  listingType,
  municipality,
  saleLease,
}) => {
  const options = {
    method: "GET",
  };
  const queriesArray = [
    `$select=Municipality=${municipality},TypeOwnSrch=${listingType},SaleLease=${saleLease
      .split(" ")[1]
      .toLowerCase()}`,
    `$metrics=avg,median,sd`,
  ];
  const urlToFetchMLSDetail = residential.statistics.replace(
    "$query",
    `?${queriesArray.join("&")}`
  );
  const resMLSDetail = await fetch(urlToFetchMLSDetail, options);
  const data = await resMLSDetail.json();
  return data.results;
};

export const searchProperties = async (inputValue) => {
  const response = await fetch(
    residential.search.replaceAll("$value", inputValue),
    {
      method: "GET",
      headers: {
        Authorization: process.env.BEARER_TOKEN_FOR_API,
      },
    }
  );
  const searchedProperties = await response.json();
  return searchedProperties.value;
};
