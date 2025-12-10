"use client";

import React from "react";
import Image from "next/image";

// Props: testimonial = { text, authorName, authorTitle, authorImg, quoteIcon }
export default function TestimonialCard({ testimonial }) {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="single_testimonial text-center  rounded-lg  p-8 max-w-5xl">
        <div className="quote mb-4 flex justify-center">
          {testimonial.quoteIcon && (
            <testimonial.quoteIcon className="text-4xl text-orange-500" />
          )}
        </div>

        <p className="text-white mb-6 text-xl whitespace-pre-line">
          {testimonial.text}
        </p>
        <div className="testimonial_author flex flex-col items-center">
          <div className="thumb mb-2">
            {testimonial.authorImg && (
              <Image
                src={testimonial.authorImg}
                alt={testimonial.authorName}
                width={80}
                height={80}
                className="rounded-full"
              />
            )}
          </div>
          <h3 className="font-semibold text-white text-lg">{testimonial.authorName}</h3>
          <span className="text-white text-sm">
            {testimonial.authorTitle}
          </span>
        </div>
      </div>
    </div>
  );
}
