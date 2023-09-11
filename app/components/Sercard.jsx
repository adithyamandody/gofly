import ser1 from "../images/ser1.png";
import Image from "next/image";
import arrow from "../images/arrowb.png";

export default function Sercard() {
  return (
    <div className="z-0">
      <div>
        <div className="bg-white rounded-lg shadow text-left">
          <Image
            src={ser1}
            alt="Service 1"
            width={1000}
            height={1000}
            className="mx-0 mb-2"
          />
          <h3 className="text-base md:text-lg font-bold text-left pt-2 pl-4">IELTS Coaching</h3>

          <p className="text-sm md:text-base text-left text-[#00002C] text-opacity-70 pt-1 max-w-xl pl-4 pb-2 md:mr-24">
            IELTS is accepted by more government agencies, educational institutions, and professional bodies than any other English-language test.
          </p>

          <button className="flex items-center gap-1 px-4 pb-6 pt-1 text-sm leading-none bg-white rounded-full text-[#1174E8] font-bold">
            Know more
            <Image src={arrow} width="15" height={"15"} alt="arrow" className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
