import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import socials from "../images/Group 6.svg";
import "font-awesome/css/font-awesome.min.css";
import fb from "../images/facebook.svg";
import phon from "../images/phon.svg"

const Footer = () => {
  return (
    <footer className="bg-[#091828] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Image */}
        <div className="mb-4 md:mb-0">
          <Image src={logo} alt="Company Logo" className=" w-96 h-52" />
          <div className="pl-32">
            <p>
              GoFly Education Pvt. Ltd., JAC Tower,
              <br /> Near Jubilee Mission Roundabout,
              <br /> Thrissur, Kerala
            </p>
            <div className="mt-4">
              <a href="#" className="text-white mr-4 hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white mr-4 hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white mr-4 hover:text-blue-500">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Middle - Phone Numbers */}
        <div className="text-center md:text-left mb-4 md:mb-0 justify-center">
          <div>
            
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex justify-center">
            <Image src={phon}/>
            <p>Main Office: +1 (123) 456-7890</p>
            </div>
            <p>Sales: +1 (987) 654-3210</p>
          </div>
        </div>

        {/* Right Side - Address and Social Icons */}
        <div className="text-center md:text-right">
          {/* Social Icons */}
          {/* Social Icons */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
