import Image from "next/image";
import React from "react";

export default function Scan() {
  return (
    <div
      className="bgI flex p-[5rem] sm:flex-col lg:flex-row gap-6 justify-center items-center rounded-[32px] mt-[5rem]"
      style={{ backgroundImage: `url('/scan.png')` }}
    >
      <div className="">
        <Image src={"/scanPc.png"} width={400} height={400} alt="vector" />
      </div>

      <div className="flex flex-col gap-3 text-white">
        <p className="font-bold text-2xl">
          Host Your Event Easily & Automatedly <br />
          With Us
        </p>

        <p className="font-medium text-lg mt-4">
          We Provide The Best Event Ticketing & <br />
          Management Solutions
        </p>

        <div className="flex flex-row gap-3 mt-6">
          <Image
            src={"/right.png"}
            width={22}
            height={18}
            alt="vector"
            className="h-[25px] w-[20px]"
          />
          <p>Host Your Event With Easy Steps!</p>
        </div>

        <div className="flex flex-row gap-3">
          <Image
            src={"/right.png"}
            width={22}
            height={18}
            alt="vector"
            className="h-[25px] w-[20px]"
          />
          <p>Automated Payment System & Ticket Will Be Sent To Mail.</p>
        </div>

        <div className="flex flex-row gap-3 ">
          <Image
            src={"/right.png"}
            width={22}
            height={18}
            alt="vector"
            className="h-[25px] w-[20px]"
          />
          <p>Access To Registration And Transaction Reports</p>
        </div>

        <div className="flex flex-row gap-3 ">
          <Image
            src={"/right.png"}
            width={22}
            height={18}
            alt="vector"
            className="h-[25px] w-[20px]"
          />
          <p>Send Bulk Personalized Mail With Attachments</p>
        </div>
      </div>
    </div>
  );
}
