import Image from "next/image";

export default function Automate() {
  return (
    <>
      <p className="text-[40px] font-bold mt-[5rem]  text-center">
        Automated QR Scanner
      </p>
      <p className="text-lg text-[#7342F9] text-center">
        Scan & Verify The Attendees Directly By Our QR <br /> Scanning Solution.
      </p>

      <div className="flex flex-wrap justify-center  gap-4">
        
        <div className="w-[210px]  pt-4 px-4 bg-[#F1F3FF] border rounded-[24px]">
          <Image src={"/s1.png"} height={60} width={60} alt="" />
          <p className="text-[22px] font-bold">One Click</p>
          <p className="text-[16px] text-[#111111c5]">QR verification System</p>
        </div>

        <div className="w-[210px] p-4 bg-[#F1F3FF] border rounded-[24px]">
          <Image src={"/s2.png"} height={60} width={60} alt="" />
          <p className="text-[22px] font-bold">One time</p>
          <p className="text-[16px] text-[#111111c5]">QR Code</p>
        </div>

        <div className="w-[210px] p-4 bg-[#F1F3FF] border rounded-[24px]">
          <Image src={"/s3.png"} height={60} width={60} alt="" />
          <p className="text-[22px] font-bold">Easy Access</p>
          <p className="text-[16px] text-[#111111c5]">lorem ispum access</p>
        </div>

        <div className="w-[210px] p-4 bg-[#F1F3FF] border rounded-[24px]">
          <Image src={"/s4.png"} height={60} width={60} alt="" />
          <p className="text-[22px] font-bold">Mail</p>
          <p className="text-[16px] text-[#111111c5]">Send bulk personalized mail with attachments</p>
        </div>



      </div>
    </>
  );
}
