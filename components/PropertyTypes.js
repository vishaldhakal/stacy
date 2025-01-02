import Link from "next/link";

const propertyTypes = [
  {
    title: "Townhomes",
    icon: "🏘️",
    href: "/properties/townhomes",
    quantity: 100,
  },
  {
    title: "Condos",
    icon: "🏬",
    href: "/properties/condos",
    quantity: 400,
  },
  {
    title: "Semi Detached",
    icon: "🏡",
    href: "/properties/semi-detached",
    quantity: 300,
  },
  {
    title: "Detached",
    icon: "🏠",
    href: "/properties/detached",
    quantity: 100,
  },
  {
    title: "Featured",
    icon: "⭐",
    href: "/properties/featured",
    quantity: 10,
  },
];

const PropertyTypes = () => {
  return (
    <section className="container mx-auto px-6 md:px-8 py-16 md:py-20 overflow-x-hidden">
      <h2 className="text-2xl md:text-5xl tracking-tight font-extrabold leading-[1.2] md:leading-[1.2]  text-center mb-5">
        Townhomes, Singles & Condos for your family
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
        {propertyTypes.map((property, index) => (
          <Link
            key={property.title}
            href={property.href}
            className={`group ${
              index === propertyTypes.length - 1 &&
              propertyTypes.length % 2 === 1
                ? "col-span-full sm:col-auto flex justify-center sm:justify-start"
                : ""
            }`}
          >
            <div
              className={`
               relative overflow-hidden rounded-xl h-[100px] md:h-[140px]
              bg-slate-50 
              transition-all duration-300
              group-hover:shadow-sm group-hover:scale-105
              flex flex-col items-center justify-center
              p-2
              w-full max-w-[180px]
            `}
            >
              <div
                className="text-3xl md:text-5xl mb-2 md:mb-4
                transition-transform duration-300 
                group-hover:scale-110"
              >
                {property.icon}
              </div>
              <h3
                className="text-[11px] md:text-sm font-semibold text-center
                transition-all duration-300
                group-hover:text-slate-900
                group-hover:transform group-hover:-translate-y-1"
              >
                {property.title}
              </h3>
              <p className="text-[9px] md:text-xs text-center text-slate-500">
                {property.quantity} properties
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PropertyTypes;
