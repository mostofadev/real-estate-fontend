"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa"; // Quote icon

import testimonialImage from "../../../public/accordion.png";
import TestimonialCard from "@/components/ui/card/TestimonialCard";
const testimonials = [
  {
    text: `Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor 
sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.
Fusce ac mattis nulla. Morbi eget ornare dui.`,
    authorName: "Robert Thomson",
    authorTitle: "Business Owner",
    authorImg: testimonialImage,
    quoteIcon: FaQuoteLeft,
  },
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed 
tortor in purus volutpat dictum. Integer sit amet dui eu risus tincidunt imperdiet.`,
    authorName: "Emily Clark",
    authorTitle: "Marketing Head",
    authorImg: testimonialImage,
    quoteIcon: FaQuoteLeft,
  },
  {
    text: `Suspendisse potenti. Curabitur euismod libero vel justo fermentum, 
ac dictum nulla tincidunt. Vivamus eget eros sit amet erat laoreet consequat.`,
    authorName: "Michael Lee",
    authorTitle: "Product Manager",
    authorImg: testimonialImage,
    quoteIcon: FaQuoteLeft,
  },
  {
    text: `Praesent vel sapien eu tortor convallis ullamcorper. Donec vel 
nibh nec massa efficitur imperdiet. Integer sit amet ex eget metus sagittis.`,
    authorName: "Sophia Turner",
    authorTitle: "CEO",
    authorImg: testimonialImage,
    quoteIcon: FaQuoteLeft,
  },
];

function Testimonial() {
  return (
    <div
      className="
    mt-32
    w-full 
    lg:h-[600px]
    h-[600px] 
    bg-[url('/testmonial.png')] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    relative
  "
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="w-full py-20  flex justify-center rounded-xl">
        <div className="w-full max-w-3xl relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3000 }}
            loop={true}
            navigation={true}
            spaceBetween={30}
            slidesPerView={1}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
