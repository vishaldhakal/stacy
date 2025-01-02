import Link from "next/link";
import nFormatter from "@/helpers/nFormatter";

export default function ListingCard({ city, listing, index }) {
  function checkPricing(prii) {
    if (parseInt(prii) == 0) {
      return `Pricing not available`;
    } else {
      return `Starting from low $${nFormatter(prii, 2)}`;
    }
  }

  return (
    <>
      <div
        className={`rounded-lg my-3 md:my-0 ${
          listing.is_featured ? "md:col-span-2 shadow-featured" : "shadow-card"
        }`}
      >
        <div
          className={`relative ${
            listing.is_featured
              ? "border-blue-500 border-t border-l border-r rounded-t-lg"
              : "border-0"
          }`}
        >
          <Link
            href={`/${city}/${listing.slug}`}
            className="block h-[250px]"
            target="_blank"
          >
            {listing.images.length > 0 ? (
              <img
                loading="lazy"
                src={listing.images[0].split(",")[0]}
                className="w-full h-[250px] rounded-t-lg object-cover"
                style={{
                  background:
                    "linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)",
                }}
                alt={`${listing.name} located at ${listing.StreetNumber} image`}
              />
            ) : (
              <img
                loading="lazy"
                src="/noimage.webp"
                className="w-full h-auto rounded-t-lg object-cover"
                style={{
                  background:
                    "linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)",
                }}
                alt={"no image available for " + listing.name}
              />
            )}
          </Link>
          {listing.is_featured && (
            <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-star"
                viewBox="0 0 22 22"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
              </svg>
              Featured
            </span>
          )}
          <span className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-xs">
            {listing.status}
          </span>
          {!listing.is_featured && (
            <span className="absolute top-[4%] left-[10px] text-xs text-white px-2 py-1 rounded bg-gradient-to-r from-[#ff924d] to-[#ff6a5b]">
              Preconstruction
            </span>
          )}
        </div>
        <Link
          href={`/${city}/${listing.slug}`}
          className={`block p-4 bg-white shadow-md rounded-b-lg no-underline ${
            listing.is_featured
              ? "border-blue-500 border-b border-l border-r"
              : "border-0"
          }`}
          target="_blank"
        >
          <div className="space-y-1">
            <h3 className="text-[1.2rem] font-bold my-0 leading-tight">
              {index && index + ". "}
              {listing.project_name}
            </h3>
            <h4 className="text-[0.9rem] font-normal text-[#00b5d6] my-0">
              {checkPricing(listing.price_starting_from)}
            </h4>
            <h5 className="truncate text-[0.9rem] my-0">
              {listing.project_address}
            </h5>
            <p className="text-[0.9rem] truncate my-0">
              Occupancy {listing.occupancy}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
