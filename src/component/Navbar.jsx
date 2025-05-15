import React from 'react'
import { HomeButton, EmulateButton, ToggleButton } from '@/component/ui/Button';
import { LanguageSelector } from '@/component/ui/LanguageSlector';
import { Avatar } from '@/component/ui/Avatar';
import { IoMenu } from 'react-icons/io5';

export function Navbar({toggleMenu}) {
  return (
    <div className='flex px-6 h-[4.75rem] w-full bg-[#3F51B5]'>
      <div className='gap-9 lg:w-1/2 flex items-center w-full h-full'>
      <button className='lg:hidden' onClick={toggleMenu}>
      <IoMenu className="text-2xl text-white cursor-pointer" />        
      </button>
        
        <img src="/logo.png" alt="Logo" className="w-[161px] h-[49px]" />
        <HomeButton className="md:block hidden" />
        <h1 className="hidden md:block font-semibold text-lg leading-[100%] tracking-[0%] text-white">Ad Creatives History</h1>
      </div>

      <div className='lg:flex items-center justify-end hidden w-1/2 h-full gap-5'>
        <EmulateButton />
        <LanguageSelector/>
        <ToggleButton />
        <Avatar name="Abhinav Meshram" />
      </div>      
    </div>
  );
}

