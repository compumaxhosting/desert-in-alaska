"use client";
import { useState } from "react";

export default function Locations() {
  const [expanded, setExpanded] = useState<number[]>([]);
  const locations = [
    {
      county: "Wayne County, Michigan",
      cities: [
        { name: "Allen Park", pincode: "48101" },
        { name: "Belleville", pincode: "48101" },
        { name: "Dearborn", pincode: "48120" },
        { name: "Dearborn Heights", pincode: "48120" },
        { name: "Detroit", pincode: "48201" },
        { name: "Ecorse", pincode: "48120" },
        { name: "Flat Rock", pincode: "48183" },
        { name: "Garden City", pincode: "48136" },
        { name: "Gibraltar", pincode: "4568" },
        { name: "Grosse Pointe", pincode: "48230" },
        { name: "Grosse Pointe Farms", pincode: "48236" },
        { name: "Grosse Pointe Park", pincode: "48230" },
        { name: "Grosse Pointe Shores", pincode: "48080" },
        { name: "Grosse Pointe Woods", pincode: "48236" },
        { name: "Hamtramck", pincode: "48211" },
        { name: "Harper Woods", pincode: "48225" },
        { name: "Highland Park", pincode: "48203" },
        { name: "Inkster", pincode: "48141" },
        { name: "Lincoln Park", pincode: "48146" },
        { name: "Livonia", pincode: "48150" },
        { name: "Melvindale", pincode: "48122" },
        { name: "Northville", pincode: "48167" },
        { name: "Plymouth", pincode: "48170" },
        { name: "River Rouge", pincode: "48209" },
        { name: "Riverview", pincode: "48193" },
        { name: "Rockwood", pincode: "48173" },
        { name: "Romulus", pincode: "48184" },
        { name: "Southgate", pincode: "48195" },
        { name: "Taylor", pincode: "48180" },
        { name: "Trenton", pincode: "48183" },
        { name: "Wayne", pincode: "48184" },
        { name: "Westland", pincode: "48185" },
        { name: "Woodhaven", pincode: "48183" },
        { name: "Wyandotte", pincode: "48192" },
      ],
    },
    {
      county: "Oakland County, Michigan",
      cities: [
        { name: "Auburn Hills", pincode: "48326" },
        { name: "Berkley", pincode: "48072" },
        { name: "Birmingham", pincode: "48009" },
        { name: "Bloomfield Hills", pincode: "48302" },
        { name: "Clarkston", pincode: "48348" },
        { name: "Clawson", pincode: " 48017 " },
        { name: "Farmington", pincode: "48331" },
        { name: "Farmington Hills", pincode: "48331" },
        { name: "Fenton", pincode: "48430" },
        { name: "Ferndale", pincode: "48220" },
        { name: "Hazel Park", pincode: "48030" },
        { name: "Huntington Woods", pincode: "48070" },
        { name: "Keego Harbor", pincode: "48320" },
        { name: "Lake Angelus", pincode: "48326" },
        { name: "Lathrup Village", pincode: "48076" },
        { name: "Madison Heights", pincode: "48071" },
        { name: "Northville", pincode: "48167" },
        { name: "Novi", pincode: "48374" },
        { name: "Oak Park", pincode: "48237" },
        { name: "Orchard Lake Village", pincode: "48323" },
        { name: "Pleasant Ridge", pincode: "48069" },
        { name: "Pontiac", pincode: "48302" },
        { name: "Rochester", pincode: "48306" },
        { name: "Rochester Hills", pincode: "48307" },
        { name: "Royal Oak", pincode: "48067" },
        { name: "South Lyon", pincode: "48178" },
        { name: "Southfield", pincode: "48075" },
        { name: "Sylvan Lake", pincode: "48320" },
        { name: "Troy", pincode: "48099" },
        { name: "Walled Lake", pincode: "48390" },
        { name: "Wixom", pincode: "48393" },
      ],
    },
    {
      county: "Macomb County, Michigan",
      cities: [
        { name: "Center Line", pincode: "48015" },
        { name: "Eastpointe", pincode: "48021" },
        { name: "Fraser", pincode: "48026" },
        { name: "Grosse Pointe Shores", pincode: "48236" },
        { name: "Memphis", pincode: "48041" },
        { name: "Mount Clemens", pincode: "48043" },
        { name: "New Baltimore", pincode: "48047" },
        { name: "Richmond", pincode: "48062" },
        { name: "Roseville", pincode: "48066" },
        { name: "St. Clair Shores", pincode: "48080" },
        { name: "Sterling Heights", pincode: "48312" },
        { name: "Utica", pincode: "48317" },
        { name: "Warren", pincode: "48397" },
        { name: "Armada", pincode: "48005" },
        { name: "New Haven", pincode: "48048" },
        { name: "Romeo", pincode: "48065" },

        { name: "Chesterfield Charter Township", pincode: "48047" },
        { name: "Clinton Charter Township", pincode: "48035" },
        { name: "Harrison Charter Township", pincode: "48045" },
        { name: "Shelby Charter Township", pincode: "48315" },
        { name: "Washington Charter Township", pincode: "48095" },
        { name: "Armada Township", pincode: "48005" },
        { name: "Bruce Township", pincode: "48065" },
        { name: "Lenox Township", pincode: "48048" },
        { name: "Macomb Township", pincode: "48042" },
        { name: "Ray Township", pincode: "48096" },
        { name: "Richmond Township", pincode: "48062" },
      ],
    },
    {
      county: "Washtenaw County, Michigan",
      cities: [
        { name: "Ann Arbor", pincode: "48103" },
        { name: "Chelsea", pincode: "48118" },
        { name: "Dexter", pincode: "48130" },
        { name: "Manchester", pincode: "48158" },
        { name: "Milan", pincode: "48160" },
        { name: "Saline", pincode: "48176" },
        { name: "Ypsilanti", pincode: "48197" },

        { name: "Barton Hills", pincode: "48105" },

        { name: "Ann Arbor Charter Township", pincode: "48105" },
        { name: "Augusta Charter Township", pincode: "48160" },
        { name: "Pittsfield Charter Township", pincode: "48103" },
        { name: "Superior Charter Township", pincode: "48198" },
        { name: "York Charter Township", pincode: "48176" },
        { name: "Ypsilanti Charter Township", pincode: "48197" },

        { name: "Bridgewater Township", pincode: "48115" },
        { name: "Dexter Township", pincode: "48130" },
        { name: "Freedom Township", pincode: "48158" },
        { name: "Lima Township", pincode: "48103" },
        { name: "Lodi Township", pincode: "48103" },
        { name: "Lyndon Township", pincode: "48118" },
        { name: "Manchester Township", pincode: "48158" },
        { name: "Northfield Township", pincode: "48189" },
        { name: "Salem Township", pincode: "48105" },
        { name: "Saline Township", pincode: "48176" },
        { name: "Scio Township", pincode: "48103" },
        { name: "Sharon Township", pincode: "48158" },
        { name: "Sylvan Township", pincode: "48118 " },
        { name: "Webster Township", pincode: "48130" },
      ],
    },
  ];

  return (
    <section className="bg-[#faf8f5] py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-4xl md:text-5xl text-[#3b2a1f]">
          LOCATIONS
        </h2>

        <div className="space-y-12">
          {locations.map((group, i) => {
            const isExpanded = expanded.includes(i);

            const visibleCities = isExpanded
              ? group.cities
              : group.cities.slice(0, 4); // 👈 show 4 initially

            return (
              <div key={i}>
                <h3 className="mb-6 text-2xl font-semibold text-[#3b2a1f]">
                  {group.county}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {visibleCities.map((city, idx) => (
                    <div
                      key={idx}
                      className="group rounded-xl bg-white p-4 border border-[#eee] transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:border-[#d6c3a3]"
                    >
                      <h4 className="text-[#8b5428] font-medium">
                        {city.name}
                      </h4>

                      <p className="text-black text-sm mt-1">{city.pincode}</p>
                    </div>
                  ))}
                </div>

                {/* ✅ READ MORE BUTTON */}
                {group.cities.length > 8 && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={() =>
                        setExpanded((prev) =>
                          prev.includes(i)
                            ? prev.filter((id) => id !== i)
                            : [...prev, i],
                        )
                      }
                      className="text-[#8b5428] font-medium hover:underline"
                    >
                      {isExpanded ? "Show less" : "Show more"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
