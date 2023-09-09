import React from 'react'

// components/Enquire.js
import Image from "next/image";
import rightarrow from 'app/images/rightarrow.png';
import enqim1 from '../images/enqim1.png'
import enqim2 from '../images/enqim2.png'
import arrw from '../images/arrw.png'
import frm from '../images/fr35.png'



const Enquire = ({}) => {
  return (
    <section className="flex p-2 bg-white gap-1 ">
      {/* Left side: Images */}
      <div className="w-1/2 flex justify-center pl-100">
        <Image src={frm} className="max-w-full max-h-full -z-10"/>
       </div>

      {/* Right side: Text and Button */}
      <div className="w-1/2 p-20">
      <p className="text-[#0E64C9] text-sm mb-4 font-bold z-10 ">Enquire Now</p>
        <h2 className="font-bold text-4xl md:text-5xl mb-4 z-10 ">Your trusted study<br/>abroad partner</h2>
        <p className="mb-4">
          IELTS is accepted by more government<br/> agencies, educational institutions, and<br/> professional bodies than any other English-<br/>language test.
        </p>
        <button className="flex justify-center items-center gap-1 px-6 py-4 border  text-sm leading-none text-white rounded-full bg-[#0E64C9]" >Know more
        <Image src={arrw} alt="arrow" className="ml-2 rounded-full w-[15px] h-[15px]" /> 
        </button>
      </div>
    </section>
  );
};

export default Enquire;
