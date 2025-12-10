import Image from "next/image";
import React from "react";
import AboutImage from "../../../public/about.png"
function About() {
  return (
    <div>
      <div className="flex justify-center lg:flex-row flex-col items-center lg:gap-12 gap-6">
        <div className="w-full">
          <Image
            src={AboutImage}
            width={900}
            height={600}
            alt="about us image"
            className="rounded-lg"
          />
        </div>
        <div className="w-80 md:w-full space-y-6 text-gray-700">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            While there are countless Trips out there in charity shops and car
            boot sales, you can also buy refurbished examples, with today
            replacement leatherette available in all colors. I love my Trip and
            use it regularly something so refreshing about its simplicity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
