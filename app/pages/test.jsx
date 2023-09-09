import React from 'react'
import arrowb from '../images/arrowb.png'
import Image from 'next/image'
import quo from '../images/quo.svg'

const Test = () => {
  return (
    
    <section className="bg-[#091F35] flex p-8 h-[70vh] pl-24 relative">
  <span className="absolute left-20 -top-20">
    <Image
      src={quo}
      alt="Top Right Image"
      width={150}
      height={150}
    />
  </span>
  
  <div className="flex w-1/2">
    <div className="flex flex-col justify-center">
      <p className="text-[#FEBB38] text-sm  font-bold">
        TESTIMONIALS
      </p>
      <h2 className="font-bold text-lg md:text-4xl  mr-96 text-white">
        Our customers love what we do
      </h2>
      <p className="text-white text-opacity-50 mb-6 mr-64 text-lg">
        Type and scrambled it to make a type specimen book. It has survived not only five.
      </p>
          <span >
          <button className="flex  gap-3 px-4 py-3 text-sm leading-none text-[#091F35] rounded-full bg-[#FEBB38] font-bold">
              View more
              <Image
                src={arrowb}
                alt="arrow"
                className="rounded-full w-[10px] h-[15px]"
              />
            </button>
            </span>
            
        </div>
        </div>
      {/* Right side content */}
      {/* Add your right side content here */}
    </section>
  )
}

export default Test