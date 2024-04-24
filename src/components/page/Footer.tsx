import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gradient-to-t from-[#7342f992]  to-[#591BFF] w-full flex justify-center items-center mt-12 py-[3rem] text-white'>


<div className='sm:w-[300px] md:w-[690px] lg:w-[900px] xl:w-[1160px] flex flex-col'>
<div className='flex flex-row  justify-center items-start gap-[5rem] flex-wrap'>

<div>
    <p className='text-[35px]'>Event<span className='font-bold'>Host</span></p>
    <p className='mt-2'>IDEA Project, ICT Tower (0th Floor),<br /> Plot: E-14X, Agargaon, Dhaka - 1207 <br />
02222-222222, 01111111111</p>
</div>



<div>
    <p>Home</p>
    <p>Events</p>
    <p>About us </p>
    <p>Contact</p>
</div>


<div>
    <p>Event Dashboard</p>
    <p>Terms & Condition</p>
    <p>Privacy & Refund Policy</p>
</div>



<div className=''>
    <p>Follow Us</p>
    <div className='flex mt-2 flex-row flex-wrap gap-2'>
<Image src={"/face.png"} height={27} width={24} alt=''/>
<Image src={"/ins.png"} height={27} width={24} alt=''/>
<Image src={"/link.png"} height={27} width={24} alt=''/>
<Image src={"/you.png"} height={27} width={24} alt=''/>
    </div>
</div>







</div>



<div className='w-full flex flex-col justify-center items-center mt-6'>
    <hr className='w-[58dvw] bg-white ' />

    <div className='w-[58dvw] flex flex-wrap justify-between items-center gap-5 mt-4'>
        <div className='flex flex-wrap  gap-3'>
            <p>Pay width</p>
            <Image src={"/a.png"} width={100} height={50} alt=''/>
        </div>
        <p>©2023 TickHost & <span className='underline'>UVTR</span>. All right reserved</p>
    </div>

</div>


</div>


    </div>
  )
}
