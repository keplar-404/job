import Image from "next/image";
import React from "react";
import EventCard from "./EventCard";

export default function Event() {
  return (
    <>
      <p className="text-center text-[48px] font-semibold mt-6">Events</p>

      <div className="flex flex-wrap gap-x-4 text-black justify-center mt-[-10px]">
        <button className="hover:bg-[#7342F9] px-[16px] py-[8px] rounded-[12px]  hover:text-white text-[20px]">
          All
        </button>
        <button className="hover:bg-[#7342F9] px-[16px] py-[8px] rounded-[12px]  hover:text-white text-[20px]">
          For You
        </button>
        <button className="hover:bg-[#7342F9] px-[16px] py-[8px] rounded-[12px]  hover:text-white text-[20px]">
          This Day
        </button>
        <button className="hover:bg-[#7342F9] px-[16px] py-[8px] rounded-[12px]  hover:text-white text-[20px]">
          This Week
        </button>
        <button className="bg-[#7342F9] px-[16px] py-[8px] rounded-[12px] text-white text-[20px]">
          Music
        </button>
        <button className="hover:bg-[#7342F9] px-[16px] py-[8px] rounded-[12px]  hover:text-white text-[20px]">
          union
        </button>
      </div>

      <div className="flex flex-wrap gap-6 justify-center items-center w-full">
        {/* 1st card */}
        <EventCard image={"/e1.png"} />
        <EventCard image={"/e2.png"} />
        <EventCard image={"/e3.png"} />
      </div>
    </>
  );
}
