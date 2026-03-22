"use client"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode,Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

import type { Swiper as SwiperType } from "swiper";


interface ProductSliderProps {
  images: string[];
}
export default function ProductSlider({ images }: ProductSliderProps) {
const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={false}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode,  Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-96 ">
              <Image
                src={image}
                fill
                className="object-contain p-5"
                alt={`product image ${i}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-50">
              <Image
                src={image}
                fill
                className="object-contain cursor-pointer"
                alt={`thumbnail ${i}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
