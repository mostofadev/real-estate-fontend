import BannerSection from "@/components/layout/BannerSection";
import About from "@/components/page/about/about";
import Frequently from "@/components/page/home/Frequently";
import TeamItems from "@/components/page/home/TeamItems";
import Testimonial from "@/components/page/home/Testimonial";
import MarginSection from "@/components/section/MarginSection";
import React from "react";

function page() {
  return (
    <>
      <div>
        <BannerSection Title="About Us" />
      </div>
      <div className="lg:my-32 my-12 mx-2 lg:mx-16 lg:mx-32 text-lg leading-8">
        <MarginSection>
          <About />
          <Frequently />
        </MarginSection>
      </div>
      <Testimonial />
      <div className="lg:my-32 my-12 mx-2 lg:mx-16 lg:mx-32 text-lg leading-8">
        <MarginSection>
          <TeamItems />
        </MarginSection>
      </div>
    </>
  );
}

export default page;
