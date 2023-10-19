import React from "react";
import Image from "next/image";
import logo from "../images/footerlogo.png";
import fb from "../images/facebook.svg";
import phon from "../images/phon.svg";

const Footer = () => {
  return (
    <footer className="bg-[#091828] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Image */}
       {/* <div className="pb-4 md:pb-0 text-center md:text-left"> */}
         
          <div >
          <Image src={logo} alt="Company Logo"/>
            <p className="block">GoFly Education Pvt. Ltd., JAC Tower, </p>
           <p className="block">Near Jubilee Mission Roundabout,</p> 
             <p className="block"> Thrissur, Kerala</p>
           
          </div>
        {/* </div> */}

        {/* Middle - Phone Numbers */}
        <div className="text-center md:text-left mb-4 md:mb-0 justify-center md:justify-start">
          <div className="flex justify-center md:justify-start pt-4">
            <Image src={phon} />
            <div className="pt-1">
              <p className="pl-2 text-xs text-white text-opacity-75">
                Call us
              </p>
              <p className="pl-2 text-sm">+91 96450 43216</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start pt-2 md:pt-5">
            <Image src={phon} />
            <div className="pt-1">
              <p className="pl-2 text-xs text-white text-opacity-75">
                Email us
              </p>
              <p className="pl-2 text-sm">gofly@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="text-center md:text-right">
          {/* Social Icons */}
          
        </div>
      </div>
      <div className="flex-col md:flex-row justify-between px-4 md:px-28 py-8">
        <hr className="h-0.5 my-2 md:my-0 border-0 dark:bg-[#2C435F] opacity-70 w-full md:w-2/3" />
        <div className="flex flex-col text-center md:text-right justify-center pt-4 pl-4">
        <p className="text-left text-sm text-[#EFEFEF] text-opacity-75">© GoFly Education Pvt. Ltd.</p>

          <div className="flex text-sm">
            
            <p className="text-[#EFEFEF] text-opacity-75 text-sm">Designed and Developed by
           <a href="https://zubble.co"> <span className="text-white font-bold pl-1"> zubble.co</span></a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
