import { IoIosArrowDown, IoIosGlobe } from "react-icons/io";

export function LanguageSelector() {

  return (
    <div className='flex items-center gap-1'>
      <IoIosGlobe className="w-5 h-5 text-white border-none" />
      <h1 className="font-medium text-[14px] leading-[100%] tracking-[0px] text-white">English</h1>
      <button>
        <IoIosArrowDown className="w-3 h-3 text-white" />
      </button>
    </div>
  );
}