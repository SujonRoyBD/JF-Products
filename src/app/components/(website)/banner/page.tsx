import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="container py-9">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[100px]">
        <div
          className="border md:w-[500px] border-gray-400 border-dashed first-letter:rounded-[24px] bg-[#f2f4f6] "
        >
          <Image
            src="/assets/others/banner1.png"
            alt="banner"
            width={500}
            height={444}
          />
        </div>
        <div  className="flex justify-center items-center">
          <div>
              <h2 className="font-[Poppins] font-bold  text-[42px] leading-normal  tracking-[0px] text-left">JF Privezy Grass <br /> Wall</h2>
            <p className="pt-[10px] pb-[30px]">The perfact Blend of Greenery</p>
            <button className="px-4 py-1 rounded-[100px] bg-[#B0DD1D]">Shope Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
