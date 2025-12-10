"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PropertyImageSlider({ images }) {
  const IMAGE_STORAGE = process.env.NEXT_PUBLIC_STORAGE_URL
  console.log(images);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="w-full h-[400px] lg:h-[600px] rounded-none lg:rounded-lg overflow-hidden"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-[600px]">
            <Image
              src={`${IMAGE_STORAGE}${img?.image_url}`}
              alt={`Property image ${idx + 1}`}
              fill
              className="object-cover"
              priority={idx === 0} 
              unoptimized
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
