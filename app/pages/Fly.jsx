import React from "react";
import Button from "../components/Button.jsx";
import Image from "next/image";
import rightarrow from "../images/rightarrow.png";
import ph from "../images/ph.png";

const Fly = () => {
  const flySectionStyle = {
    background: "linear-gradient(to bottom, #0D78FF, #001939)",
    height: "100vh",
    color: "#FFFFFF",
  };

  const textGradientStyle = {
    background:
      "linear-gradient(45deg, #FFFFFF 61%, #FFFFFF 84.31%, #FFFFFF 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "unset",
  };

  return (
    <section
      id="fly"
      style={flySectionStyle}
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10"
    >
      <div className="relative container mx-auto  flex flex-col justify-center items-start w-full ">
        <h1 className="text-gradient mt-10 text-5xl md:text-5xl lg:text-6xl font-bold mb-5">
          Go Fly to your <br /> dream career.
        </h1>
        <p className="text-white text-lg text-opacity-70 max-w-md">
          IELTS is accepted by more government agencies, 
          educational institutions, and professional bodies than
           any other English-language test.
        </p>
        <div className="flex items-center mt-7 gap-5 flex-wrap">
          <Button
            label="ENQUIRE NOW"
            iconURL={rightarrow}
            
            btnstyles="px-5 py-1 hover:bg-white/80 duration-200 "
          />
          <div className="flex gap-2 pt-2 md:pt-0 xl:pt-0 mr-7 pl-3 md:pl-0 xl:pl-0">
            <Image src={ph} />
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fly;
