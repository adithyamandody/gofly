import React from "react";
import Image from "next/image";
import Sercard from "../components/Sercard"
import ser1 from "../images/ser1.png";

const Services = () => {
  return (
    <section className="relative bg-E6F1FF py-16">
      {/* Image in the top-right corner */}
      <img
        src="/path/to/top-right-image.png"
        alt="Top Right Image"
        className="absolute top-0 left-0 w-20 h-20 pb-6"
      />

      {/* Container for the cards with increased padding */}
      <div className="flex justify-center container  pt-30">
        {/* Flex container for responsive grid */}
        <div className="flex flex-wrap justify-center ">
          {/* Row 1 */}
          <Sercard />
          </div>
        </div> 
    </section>
  );
};

export default Services;
