import ser1 from "../images/ser1.png";
import Image from "next/image";
export default function Sercard() {
  return (
    <div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        <div className="bg-white rounded-lg shadow p-0 text-left">
          <Image
            src={ser1}
            alt="Service 1"
            width={1000}
            height={1000}
            className="mx-0 mb-2"
          />
          <h3 className="text-base font-bold text-left pt-3 pl-4">IELTS Coaching</h3>
          <div className="max-w-sm pr-5 ">
          <p className="text-sm text-left text-black text-opacity-70 pt-3 max-w-xl pl-4 pb-5">IELTS is accepted by more government agencies, educational institutions, and professional bodies than any other English-language test.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
