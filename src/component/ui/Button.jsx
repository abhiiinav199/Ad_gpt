import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

export function HomeButton() {
  const [isPressed, setIsPressed] = useState(false);
  
  return (
    <button 
      className={`
        w-24
        h-10
        rounded-full
        bg-gradient-to-r
        from-purple-500
        to-indigo-400
        shadow-md
        font-medium 
        text-lg 
        text-white
        transition-all
        duration-300
        ${isPressed 
          ? 'opacity-90 transform scale-95 shadow-sm' 
          : 'hover:shadow-lg hover:brightness-110'
        }
      `}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      Home
    </button>
  );
}

export function EmulateButton() {
  const [isPressed, setIsPressed] = useState(false);
  
  return (
    <button
      className={`
        w-44
        h-8
        rounded-full
        bg-gradient-to-r
        from-purple-500
        to-indigo-600
        font-semibold 
        text-xs
        text-white
        flex items-center justify-center gap-1
        transition-all
        duration-300
        ${isPressed 
          ? 'opacity-90 transform scale-95 shadow-sm' 
          : 'hover:shadow-lg hover:brightness-110'
        }
      `}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
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