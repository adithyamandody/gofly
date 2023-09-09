// components/Navbar.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import logo from '../images/logo.png';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `fixed top-0 left-0 right-0 z-30 ${
    isScrolled ? 'bg-black h-16 transition-all duration-500' : 'bg-opacity-0 h-20 transition-all duration-500'
  }`;

  return (
    <header className="padding-x py-6 absolute z-10 w-full">
    <nav className={navbarClasses}>
    <div className="container mx-auto p-2 md:px-2 lg:px-5 xl:px-4 flex justify-between items-center">
      <button>  
      <a href="/">
        <Image src={logo} alt="Logo" width={153.92} height={59.94} />
      </a>
        </button>
        <ul className="flex space-x-4 text-white md:space-x-6 lg:space-x-8 xl:space-x-15">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </header> 
  );
};

export default Navbar;
