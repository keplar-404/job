"use client";
import Automate from "@/components/page/Automate";
import Banner from "@/components/page/Banner";
import Event from "@/components/page/Event";
import Footer from "@/components/page/Footer";

import NavBar from "@/components/page/NavBar";
import Scan from "@/components/page/Scan";
import Ticket from "@/components/page/Ticket";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="sm:w-[300px] md:w-[690px] lg:w-[900px] xl:w-[1160px] flex flex-col gap-8 mt-3">
        {/* @ts-ignore */}
        <NavBar seModal={setModal} modal={modal} />

        <Banner />
        <Event />
        <Scan />

        <Automate />
        <Ticket />
      </div>

      {/* this is for nabar mobile  */}
      {modal && (
        <div className="absolute w-screen h-screen flex flex-col justify-center items-center text-[16px] gap-6 text-white  bg-[#7a4affef]">
          <p className="cursor-pointer hover:text-white/70">Home</p>
          <p className="cursor-pointer hover:text-white/70">Events</p>
          <p className="cursor-pointer hover:text-white/70">About us</p>
          <p className="cursor-pointer hover:text-white/70">Contact</p>
          <Image src={"/shopItem.svg"} alt="shop" width={28} height={28} />
          <div className="mt-6 cursor-pointer" onClick={() => setModal(!modal)}>
            <div className="w-[35px] rounded-2xl rotate-45 h-1 bg-white"></div>
            <div className="w-[35px] rounded-2xl -rotate-45 mt-[-4px] h-1 bg-white"></div>
          </div>
        </div>
      )}
    </>
  );
}
