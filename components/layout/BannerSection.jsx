import React from "react";

function BannerSection({Title}) {
  return (
    <div
      className="
        w-full 
        lg:h-[350px]
        h-[400px] 
        bg-[url('/bradcam.png')] 
        bg-cover 
        bg-center 
        bg-no-repeat 
        relative
      "
    >
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className=" lg:text-6xl text-3xl font-bold text-white">{Title}</h2>
      </div>
    </div>
  );
}

export default BannerSection;
