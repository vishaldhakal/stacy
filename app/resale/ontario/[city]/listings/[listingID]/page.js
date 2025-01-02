import Gallery from "@/components/resale/Gallery";
import { residential } from "@/app/_resale-api/routes/fetchRoutes";
import { generateImageURLs } from "@/helpers/generateImageURLs";
import capitalizeFirstLetter from "@/helpers/capitalizeFirstLetter";
import {
  fetchDataFromMLS,
  getImageUrls,
  // fetchStatsFromMLS,
  getSalesData,
} from "@/app/_resale-api/getSalesData";
import BookShowingForm from "@/components/resale/BookShowingForm";
// const Map = dynamic(() => import("@/components/resale/Map"), { ssr: false });
// import Map from "@/components/resale/Map";

import PropertyPage from "@/components/resale/PropertyPage";
import BookingDate from "@/components/resale/BookingDate";
import FAQ from "@/components/resale/FAQ";
import Slider from "@/components/resale/Slider";
import Breadcrumbs from "@/components/resale/Breadcrumbs";
import CreateSchema from "@/helpers/CreateSchema";
import { slugGenerator } from "@/helpers/slugGenerator";
import PropertyDisplaySection from "@/components/resale/PropertyDisplaySection";
import PriceButton from "@/components/resale/PriceButton";
import formatCurrency from "@/helpers/formatCurrency";
import Carousel from "@/components/resale/Carousel";
import { generateURL } from "@/helpers/generateResaleURL";
import TimeAgo from "@/components/resale/TimeAgo";
import { houseType } from "@/constant";

// import { getNotes } from "@/helpers/getNotes";
// import { Button } from "@nextui-org/react";

const INITIAL_OFFSET = 0;
const INITIAL_LIMIT = 4;

