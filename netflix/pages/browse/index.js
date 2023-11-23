import React from 'react'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import { RiAlarmWarningLine } from "react-icons/ri";
import { WiDirectionDown } from "react-icons/wi";

function index() {
  return (
    <div className='w-screen h-screen'>
        <div className='w-full h-[70px] px-[65px] bg-black'>
            <div className='w-full   h-full flex justify-between'>
                {/* menu left side */}
                <div className='w-auto h-full flex items-center gap-x-10 '>
                    {/* image */}
                    <div className='w-[95px] h-full flex items-center justify-center'>
                        <Image alt='' src="/logo.png" width={95} height={50}/>
                    </div>
                    <div className='w-auto h-full'>
                        <ul className='w-full h-full flex items-center gap-x-5'>
                            <li><a href='/#'>Ana Sayfa</a></li>
                            <li><a href='/#'>Diziler</a></li>
                            <li><a href='/#'>Filmler</a></li>
                            <li><a href='/#'>Yerli ve Popüler</a></li>
                            <li><a href='/#'>Listem</a></li>
                            <li><a href='/#'>Dile Göre Göz At</a></li>
                        </ul>

                    </div>      
                </div>
                {/* menu right side */}
                <div className='w-auto h-full flex gap-x-7 items-center'>
                    <button><FaSearch className='text-white text-[23px]'/></button>
                    <button>Çocuk</button>
                    <button><RiAlarmWarningLine className='text-white text-[23px]'/></button>
                    <div className='flex items-center justify-center' >
                        <span><img src='/smileIcon.png'/></span>
                        <span><WiDirectionDown className='text-[30px]'/></span>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default index
