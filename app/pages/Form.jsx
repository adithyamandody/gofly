import Image from "next/image";
import puli from "../images/pulimol.svg"

const Form = () => {
  return (
    <section className="bg-gradient-to-b from-[#1174E9] to-[#0753AD] ">
     
    <div className="flex justify-between pt-0">
      <div className="flex-col px-20 py-20">
        <p className=" text-3xl text-white pr-32 font-bold">Ready to unlock your potential and achieve your desired IELTS score? Look no further!</p>
        <p className="text-white text-opacity-70 pt-16">YOUR NAME</p>
        <hr class="h-px my-8 border-0 dark:bg-white opacity-70  w-96"/>
        <p className="text-white text-opacity-70 pt-4">YOUR PHONE NO.</p>
        <hr class="h-px my-8 border-0 dark:bg-white opacity-70  w-96"/>
      </div> 
      <div>
      <Image
        src={puli}
        className="pr-32"
        height={1500}
        width={1500}
        alt="Your Image"
      />
      </div> 
    </div>
    
    </section>
  )
};

export default Form