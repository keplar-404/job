import Image from "next/image";

// @ts-ignore
export default function EventCard({ image }) {
  return (
    <div className="w-[310px]">
      {/* 1st section */}
      <div className=" border-t-[1px] border-l-[1px] border-r-[1px] rounded-[20px] rounded-b-none bg-[#F1F3FF]  ">
        <div className="p-[1rem]">
          <div
            className="rounded-[8px] py-3 px-[0.7rem] h-[216px] bgI flex flex-row justify-between"
            style={{ backgroundImage: `url(${image})` }}
          >
            <button className="rounded-[4px] h-[25px] px-[9px] bg-[#7342F9] text-[14px] text-white">
              Online
            </button>
            <button className="rounded-[4px] h-[25px] px-[9px] bg-[#7342F9] text-[14px] text-white flex items-center gap-2">
              <Image src={"/heart.svg"} width={16} height={15} alt="" />
              Favorite
            </button>
          </div>
        </div>
      </div>

      {/* line section  */}
      <div className=" flex justify-between bg-[#F1F3FF] shadow-2xl   items-center w-full">
        <div className="w-[17px] h-[27px] border  border-l-white bg-[#F1F3FF]  rounded-l-none rounded-r-full"></div>

        <div className=" flex flex-row gap-[25px]">
          <hr className="w-[1px] h-[18px] bg-[#591BFF] rotate-90" />
          <hr className="w-[1px] h-[18px] bg-[#591BFF] rotate-90" />
          <hr className="w-[1px] h-[18px] bg-[#591BFF] rotate-90" />
          <hr className="w-[1px] h-[18px] bg-[#591BFF] rotate-90" />
          <hr className="w-[1px] h-[18px] bg-[#591BFF] rotate-90" />
          <hr className="w-[1px] h-[18px] bg-[#591BFF] rotate-90" />
          <hr className="w-[1px] h-[18px] bg-[#591BFF] rotate-90" />
          <hr className="w-[1px] h-[18px] bg-[#591BFF] rotate-90" />
          <hr className="w-[1px] h-[18px] bg-[#591BFF] rotate-90" />
          <hr className="w-[1px] h-[18px] bg-[#591BFF] rotate-90" />
          <hr className="w-[1px] h-[18px] bg-[#591BFF] rotate-90" />
        </div>

        <div className="w-[17px] h-[27px] border  border-r-white bg-white  rounded-r-none rounded-l-full"></div>
      </div>

      {/* 3rd section */}

      <div className="bg-[#F1F3FF] py-4 px-3 grid grid-cols-3 rounded-b-[20px] border-l-[1px] border-b-[1.6px] border-r-[1px] w-full">
        <div className="col-span-2">
          <button className="rounded-[4px] h-[25px] px-[9px] bg-[#7342F9] text-[14px] text-white">
            music
          </button>

          <div className=" flex items-center mt-3 gap-1">
            <Image src={"/location.svg"} width={16} height={16} alt="" />
            <p className="text-xs"> Celebrity Convention Hall</p>
          </div>

          <p className="text-[16px] font-semibold mt-3">
            Roufians's HSC-24 Rage Day
          </p>

          <div className="flex gap-2  mt-5">
            <button className=" text-white text-xs flex items-center gap-2 py-[5px] px-[7px] bg-[#7342F9] rounded-[5px]">
              <Image src={"/btn.svg"} width={10} height={15} alt="vector" />
              Get Ticket
            </button>

            <button className=" text-xs flex items-center gap-2 py-[5px] px-[7px] bg-white  rounded-[5px]">
              <p className="font-medium text-[18px] text-[#591BFF]">20</p>
              <div className="text-[9px] flex flex-col">
                <p>Seat</p> <p className="mt-[-5px]">left</p>
              </div>
            </button>
          </div>
        </div>

        <div className="col-span-1 flex flex-col justify-between items-center">
          <button className=" text-xs w-[80px] flex flex-col justify-center fle-col gap-2 py-[5px] px-[3px] bg-white  rounded-[5px]">
            <p>Apr</p>
            <p className="font-medium text-[18px] text-[#591BFF]">20</p>
            <p>10:00 PM</p>
          </button>

          <p className="text-[#591BFF]">See more</p>
        </div>
      </div>
    </div>
  );
}
