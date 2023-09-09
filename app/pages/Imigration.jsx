import React from 'react'
import Image from 'next/image';
import france from '../images/france.png'
import uk from '../images/uk.png'
import esto from '../images/estonia.png'
import arrowb from '../images/arrowb.png'

const Imigration = () => {
  return (
    <section className="flex flex-wrap md:flex-nowrap bg-[#091F35] text-white p-8 z-20 " >
      
     <div className='flex flex-row-reverse px-5 '>
      <div className="flex flex-col justify-center mr-7 gap-1">
      <p className="text-[#FEBB38] text-sm mb-4 pt-5 font-bold">Enquire Now</p>
      <h2 className="font-bold text-3xl md:text-4xl mb-5">Fly to your<br/>dream country</h2>
      <p className="text-white text-opacity-50 mb-6 ">
      
      We offer full immigration support to<br/> United Kingdom, France and Estonia. <br/> <br/>
      <button className="flex  gap-3 px-4 py-3  text-sm leading-none text-[#091F35] rounded-full bg-[#FEBB38] font-bold" >Know more
        <Image src={arrowb} alt="arrow" className="rounded-full w-[10px] h-[15px]" /> 
        </button>
        </p>
        
      </div>
     </div>  
      {/* Left side: Cards */}
      <div className=" flex flex-wrap md:flex-nowrap md:gap-3 justify-center pl-15 my-20 space-x-5">
        {/* Card 1 */}
        <div className="bg-gradient-to-t from-[#25477A] to-blue-800 rounded-lg p-0.2 text-left pb-10 ">
          <Image src={france} alt="Card 1" className="w-246 h-287 mx-auto py-0" />
          <h3 className="text-lg md:text-2xl font-semibold pb-2 pl-4 pt-0.5">France</h3>
          <p className="text-sm text-opacity-50 text-white pl-4">We offer full immigration support to<br/> United Kingdom, France and Estonia. <br/>IELTS is accepted by more government <br/>agencies, </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-b from-[#355EAC] to-[#0D5DF9] rounded-lg p-0.2 text-left py-3 ">
          <Image src={uk} alt="Card 2" className="w-246 h-287 mx-auto mb-2" />
          <h3 className="text-lg md:text-2xl font-semibold pb-2 pl-4">United Kingdom</h3>
          <p className="text-sm text-opacity-50 text-white pl-4">We offer full immigration support to<br/> United Kingdom, France and Estonia. <br/>IELTS is accepted by more government <br/>agencies, </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-t from-[#988FFF] to-[#4D46A0] rounded-lg p-0.2 text-left">
          <Image src={esto} alt="Card 3" className="w-246 h-287 mx-auto mb-2" />
          <h3 className="text-lg md:text-2xl font-semibold pb-2 pl-4">Estonia</h3>
          <p className="text-sm text-opacity-50 text-white pl-4 pb-2">We offer full immigration support to<br/> United Kingdom, France and Estonia. <br/>IELTS is accepted by more government <br/>agencies, </p>
        </div>
      </div>

      
      
    </section>
  );
};


export default Imigration
