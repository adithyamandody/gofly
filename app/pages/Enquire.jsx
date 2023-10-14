import React from 'react';
import Image from 'next/image';
import rightarrow from 'app/images/rightarrow.png';
import enqim1 from '../images/enqim1.png';
import enqim2 from '../images/enqim2.png';
import arrw from '../images/arrw.png';
import frm from '../images/fr35.png';

const Enquire = ({}) => {
  return (
    <section className="flex flex-col-reverse md:flex-row p-2 bg-white gap-4 overflow-x-hidden">
      {/* Left side: Images */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image src={frm} alt="Image" className="" />
      </div>

      {/* Right side: Text and Button */}
      <div className="w-full md:w-1/2 p-4">
        <p className="text-[#0E64C9] text-sm md:text-base font-bold z-10 mb-2 pt-3">Enquire Now</p>
        <h2 className="font-bold text-2xl md:text-4xl mb-4 z-10">Your trusted study<br />abroad partner</h2>
        <p className="text-sm md:text-base mb-4">
          IELTS is accepted by more government<br /> agencies, educational institutions, and<br /> professional bodies than any other English-<br />language test.
        </p>
        <button className="flex justify-center items-center gap-1 px-4 py-3 border text-sm md:text-base leading-none text-white rounded-full bg-[#0E64C9]">
          Know more
          <Image src={arrw} alt="arrow" className="ml-2 rounded-full w-[15px] h-[15px]" />
        </button>
      </div>
    </section>
    
  );
};

export default Enquire;
