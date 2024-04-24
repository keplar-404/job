'use client';
import React from "react";
import Image from "next/image";

// @ts-ignore
export default function NavBar({ seModal, modal }) {
  return (
    <div className="w-full">
      {/* xl */}
      <div className="sm:hidden lg:flex text-white w-full h-[62px] rounded-[20px] bg-gradient-to-r from-[#591BFF] to-[#7a4aff8c] justify-between px-[40px] items-center">
        {/* 1st section */}
        <div className="flex gap-9 h-full items-center">
          <p className="text-[24px]">
            Event<span className="font-bold">Host</span>{" "}
          </p>

          {/* dotted section */}
          <div className="flex flex-col h-full justify-between items-center">
            <div className="w-[20px] h-[11px] bg-white rounded-br-full rounded-bl-full"></div>

            <div className=" flex flex-col gap-1">
              <div className="w-[1px] h-[8px] bg-white "></div>
              <div className="w-[1px] h-[8px] bg-white "></div>
              <div className="w-[1px] h-[8px] bg-white "></div>
              <div className="w-[1px] h-[8px] bg-white "></div>
            </div>

            <div className="w-[20px] h-[11px] bg-white rounded-tr-full rounded-tl-full"></div>
          </div>
        </div>

        {/* 2nd section */}
        <div className="flex flex-row gap-6 text-[16px]  ">
          <p className="cursor-pointer hover:text-white/70">Home</p>
          <p className="cursor-pointer hover:text-white/70">Events</p>
          <p className="cursor-pointer hover:text-white/70">About us</p>
          <p className="cursor-pointer hover:text-white/70">Contact</p>
        </div>

        {/* 3rd section */}
        <div className="flex gap-9 h-full items-center">
          {/* dotted section */}
          <div className="flex flex-col h-full justify-between items-center">
            <div className="w-[20px] h-[11px] bg-white rounded-br-full rounded-bl-full"></div>

            <div className=" flex flex-col gap-1">
              <div className="w-[1px] h-[8px] bg-white "></div>
              <div className="w-[1px] h-[8px] bg-white "></div>
              <div className="w-[1px] h-[8px] bg-white "></div>
              <div className="w-[1px] h-[8px] bg-white "></div>
            </div>

            <div className="w-[20px] h-[11px] bg-white rounded-tr-full rounded-tl-full"></div>
          </div>

          <div className="flex gap-3">
            <Image
              src={"/profile.png"}
              alt="profile"
              width={30}
              height={30}
              className="rounded-full"
            />
            <Image src={"/shopItem.svg"} alt="shop" width={28} height={28} />
          </div>
        </div>
      </div>

      {/* sm */}
      <div className="text-white sm:flex lg:hidden justify-between items-center   w-full h-[50px] bg-gradient-to-r from-[#591BFF] to-[#7a4aff8c]  rounded-xl px-[10px]">
        <p className="text-[16px]">
          Event<span className="font-bold">Host</span>{" "}
        </p>

        {/* dotted section */}
        <div className="flex flex-col h-full justify-between items-center">
          <div className="w-[20px] h-[11px] bg-white rounded-br-full rounded-bl-full"></div>

          <div className=" flex flex-col gap-1" >
            <div className="w-[1px] h-[8px] bg-white "></div>
            <div className="w-[1px] h-[8px] bg-white "></div>
            <div className="w-[1px] h-[8px] bg-white "></div>
          </div>

          <div className="w-[20px] h-[11px] bg-white rounded-tr-full rounded-tl-full"></div>
        </div>

        <div className="flex gap-3 items-center">
          <Image
            src={"/profile.png"}
            alt="profile"
            width={30}
            height={30}
            className="rounded-full"
          />

          <div className="flex flex-col gap-1 cursor-pointer" onClick={() => seModal(!modal)}>
            <div className="w-[18px] h-[2px] bg-white"></div>
            <div className="w-[18px] h-[2px] bg-white"></div>
            <div className="w-[18px] h-[2px] bg-white"></div>
          </div>
        </div>
      </div>

     
    </div>
  );
}
