import React, { useState } from 'react';
import { IoThunderstorm } from 'react-icons/io5';

export function PromptBox() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="relative w-full max-w-3xl">
      <div className="bg-gradient-to-r from-[#3F51B5] via-[#4E5CBB] to-[#673AB7] shadow-[0_0_0.93125rem_0_rgba(0,0,0,0.12)] relative flex flex-col w-full p-4 rounded-lg">
        <label className="pl-1 mb-1 text-sm font-medium text-white">Prompt</label>
        <textarea
          className="text-white/80 placeholder-white/60 w-full h-12 text-sm bg-transparent border-none outline-none resize-none"
          placeholder="Describe your ad copy. Get creative..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex justify-end mt-1">
        <button className="w-[156px] h-[47px] outline-none border-none p-0">
        <div className="w-[156px] h-[44px] rounded-[26.5px] border border-[#C85ED8] bg-[#1F296A] flex items-center px-[8px] gap-2">
          {/* Icon */}
          <div className="w-[43px] h-[43px] flex items-center justify-center">
            <IoThunderstorm  className="text-yellow-400 text-[20px]" />
          </div>
          {/* Generate Text */}
          <div className="w-[70px] h-[20px] flex items-center justify-end">
            <p className="text-white text-[16px] font-medium leading-[100%] text-right">
              Generate
            </p>
          </div>
        </div>
      </button>
        </div>
      </div>
    </div>
  );
}