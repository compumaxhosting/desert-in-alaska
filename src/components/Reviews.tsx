"use client";

import dynamic from "next/dynamic";
import { useInView } from "@/hooks/useInView";
import { FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// ✅ Dynamically load Swiper (CLIENT ONLY)
const Swiper = dynamic(
  async () => {
    const mod = await import("swiper/react");
    return mod.Swiper;
  },
  { ssr: false },
);

const SwiperSlide = dynamic(
  async () => {
    const mod = await import("swiper/react");
    return mod.SwiperSlide;
  },
  { ssr: false },
);

export default function Reviews() {
  const { ref, isVisible } = useInView(0.2);

  const reviews = [
    {
      id: "h1",
      name: "Hemesh Shah",
      text: "We got 2 AC and 2 furnace installed. Mark and his team was very professional and finished job in time with excellent quality.",
    },
    {
      id: "a1",
      name: "Amine Nimer",
      text: "Very good and clean work. They are professionals and experts, very honest. Highly recommended.",
    },
    {
      id: "b1",
      name: "Betsy Zibara",
      text: "Second experience with them. Professional, flexible, and high quality work. Everything went smoothly.",
    },
    {
      id: "h2",
      name: "Harry Minassian",
      text: "Fantastic team. Fair pricing and great value. No hidden costs. Will hire again.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 overflow-hidden">
      <div ref={ref} className="h-1 w-full" />

      <div className="mx-auto max-w-7xl px-4">
        {/* HEADING */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs uppercase tracking-widest text-[#86522d] font-serif">
            Client Reviews
          </p>

          <h2 className="mt-4 text-2xl md:text-3xl text-[#432719]">
            CUSTOMER <span className="text-[#86522d]">REVIEWS</span>
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="mt-14 relative">
          {/* LEFT BUTTON */}
          <button className="review-prev absolute top-1/2 -translate-y-1/2 z-20 left-2 sm:left-3 md:-left-6 lg:-left-10 text-[#86522d] p-2 hover:scale-110 transition">
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
          </button>

          {/* RIGHT BUTTON */}
          <button className="review-next absolute top-1/2 -translate-y-1/2 z-20 right-2 sm:right-3 md:-right-6 lg:-right-10 text-[#86522d] p-2 hover:scale-110 transition">
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
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
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="rounded-2xl border border-[#e7dfd7] bg-[#faf8f5] p-6 shadow-sm h-full">
                  {/* GOOGLE + STARS */}
                  <div className="flex items-center gap-2 text-[#FBBC05] mb-4">
                    <FcGoogle size={16} />
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={14} />
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
