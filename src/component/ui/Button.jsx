import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

export function HomeButton() {
  return (
    <button 
      className="
        w-[101px] 
        h-[42px] 
        rounded-[32px] 
        [background:linear-gradient(90deg,_#C85ED8_0%,_#A079F8_70.57%)] 
        [box-shadow:0px_0px_14.9px_0px_#0000001F]
        font-medium 
        text-lg 
        leading-[100%] 
        tracking-[0%] 
        text-white
      "
    >
      Home
    </button>
  );
}

export function EmulateButton() {
  return (
    <button
      className="
        w-[175px] 
        h-[31px] 
        rounded-[15.5px] 
        [background:linear-gradient(284.35deg,_#C85ED8_-20.82%,_#6D3DDA_108.46%)]
        font-semibold 
        text-[11px] 
        leading-[100%] 
        tracking-[0px] 
        text-white
        flex items-center justify-center gap-1
      "
    >
      <IoSearch className="w-4 h-4 text-yellow-500" />
      Emulate Competitor Ads
    </button>
  );
}

export function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <button
      className="
        w-[60px] 
        h-[31px] 
        rounded-[15.5px] 
        border-[0.5px] 
        [background:#1F296A] 
        [border:linear-gradient(90deg,_#C85ED8_0%,_#A079F8_70.57%)] 
        relative
        transition-all duration-300
      "
      onClick={() => setIsToggled(!isToggled)}
    >
      <div
        className={`
          w-[18px] 
          h-[19px] 
          bg-[#F4DC9F] 
          rounded-full 
          absolute 
          top-1/2 
          -translate-y-1/2 
          transition-all duration-300 ease-in-out
          ${isToggled ? 'translate-x-[37px]' : 'translate-x-[5px]'}
        `}
      />
    </button>
  );
}