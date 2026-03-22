"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imageSlider from "@/assets/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png";
import { Navigation, Pagination } from "swiper/modules";

 const basicSliderOptions = {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    clickable: true,
    bulletActiveClass: "swiper-pagination-bullet-active !w-8 !rounded-full",
    bulletClass:
      "swiper-pagination-bullet !bg-white transition-all duration-300 !size-3",
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  modules: [Navigation, Pagination],
};
const slides = [
  {
    title: "Fresh Products Delivered to your Door",
    subtitle: "Get 20% off your first order",
    textColor: "text-green-500",
    primaryBtn: { label: "Shop Now", href: "/products" },
    secondaryBtn: { label: "View Deals", href: "/deals" },
    image: imageSlider.src,
  },
  {
    title: "Premium Quality Guaranteed",
    subtitle: "Fresh from farm to your table",
    textColor: "text-blue-500",
    primaryBtn: { label: "Shop Now", href: "/organic" },
    secondaryBtn: { label: "Learn More", href: "/about" },
    image: imageSlider.src,
  },
  {
    title: "Fast & Free Delivery",
    subtitle: "Same day delivery available",
    textColor: "text-purple-500",
    primaryBtn: { label: "Order Now", href: "/deals" },
    secondaryBtn: { label: "Delivery Info", href: "/products" },
    image: imageSlider.src,
  },
];
export default function MainSlider() {
  return (
    <section>
      <Swiper {...basicSliderOptions} className="relative">
        {slides.map((slide, i: number) => (
          <SwiperSlide key={i} className="w-361.5">
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="h-100 flex items-center justify-center"
            >
              <div className="py-20  text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                <div className="container h-full content-center">
                  <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                    {slide.title}
                  </h2>
                  <p>{slide.subtitle}</p>
                  <div className="mt-4">
                    <Link
                      className={`btn bg-white border-2 border-white/50 ${slide.textColor} inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform`}
                      href={slide.primaryBtn.href}
                    >
                      {slide.primaryBtn.label}
                    </Link>
                    <Link
                      className="btn bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                      href={slide.secondaryBtn.href}
                    >
                      {slide.secondaryBtn.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
          <ChevronLeft />
        </div>

        <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
          <ChevronRight />
        </div>
      </Swiper>
    </section>
  );
}
