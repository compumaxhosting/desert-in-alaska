"use client";

import { useInView } from "@/hooks/useInView";
import { FaStar, FaGoogle } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Reviews() {
  const { ref, isVisible } = useInView(0.2);

  const reviews = [
    {
      name: "Hemesh Shah",
      text: "We got 2 AC and 2 furnace installed. Mark and his team was very professional and finished job in time with excellent quality. Mark also accommodated our request to add gas line . We are extremely pleased with work. Highly recommend.",
    },
    {
      name: "Amine Nimer",
      text: "Very good and clean work. They are professionals and experts, they are very honest I would recommend this company for everyone, you won’t regret your choice picking desert in Alaska heating and cooling.",
    },
    {
      name: "Betsy Zibara",
      text: "This is my second experience with Desert in Alaska. They have completed jobs at my home and restaurant. I highly recommend them. They are professional, flexible and provide high quality work in a timely manner. Both jobs went very smoothly and they did everything they promised to do. Thank you Desert in Alaska!",
    },
    {
      name: "Harry Minassian",
      text: "Mark and his crew are fantastic and professional. His quote was fair and among the best value when comparison shopping. We got exactly what he promised and more. There was no nickel and dimeing. Look forward to hiring them again.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 overflow-hidden">
      <div ref={ref} className="h-1 w-full" />

      <div className="mx-auto max-w-7xl px-4">
        {/* HEADING */}
        <div
          className={`text-center transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-xs uppercase tracking-widest text-[#86522d] font-serif">
            Client Reviews
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl text-[#432719]">
            TRUSTED BY <span className="text-[#86522d]">METRO DETROIT</span>
          </h2>
        </div>

        {/* CAROUSEL WRAPPER */}
        <div className="mt-14 relative">
          {/* LEFT ARROW */}
          <button className="review-prev absolute -left-7.5 top-1/2 -translate-y-1/2 z-20 bg-[#86522d] text-white p-3 rounded-full shadow-md hover:bg-[#6f4324]">
            <ChevronLeft size={18} />
          </button>

          {/* RIGHT ARROW */}
          <button className="review-next absolute -right-7.5 top-1/2 -translate-y-1/2 z-20 bg-[#86522d] text-white p-3 rounded-full shadow-md hover:bg-[#6f4324]">
            <ChevronRight size={18} />
          </button>

          {/* SWIPER */}
          <Swiper
            modules={[Autoplay, Navigation]}
            loop
            spaceBetween={30}
            navigation={{
              prevEl: ".review-prev",
              nextEl: ".review-next",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-2xl border border-[#e7dfd7] bg-[#faf8f5] p-6 shadow-sm h-full">
                  {/* GOOGLE + STARS */}
                  <div className="flex items-center gap-2 text-[#86522d] mb-4">
                    <FaGoogle size={16} />
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <FaStar key={s} size={14} />
                      ))}
                    </div>
                  </div>

                  <p className="text-[#6b5a4d] font-serif leading-relaxed text-sm">
                    {review.text}
                  </p>

                  <div className="mt-6 font-semibold text-[#432719] text-sm">
                    {review.name}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
