import Navbar from "@/components/layout/Navbar";
import TopNavbar from "@/components/layout/TopNavbar";
import Banner from "@/components/page/home/banner";
import Frequently from "@/components/page/home/Frequently";
import PropertyItems from "@/components/page/home/PropertyItems";
import PropertySliderItems from "@/components/page/home/PropertySliderItems";
import TeamItems from "@/components/page/home/TeamItems";
import Testimonial from "@/components/page/home/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <PropertyItems />
      <PropertySliderItems />
      <Frequently />
      <Testimonial />
      <TeamItems />

    </>
  );
}
