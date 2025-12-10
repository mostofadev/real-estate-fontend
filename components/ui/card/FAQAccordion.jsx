"use client";

import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function FAQAccordion({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto my-12">
      {faqs.map((q, idx) => (
        <div
          key={idx}
          className="mb-2 border border-gray-200 rounded-md overflow-hidden w-full"
        >
          <button
            className="flex justify-between items-center w-full bg-white text-gray-800 text-left px-4 py-4 transition duration-300 hover:bg-gray-100"
            onClick={() => toggleAccordion(idx)}
          >
            <span className="w-full block">{q.question}</span>
            {activeIndex === idx ? (
              <AiOutlineMinus className="text-orange-500 text-xl" />
            ) : (
              <AiOutlinePlus className="text-orange-500 text-xl" />
            )}
          </button>
          {activeIndex === idx && (
            <div className="px-4 py-3 bg-gray-50 w-full">
              <p className="text-gray-600">{q.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
