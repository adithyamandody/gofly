import React from "react";
import Image from "next/image";
import Sercard from "../components/Sercard";
import ser1 from "../images/ser1.png";
import elip from "../images/elip.png";

const Services = () => {
  return (
    <section className="relative w-full bg-[#E6F1FF] py-16 -z-20 overflow-x-hidden ">
      {/* Image in the top-right corner */}
      <div className="container mx-auto">
      {/* <Image

        src={elip}
        alt="Top Right Image"
        className="absolute -top-28 left-0 pb-6 -z-10"
        width={250}
        height={250}
      /> */}
      <svg className="absolute -top-28 left-0 pb-6 -z-10"
       width="273" height="485" viewBox="0 0 273 485" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30.5" cy="242.5" r="176" stroke="#CCE3FF" stroke-width="133"/>
      </svg>


      <div className="z-10 ml-4 md:ml-40">
        <p className="text-[#0E64C9] text-xs mb-1.5 font-bold">OUR SERVICES</p>
        <h2 className="font-bold text-2xl md:text-3xl mb-4">What we offer</h2>
      </div>
      <div className="flex flex-col flex-wrap">
        <div className="flex py-8 px-4 md:px-40">
          <div className="flex flex-col md:flex-row gap-7 w-full md:w-auto">
            <Sercard />
            <Sercard />
            <Sercard />
          </div>
        </div>
        <div className="flex py-8 px-4 md:px-40">
          <div className="flex flex-col md:flex-row gap-7 w-full md:w-auto">
            <Sercard />
            <Sercard />
            <Sercard />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services;
