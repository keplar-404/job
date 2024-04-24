import Image from "next/image";

export default function Ticket() {
  return (
    <>
      <div>
        <p className="text-[40px] font-bold mt-[5rem]  text-center">
          SIMPLIFY TICKETING
        </p>
        <p className="text-lg text-[#7342F9] text-center">
          First Ever Unique QR Ticketing <br /> Platform For Event Registration
          & Booking
        </p>

        <div className="w-full flex justify-center items-center">
          <button className="text-[20px] font-medium text-white flex justify-center items-center w-[310px] gap-3 py-[12px] px-[16px]  bg-gradient-to-r from-[#7342f992]  to-[#8053FA] rounded-[10px]  mt-6">
            <Image src={"/shield.png"} width={32} height={32} alt="vector" />
            Secure Payment with
          </button>
        </div>

        <div className="mt-6 flex sm:flex-col lg:flex-row w-full justify-center sm:items-center lg:items-end">
          <Image
            src={"/roket.png"}
            width={310}
            height={470}
            alt=""
            className="h-[320px] z-1 sm:mr-0 lg:mr-[-4rem]"
          />
          <Image
            src={"/bkash.png"}
            width={310}
            height={470}
            alt=""
            className="z-[10]"
          />
          <Image
            src={"/nogod.png"}
            width={310}
            height={470}
            alt=""
            className="h-[320px] sm:mr-0 lg:ml-[-4rem] z-1"
          />
        </div>
      </div>
    </>
  );
}
