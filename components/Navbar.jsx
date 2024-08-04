"use client";

import {useState} from 'react'
import { IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import { HiMiniBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

const LinksList = ()=>(
    <ul className="second flex flex-col lg:flex-row items-center gap-[30px]">

    <li className='nav-link'>إتصل بنا</li>
    <li className='nav-link'>المدونة</li>
    <li className='nav-link'>المدونة</li>
    <li className='nav-link'>المدونة</li>
    <li className='nav-link'>المدونة</li>


  </ul>
)

const IconsList = ()=>(

    <div className="first flex items-center gap-[30px]">
        <IoBagOutline className='nav-icon' />
        <FaRegUser className='nav-icon' />
        <span className='nav-icon'>ر.س</span>
        <CiSearch className='nav-icon' />
      </div>

)

const Logo = ()=><Link href="/" className='nav-link font-bold'>Logo</Link>

const Navbar = () => {

  const [showList,setShowList] = useState(false);


  return (

    <div className="bg-white">

    <div className='flex justify-between items-center px-[20px] lg:pl-[100px] lg:pr-[60px] py-[25px] border-b'>
      
      <IconsList />

      <div className="flex items-center gap-[30px]">

      <div className="hidden lg:block"><LinksList /></div>

      <Logo />


      </div>
     
      <HiMiniBars3 onClick={()=>setShowList(true)} className='text-[30px] cursor-pointer lg:hidden' />

    </div>

    {/* small devices */}

      <div className={`fixed w-full h-full ${showList ? "top-0" : "-top-full"} left-0 z-[10] bg-[#eee] duration-500`}>

        <MdClose onClick={()=>setShowList(false)} className='absolute top-[20px] right-[20px] text-[40px] cursor-pointer' />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LinksList />
        </div>

      </div>

    


    </div>
  )
}

export default Navbar
