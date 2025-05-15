import React from 'react';
import { Avatar } from '@/component/ui/Avatar';
import { FiEdit2, FiMoreVertical, FiSearch } from 'react-icons/fi';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { BiCopy } from 'react-icons/bi';
import image1 from '/image-1.jpg'
import image2 from '/image-2.png'

export function DemoChat() {
  return (
    <div className="relative w-full bg-[#1F296A] overflow-x-hidden flex flex-col p-4">
      <div className="flex justify-end gap-2 mb-3">
        <div className="flex items-center">
          <Avatar name="Abhinav Meshram" />
          <div className="flex items-center bg-[#324094] text-white text-sm max-w-xs md:w-[257px] h-auto min-h-[58px] rounded-t-[20px] rounded-br-[20px] px-4 py-3 ml-2">
            <span className="text-xs">Create atleast 4 images similar to this</span>
          </div>
        </div>
      </div>

      <div className="md:w-60 md:h-48 self-end w-40 h-32 mb-3">
        <img
          src={image2}
          alt="Genie Character"
          className="object-contain w-full h-full"
        />
      </div>

      <div className="flex items-center space-x-3 max-w-[90%] mb-3 ml-4 md:ml-12">
        <div className="flex-shrink-0 w-10 h-10 rounded-full p-0.5 bg-gradient-to-br from-[#C85ED8] to-[#A079F8]">
          <div className="w-full h-full rounded-full bg-[#1F296A] flex items-center justify-center">
            <FiSearch className="w-4 h-4 text-white" />
          </div>
        </div>

        <p className="md:text-base text-sm font-normal text-white">
          Sure, here are a few images similar to the one you provided:
        </p>
      </div>

      <div className="w-[90%] max-w-[622px] h-auto md:h-[180px] rounded-2xl flex flex-col md:flex-row shadow-md overflow-hidden mb-3 ml-4 md:ml-16">
        <div className="relative w-full md:w-[204px] h-48 md:h-full bg-gradient-to-b from-[#3F51B5] to-[#673AB7] md:rounded-l-2xl backdrop-blur-sm">
          <div className="absolute top-2 right-2 w-7 h-7 border border-white/30 bg-[#1F296A] rounded-full flex items-center justify-center">
            <FiEdit2 className="text-white" size={14} />
          </div>

          <p className="pt-9 px-2 w-[95%] md:w-[193px] h-auto md:h-[133px] text-white text-xs leading-tight font-semibold text-center">
            I'm still Learning and can't create everything yet, especially photorealistic images of people or things that go against my guidelines. Let me know if you'd like to try something else!
          </p>
        </div>

        <div className="relative w-full md:w-[418px] h-auto px-4 pt-3 pb-6 bg-[#324094] backdrop-blur-sm flex flex-col">
          <div className="flex items-start justify-between">
            <h3 className="text-[#C5BCFF] text-lg font-medium">
              Title Name
            </h3>

            <div className="w-7 h-7 border bg-[#1F296A] border-white/30 rounded-full flex items-center justify-center">
              <FiMoreVertical className="text-white" size={16} />
            </div>
          </div>

          <p className="text-white/80 w-full mt-2 text-xs font-normal leading-tight">
            Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae Est Sit Tellus Rhoncus. Proin Tincidunt Id Ut Amet Consectetur. Risus Vitae Est Sit Tellus Risus Id Sit Tellus Risus Id Morbi Rhoncus. Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae.
          </p>

          <div className="bottom-2 right-4 absolute flex justify-end gap-4 mt-2">
            <div className="flex items-center justify-center w-5 h-5">
              <HiOutlineSpeakerWave className="text-white" size={16} />
            </div>

            <div className="flex items-center justify-center w-6 h-6">
              <BiCopy className="text-white/40" size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] max-w-[622px] h-auto md:h-[180px] rounded-2xl flex flex-col md:flex-row overflow-hidden bg-[#324094] backdrop-blur-sm shadow-md mb-4 ml-4 md:ml-16">
        <div className="relative w-full md:w-[207px] h-48 md:h-full rounded-l-2xl overflow-hidden bg-blue-400">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center w-full h-full">
            <img
              src={image1}
              alt="Genie on magic carpet"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute top-2 right-2 w-7 h-7 bg-[#1F296A] border border-white/30 rounded-full flex items-center justify-center">
            <FiEdit2 className="text-white" size={14} />
          </div>
        </div>

        <div className="relative w-full md:w-[415px] h-auto px-4 py-3 pb-6 flex flex-col">
          <div className="absolute top-2 right-2 w-7 h-7 bg-[#1F296A] border border-white/30 rounded-full flex items-center justify-center">
            <FiMoreVertical className="text-white" size={16} />
          </div>

          <h3 className="text-[#C5BCFF] text-lg font-medium mt-2">
            Title Name
          </h3>

          <p className="text-white/80 w-full mt-2 text-xs font-normal leading-tight">
            Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae Est Sit Tellus Rhoncus. Proin Tincidunt Id Ut Amet Consectetur. Risus Vitae Est Sit Tellus Risus Id Sit Tellus Risus Id Morbi Rhoncus. Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae.
          </p>

          <div className="bottom-2 right-4 absolute flex justify-end gap-3 mt-2">
            <div className="flex items-center justify-center w-5 h-5">
              <HiOutlineSpeakerWave className="w-4 h-4 text-[#C85ED8]" />
            </div>

            <div className="flex items-center justify-center w-6 h-6">
              <BiCopy className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}