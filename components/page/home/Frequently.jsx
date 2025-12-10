import MarginSection from "@/components/section/MarginSection";
import Image from "next/image";
import React from "react";
import Img from "../../../public/accordion.png";
import FAQAccordion from "@/components/ui/card/FAQAccordion";

function Frequently() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any product within 30 days of purchase.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide.",
    },
    {
      question: "How can I track my order?",
      answer: "You will receive a tracking number once your order is shipped.",
    },
  ];
  return (
    <div className="mt-32">
      <MarginSection>
        <div className="flex w-full justify-between items-center flex-col lg:flex-row gap-8">
          {/* Text / Content section */}
          <div className="flex w-full justify-start flex-col">
            <h2 className="text-3xl font-bold mb-4">Frequently ask</h2>
            <div className="">
                <FAQAccordion faqs={faqs} />
            </div>
          </div>

          {/* Image section */}
          <div className="w-full"> 
            <Image
              src={Img}
              width={600}
              height={400}
              alt="Accordion illustration"
              className="rounded-xl"
            />
          </div>
        </div>
      </MarginSection>
    </div>
  );
}

export default Frequently;
