import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import socials from "../images/Group 6.svg";
import "font-awesome/css/font-awesome.min.css";
import fb from "../images/facebook.svg";
import phon from "../images/phon.svg";

const Footer = () => {
  return (
    <footer className="bg-[#091828] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Image */}
        <div className="pb-1 md:mb-0">
          <Image src={logo} alt="Company Logo" className=" w-96 h-52" />
          <div className="pl-32 pb-2">
            <p>
              GoFly Education Pvt. Ltd., JAC Tower,
              <br /> Near Jubilee Mission Roundabout,
              <br /> Thrissur, Kerala
            </p>
          </div>
        </div>

        {/* Middle - Phone Numbers */}
        <div className="text-center md:text-left mb-4 md:mb-0 justify-center">
          <div>
            <div className="flex justify-center">
              <Image src={phon} />
              <div className="pt-1">
                <p className="pl-2 text-xs text-white text-opacity-75">
                  Call us
                </p>
                <p className=" pl-2 text-sm">+91 96450 43216</p>
              </div>
            </div>
            <div className="flex justify-center pt-5 pl-2.5">
              <Image src={phon} />
              <div className="pt-1">
                <p className="pl-2 text-xs text-white text-opacity-75">
                  Email us
                </p>
                <p className=" pl-2 text-sm">gofly@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center md:text-right">
          {/* Social Icons */}
          {/* Social Icons */}
        </div>
      </div>
      <div className="flex-col px-28 py-20">
          
          
          <hr class=" h-0.5 my-8 border-0 dark:bg-[#2C435F] opacity-70 min-w-fit" />
          
        </div>
        <div className="flex flex-col ">
          <p className=" px-28 text-sm text-[#EFEFEF] text-opacity-75">© GoFly Education Pvt. Ltd.</p>
          <div className=" flex px-28 text-xs">
          <p className="  text-sm text-[#EFEFEF] text-opacity-75">Designed and Developed by </p>
          
          <p className=" text-white font-bold text-sm"> &nbsp;  Unicorn Labs</p>
          </div>


        </div>
      

      
    </footer>
    
  );
};

export default Footer;
