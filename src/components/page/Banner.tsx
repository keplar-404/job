import Image from "next/image";
import React from "react";

export default function Carousel() {
  return (
    <div className="bgImage w-full h-[441px] flex flex-col justify-center text-white sm:px-[1rem]  md:px-[4rem] rounded-[32px]">
      <div className="w-full h-[90%] flex flex-col justify-center">
        <p className="text-[40px] font-bold">CMA Fest</p>
        <p className="sm:text-[16px] text-[20px] mt-2">
          Make memories that will last a lifetime. See your favorite <br />{" "}
          artists live at CMA Fest!
        </p>

        <div className="flex gap-4">
          <button className="flex gap-4 py-[12px] px-[16px] bg-[#7342F9] rounded-[10px]  mt-6">
            <Image src={"/btn.svg"} width={15} height={20} alt="vector" />
            See Ticket
          </button>

          <button className="flex gap-4 py-[12px] px-[16px] border border-white rounded-[10px]  mt-6">
            Explore All Events
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center gap-3  h-[10%] ">
        <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
      </div>
    </div>
  );
}
