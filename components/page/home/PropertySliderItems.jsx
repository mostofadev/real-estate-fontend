"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

import ImageOne from "../../../public/Property/p1.png";
import ImageTwo from "../../../public/Property/p2.png";
import ImageThree from "../../../public/Property/p3.png";
import ImageFour from "../../../public/Property/p4.png";
import ImageFive from "../../../public/Property/p5.png";
import ImageSix from "../../../public/Property/p6.png";

import PropertySliderCard from "@/components/ui/card/PropertySliderCard";
import MarginSection from "@/components/section/MarginSection";
import { useSliderProperty } from "@/hooks/useHomePage";
 

function PropertySliderItems() {
  const {data} = useSliderProperty();
  console.log('slider' , data?.data);
  
  return (
    <div
      className="
    mt-32
    w-full 
    lg:h-[700px]
    h-[400px] 
    bg-[url('/home_details.png')] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    relative
  "
    >
      <MarginSection>
        <div className="relative z-10 flex justify-center items-center h-full px-4">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={60}
            slidesPerView={1}
            className="w-full max-w-[900px]"
          >
            {data?.data?.map((item) => (
              <SwiperSlide key={item.id} className="mt-32">
                <PropertySliderCard properties={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MarginSection>
      
    </div>
  );
}

export default PropertySliderItems;
