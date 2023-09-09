import React from 'react';
import Button from '../components/Button.jsx';
import Image from "next/image";
import rightarrow from '../images/rightarrow.png';
import ph from '../images/ph.png';

const Fly = () => {
  const flySectionStyle = {
    background: 'linear-gradient(to bottom, #0D78FF, #001939)',
    height: '100vh',
    color: '#FFFFFF',
    
  };

  const textGradientStyle = {
    background: 'linear-gradient(45deg, #FFFFFF 61%, #FFFFFF 84.31%, #FFFFFF 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',    
    color: 'unset'
  };

  return (
    <section id="fly" style={flySectionStyle} className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div
  
  className="relative  flex flex-col justify-center items-start w-full pl-10 md:pl-20 lg:pl-40"
>
  <h1 className="text-gradient mt-10 text-3xl md:text-5xl lg:text-6xl font-bold">
    Go Fly to your <br /> dream career.
  </h1>
  <p className="text-white text-opacity-50">
    IELTS is accepted by more government agencies, <br />educational institutions, and professional bodies than<br /> any other English-language test.
  </p>
  <div className="flex items-center mt-4 gap-5">
    <Button label="ENQUIRE NOW" iconURL={rightarrow} className="px-5 py-1" />
  <div className='flex gap-2'>  
    <Image src={ph}/>
    <button>Contact Us</button>
    </div> 
  </div>
</div>
    </section>
  );  
};

export default Fly;
