import React from 'react'
import img1 from '../assets/logo.png'
 import { FaSearch } from "react-icons/fa";
 import { FaTelegramPlane } from "react-icons/fa";

const Navbar = () => {
  return (
   <div className='sticky z-999'>
    <div className='bg-[#00838f] h-[85px] flex justify-evenly items-center sticky top-0 z-999'>
        <div>
            <img className='h-[50px] w-[50px]' src={img1}/>
            
        </div>
        <div className='relative mb-[25px]'> 
            <h1 className='font-medium text-[1.5rem] text-[#fff]'>PUTATOE</h1>
            <span className='text-[#fff] text-[11px] ml-8 mb-[10px] cursor-pointer absolute'>One Solution</span>
        </div>
            <div className='relative'>
            <span className="flex items-center justify-center bg-red-500 text-white font-semibold text-xs rounded-full h-4 w-4 absolute bottom-3 right-0">0</span>
            <img src="https://www.putatoe.com/static/media/bell-svgrepo-com.6f0101ed128197b6d089082da933240d.svg" className='cursor-pointer h-[24px] w-[24px]' alt=''/> 
            </div>
            <div className='relative'>
            <span className="flex items-center justify-center bg-red-500 text-white font-semibold text-xs rounded-full h-4 w-4 absolute bottom-3 left-0 ml-[20px]">0</span>
            <img src="https://www.putatoe.com/static/media/cart-svgrepo-com.a820f2596d361153df29ebe4dccd767f.svg" className=" cursor-pointer h-[24px] w-[24px]" alt=''/> 
            </div>      
        <div className=''>
            <img src ="https://storage.googleapis.com/putatoeapp/Image/testImage/GJLF8VZ" alt ="" className='rounded-full h-[40px] w-[40px]'/>
        </div>
    </div>
    <div className='h-[60px] bg-[#00838f] flex gap-[10px] p-[15px] top-[65px] justify-evenly'>
        <div className='items-center bg-[#fff] rounded flex overflow-hidden h-[35px] w-[90%] justify-evenly'>
        <FaSearch className='w-[10%] size-8 mr-[5px] pl-[8px]'/>
        <input placeholder='Search For Products and Brands' className='w-[80%]'/>
        <FaTelegramPlane className='cursor-pointer w-[10%] size-8 mr-[10px] pl-[10px]'/>
        </div>
        <div className='relative w-[10%] mt-1 ml-3'>
            <span className="flex items-center justify-center bg-red-500 text-white font-semibold text-xs rounded-full h-4 w-4 absolute bottom-4 right-0 ml-[20px]">0</span>
            <img src=" https://www.putatoe.com/static/media/comment-multiple-svgrepo-com.f69425ee860b88e3f8e436b83aa01fee.svg" className=" cursor-pointer h-[24px] w-[24px]" alt=''/> 
        </div>
    </div>

    </div>
  )
}

export default Navbar;