const page = async ({ params }) => {
  const { city, listingID } = await params;
  const cityValue = city.split("-").join(" ");
  const formattedSlug = capitalizeFirstLetter(cityValue);
  const parts = listingID.split("-");
  const lastPart = parts[parts.length - 1];
  const listingIDValue = lastPart;
  let main_data = await fetchDataFromMLS(listingIDValue); //always a single object inside the array
  const newSalesData = await getSalesData(
    INITIAL_OFFSET,
    INITIAL_LIMIT,
    formattedSlug,
    main_data?.PropertyType
  );

  // const statsValue = await fetchStatsFromMLS({
  //   listingType: main_data?.PropertySubType,
  //   municipality: main_data?.CountyOrParish,
  //   saleLease: main_data?.TransactionType,
  // });
  // main_data.avg = statsValue?.avg
  //   ? parseFloat(statsValue?.avg?.toFixed(0)).toLocaleString()
  //   : null;
  // const imageURLs = generateImageURLs(
  //   listingIDValue,
  //   parseInt(main_data?.PhotoCount)
  // );
  const breadcrumbItems = [
    { label: "Ontario", href: "/resale/ontario" },
    { label: formattedSlug, href: generateURL({ cityVal: cityValue }) },
    {
      label: `${main_data.TransactionType}`,
      href: generateURL({
        cityVal: cityValue,
        saleLeaseVal: main_data?.TransactionType?.toLowerCase(),
      }),
    },
    {
      label: `${main_data.StreetNumber} ${main_data.StreetName}${" "}
    ${main_data.StreetSuffix}`,
      href: "#",
    },
  ];

  // const address = `${main_data?.StreetNumber} ${main_data?.StreetName} ${main_data?.StreetSuffix}`;
  const address = [
    main_data?.StreetNumber,
    main_data?.StreetName,
    main_data?.StreetSuffix,
  ]
    .filter(Boolean)
    .join(" ");

  const imageURLs = await getImageUrls({ MLS: main_data?.ListingKey });
  // const notes = await getNotes();
  return (
    <>
      <div className="flex justify-center min-[2000px]:max-w-[68%] mx-auto">
        <div>
          <script
            key={main_data.ListingKey}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(CreateSchema(main_data)),
            }}
          />
          <div className="pt-md-3 pt-0 ">
            <div className="sticky top-0 z-[998]">
              <Breadcrumbs items={breadcrumbItems} />
              {/* <Thumbnails setCurrentImageIndex={setCurrentImageIndex} /> */}
            </div>
            <section className="padding-top w-full text-sm flex flex-col items-center justify-center gy-2 relative">
              <div className="hidden sm:block relative">
                <Gallery data={imageURLs} />
                <div className="space-x-2 order-2 sm:order-1 absolute bottom-2 left-2">
                  <button className="bg-[#CC0B0B] p-1 text-white text-xs font-bold mt-1 mb-2 sm:my-0 w-fit-content rounded-md">
                    <TimeAgo
                      modificationTimestamp={main_data.OriginalEntryTimestamp}
                    />
                  </button>
                  <button className="bg-[#CC0B0B] p-1 text-white text-xs font-bold mt-1 mb-2 sm:my-0 w-fit-content rounded-md">
                    <span>{main_data.PropertySubType}</span>
                  </button>
                </div>
              </div>
              {/* Carousel is only for mobile. */}
              <Carousel urls={imageURLs} />
              <div className=" w-full flex justify-center pt-0 sm:pt-4 relative">
                <div className="grid sm:grid-cols-6 grid-cols-1 justify-between sm:justify-between w-full sm:gap-x-6 gap-y-12 sm:gap-y-0 relative">
                  <div className={`sm:col-span-4 col-span-4 col-md-8 `}>
                    <PropertyPage {...{ main_data }} />

                    <BookingDate bannerImage={imageURLs[0]} />
                    {/* <div className="z-20 relative mt-12 sm:mt-24">
                      <h2 className="font-extrabold text-2xl sm:text-4xl mb-2">
                        Map View
                      </h2>
                      <Map main_data={main_data} />
                    </div> */}
                  </div>

                  <div
                    className="sm:col-span-2 col-span-2 relative"
                    id="contact"
                  >
                    <BookShowingForm
                      address={
                        address + `, ${main_data?.CountyOrParish}, Ontario`
                      }
                    ></BookShowingForm>
                  </div>
                  <div className="mt-24 mb-10 col-span-4">
                    <FAQ main_data={main_data} />
                  </div>
                </div>
              </div>
              {formattedSlug && newSalesData?.length > 0 && (
                <section className="additonal__listing w-full mx-auto mt-24">
                  <PropertyDisplaySection
                    title={`Similar Homes nearby in ${
                      main_data?.CountyOrParish || "Ontario"
                    }`}
                    subtitle={`Check out 100+ listings near this property. Listings updated daily`}
                    exploreAllLink={generateURL({
                      houseTypeVal:
                        houseType[
                          Object.keys(houseType).find(
                            (key) =>
                              houseType[key].value == main_data?.TypeOwnSrch
                          )
                        ]?.name,
                      saleLeaseVal: main_data?.TransactionType,
                      cityVal: city,
                    })}
                  >
                    <Slider data={newSalesData} type="resale" />
                  </PropertyDisplaySection>
                </section>
              )}

              <PriceButton price={formatCurrency(main_data?.ListPrice)} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

export async function generateMetadata({ params }, parent) {
  const { listingID } = await params;
  const parts = listingID.split("-");
  const lastPart = parts[parts.length - 1];
  const listingIDValue = lastPart;
  const main_data = await fetchDataFromMLS(listingIDValue);
  const imageURLs = await getImageUrls({ MLS: main_data?.ListingKey });
  return {
    ...parent,
    alternates: {
      canonical: `https://homebaba.ca/listings/${slugGenerator(main_data)}`,
    },
    openGraph: {
      images: imageURLs[0],
    },
    title: `${main_data?.StreetNumber} ${main_data?.StreetName} ${main_data?.StreetSuffix}`,
    description: `${main_data?.PropertySubType}.${main_data?.CountyOrParish}`,
  };
}
