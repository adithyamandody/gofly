import React from 'react';
import Image from 'next/image';
import rightarrow from 'app/images/rightarrow.png';
import enqim1 from '../images/enqim1.png';
import enqim2 from '../images/enqim2.png';
import arrw from '../images/arrw.png';
import frm from '../images/fr35.png';
import enq from '../images/enq.png';

const Enquire = ({}) => {
  return (
    <div className="relative">

    <section className='absolute z-[20] bg-white left-0 right-0'>
    <div className=" container mx-auto flex w-full flex-col-reverse  md:flex-row py-14 gap-4  items-start">
      {/* Left side: Images */}
      {/* <div className="w-full md:w-1/2"> */}
        <Image src={enq} alt="Image" className="w-full " />
      {/* </div> */}

      {/* Right side: Text and Button */}
      <div className="w-full md:pt-24">
        <p className="text-[#0E64C9] text-base uppercase tracking-wider md:text-base font-bold z-10 mb-2 pt-3">Enquire Now</p>
        <h2 className="font-bold text-3xl md:text-4xl mb-4 z-10">Your trusted study<br />abroad partner</h2>
        <p className="text-base md:text-base mb-4 max-w-md">
          IELTS is accepted by more government agencies, educational institutions, and professional bodies than any other English-language test.
        </p>
        <button className="flex justify-center items-center gap-2 px-5 py-3 text-sm md:text-base font-semibold leading-none text-white rounded-full bg-[#0E64C9] hover:bg-blue-900 duration-300">
          Know more
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

          {/* <Image src={arrw} alt="arrow" className="ml-2 rounded-full w-[15px] h-[15px]" /> */}
        </button>
      </div>
    </div>
    </section>
    </div>
    
  );
};

export default Enquire;
