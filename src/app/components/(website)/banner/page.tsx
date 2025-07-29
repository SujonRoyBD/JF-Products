import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className=" px-4 py-12 mx-auto">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="border border-gray-300 border-dashed rounded-[24px] bg-[#f2f4f6] w-full">
          <Image
            src="/assets/others/banner1.png"
            alt="banner"
            width={500}
            height={444}
            className="w-full h-auto object-cover rounded-[24px]"
          />
        </div>

        {/* Text Section */}
        <div className="flex justify-center mx-auto md:justify-start items-center">
          <div className="text-center md:text-left">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[42px] leading-tight">
              JF Privezy Grass <br className="hidden sm:block" /> Wall
            </h2>
            <p className="pt-4 pb-6 text-gray-600 text-sm sm:text-base">
              The perfect Blend of Greenery
            </p>
            <button className="px-6 py-2 rounded-full bg-[#B0DD1D] hover:bg-[#A1CC1A] text-[#0A2342] font-medium transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
