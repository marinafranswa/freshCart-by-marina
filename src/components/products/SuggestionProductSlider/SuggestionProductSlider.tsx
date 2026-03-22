"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "../ProductCard/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/interfaces/products.interface";
import HeadTitle from "@/components/shared/HeadTitle/HeadTitle";

interface SuggestionProductSliderProps {
  productsSlider: Product[];
}

const basicSliderOptions = {
  loop: false,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 2,
 
    },
    768: {
      slidesPerView: 3,
 
    },
    1024: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  modules: [Navigation, Pagination],
};

export default function SuggestionProductSlider({
  productsSlider,
}: SuggestionProductSliderProps) {
  const limitedProducts = productsSlider.slice(0, 12);

  return (
    <section className="py-6">
      <div className="container">
 
        <div className="flex items-center justify-between mb-4">
          <HeadTitle title="You May Also " sub="Like" />
          <div className="flex items-center gap-2">
            <div className="custom-prev cursor-pointer h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-100 hover:text-green-600 transition">
              <ChevronLeft size={20} />
            </div>
            <div className="custom-next cursor-pointer h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-100 hover:text-green-600 transition">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
        <Swiper {...basicSliderOptions}>
          {limitedProducts.map((prod: Product, i: number) => (
            <SwiperSlide key={i}>
              <ProductCard product={prod} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
