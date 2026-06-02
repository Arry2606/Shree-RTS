export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Shree Ram Tiffin Services",
    alternateName: "Shree Ram Tiffin",
    description:
      "Authentic, healthy, and hygienic homemade tiffin services in Gurugram. Serving Sectors 31-50 with fresh vegetarian meals for students and professionals.",
    telephone: ["+919711467998", "+919999331665"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "316 F, Housing Board Colony",
      addressLocality: "Sector 39, Gurugram",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressLocality: "Gurugram",
    },
    servesCuisine: "Indian",
    priceRange: "₹₹",
    areaServed: [
      "Sector 31",
      "Sector 32",
      "Sector 38",
      "Sector 39",
      "Sector 40",
      "Sector 46",
      "Sector 47",
      "Sector 48",
      "Sector 49",
      "Sector 50",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:30",
      },
    ],
    sameAs: ["https://wa.me/919711467998"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
