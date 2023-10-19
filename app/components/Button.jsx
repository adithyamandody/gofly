import Image from "next/image";
const Button = ({label, iconURL, btnstyles}) => {
  return (
    <button className={`flex justify-center items-center gap-1 px-6 py-4 border  text-sm leading-none
     bg-white rounded-full text-[#014091] font-bold ${btnstyles}`}>
        {label}
        <Image src={iconURL} width="15" height={"15"} alt="arrow" className="ml-2 rounded-full p" /> 
    </button>
  )
}

export default Button