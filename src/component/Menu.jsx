import React, { useState } from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoBrush, IoCamera, IoCube, IoFilm, IoGlobe, IoRefresh } from 'react-icons/io5';
import { IoColorPalette } from 'react-icons/io5';

export function Menu({ isOpen }) {

  const [brandDescription, setBrandDescription] = useState('');

  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= 50) {
      setBrandDescription(e.target.value);
    }
  };

  return (
    <div
  className={`
    w-[16.563rem]
    h-full  
    [background:linear-gradient(209.2deg,_#3F51B5_42.5%,_#673AB7_92.49%)]
    [box-shadow:0_0_14.9px_0_#0000001F]
    rounded-[0.625rem]
    text-white
    transform
    transition-transform
    duration-500
    ease-in-out
    ${isOpen ? 'translate-x-2' : '-translate-x-full'} 
    lg:translate-x-4
    z-10
  `}
>

      <div className="border-white/20 flex gap-3 p-4 border-b">
        <button className="text-xs leading-[100%] py-1 px-2 text-white/80">Ad Copy</button>
        <button className="font-semibold text-xs py-1 px-2 text-[12px] leading-[100%] tracking-[0%]">Ad Creative</button>
        <button className="text-xs leading-[100%] py-1 px-2 text-white/80">Ad Video</button>
      </div>

      <div className='flex flex-col'>

        <div className='border-white/20 flex flex-col gap-3 p-3 border-b'>

          <div className="flex flex-col gap-2">
            <label htmlFor="platform" className="flex items-center gap-1">
              <span className="font-normal text-xs leading-[100%]">Select Platform</span>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </label>
            <select
              id="platform"
              className="bg-[#3445A1] rounded-md p-2 w-full text-xs font-normal outline-none placeholder:text-white/60 opacity-40 border-white/20 border-[0.5px]"
              defaultValue=""
              aria-required="true"
            >
              <option value="" disabled>Select ad platform</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="linkedin">LinkedIn</option>
              <option value="youtube">YouTube</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="brandName" className="flex items-center gap-1">
              <span className="font-normal text-xs leading-[100%]">Brand Name</span>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </label>
            <input
              id="brandName"
              type="text"
              placeholder="Enter brand name"
              className="bg-[#3445A1] rounded-md p-2 w-full text-xs font-normal outline-none placeholder:text-white/60 opacity-60 border-white/20 border-[0.5px]"
              aria-required="true"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="brandDescription" className="flex items-center gap-1">
              <span className="font-normal text-xs leading-[100%]">Brand Description</span>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </label>
            <div className="relative">
              <textarea
                id="brandDescription"
                placeholder="Enter description"
                className="bg-[#3445A1] rounded-md p-2 w-full text-xs font-normal outline-none placeholder:text-white/60 opacity-60 border-white/20 border-[0.5px] h-16 resize-none"
                maxLength={50}
                value={brandDescription}
                onChange={handleDescriptionChange}
                aria-describedby="charCount"
              />
              <div id="charCount" className="bottom-2 right-2 text-white/60 absolute text-[6px]">{brandDescription.length}/50 characters</div>
            </div>
          </div>

        </div>

        <div className='border-white/20 flex flex-col gap-3 p-3 border-b'>

          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-1">
              <label class="font-normal text-xs leading-[100%]">Aspect Ratio</label>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </div>
            <div class="flex gap-2">
              <button class="w-[68.94px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <div class="w-5 h-5 bg-[#474CB5] rounded-[2px] border-[0.5px] border-white opacity-60"></div>
                <span class="font-normal text-xs leading-[100%] text-white">1:1</span>
              </button>
              <button class="w-[68.94px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <div class="w-3 h-5 bg-[#474CB5] rounded-[2px] border-[0.5px] border-white opacity-60"></div>
                <span class="font-normal text-xs leading-[100%] text-white">2:3</span>
              </button>
              <button class="w-[68.94px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <div class="w-5 h-3 bg-[#474CB5] rounded-[2px] border-[0.5px] border-white opacity-60"></div>
                <span class="font-normal text-xs leading-[100%] text-white">16:9</span>
              </button>
              <button class="w-[21px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center">
                <IoIosArrowDown class="w-3 h-3 text-white"></IoIosArrowDown>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span className="font-normal text-xs leading-[100%]">Image Style</span>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-2">
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <IoRefresh className="opacity-40 w-3 h-3 text-white" />
                <span className="font-normal text-xs leading-[100%] text-white">Auto</span>
              </button>
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <IoGlobe className="opacity-40 w-3 h-3 text-white" />
                <span className="font-normal text-xs leading-[100%] text-white">General</span>
              </button>
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <IoCamera className="opacity-40 w-3 h-3 text-white" />
                <span className="font-normal text-xs leading-[100%] text-white">Realistic</span>
              </button>
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <IoBrush className="opacity-40 w-3 h-3 text-white" />
                <span className="font-normal text-xs leading-[100%] text-white">Design</span>
              </button>
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <IoCube className="opacity-40 w-3 h-3 text-white" />
                <span className="font-normal text-xs leading-[100%] text-white">3D</span>
              </button>
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <IoFilm className="opacity-40 w-3 h-3 text-white" />
                <span className="font-normal text-xs leading-[100%] text-white">Anime</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span className="font-normal text-xs leading-[100%]">Generation Pace</span>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <span className="font-normal text-xs leading-[100%] tracking-[0%]">Fast</span>
              </button>
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <span className="font-normal text-xs leading-[100%] tracking-[0%]">Medium</span>
              </button>
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <span className="font-normal text-xs leading-[100%] tracking-[0%]">Slow</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span className="font-normal text-xs leading-[100%]">Number of Ad Creatives</span>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </div>
            <div className="flex gap-2">
              <button className="w-[31px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1"><span className="font-normal text-xs leading-[100%] tracking-[0%]">1</span></button>
              <button className="w-[31px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1"><span className="font-normal text-xs leading-[100%] tracking-[0%]">2</span></button>
              <button className="w-[31px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1"><span className="font-normal text-xs leading-[100%] tracking-[0%]">3</span></button>
              <button className="w-[31px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1"><span className="font-normal text-xs leading-[100%] tracking-[0%]">4</span></button>
              <button className="w-[31px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1"><span className="font-normal text-xs leading-[100%] tracking-[0%]">5</span></button>
            </div>
          </div>

          {/* Color Palette */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span className="font-normal text-xs leading-[100%]">Color Palette</span>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </div>
            <div className='flex gap-2'>
              <div className="flex items-center justify-between bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20">
                <span className="font-normal text-xs leading-[100%] p-2">Auto</span>
                <div className="bg-[#2D3A84] flex gap-1 w-[136px] h-[29px] items-center justify-center m-0">
                  <div className="rounded-xs w-4 h-4 bg-white"></div>
                  <div className="rounded-xs w-4 h-4 bg-pink-300"></div>
                  <div className="rounded-xs w-4 h-4 bg-red-500"></div>
                  <div className="rounded-xs w-4 h-4 bg-orange-500"></div>
                  <div className="rounded-xs w-4 h-4 bg-yellow-500"></div>
                </div>
              </div>
              <button className='p-2 bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20'>
                <IoIosArrowDown className="w-3 h-3 text-white" />
              </button>
            </div>


          </div>

        </div>

        <div className="justify-end p-2 mt-32">
          <div className="w-[246px] h-[92px] rounded-[5px] [background:linear-gradient(284.35deg,_#C85ED8_-20.82%,_#6D3DDA_108.46%)] flex flex-col items-center justify-center">
            <div className="border-white/20 flex items-center justify-between w-full p-2 border-b">
              <span className="font-semibold text-xs leading-[100%] tracking-[0px] text-white">Annual Platinum Plan</span>
              <button className="w-[76px] h-[30px] bg-white rounded-[26.5px] border-[1px] border-[#C85ED8] font-medium text-xs leading-[100%] tracking-[0px] text-[#673AB7]">
                Upgrade
              </button>
            </div>
            <div className="rounded-[29.5px] border-[0.8px] border-white/50 w-[214px] h-[30px] flex items-center m-2">
              <div className="flex items-center justify-center gap-1 border-r-[0.8px] border-white/50 w-1/2">
                <IoRefresh className="text-yellow-600 bg-[#1E293B] rounded-full w-4 h-4 flex items-center justify-center p-[1px]" />
                <span className="text-xs">20/500</span>
              </div>
              <div className="flex items-center gap-1 border-l-[0.8px] border-white/50 justify-center w-1/2">
                <IoColorPalette className="text-yellow-600 bg-[#1E293B] rounded-full w-4 h-4 flex items-center justify-center p-[1px]" />
                <span className="text-xs">15/300</span>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}
