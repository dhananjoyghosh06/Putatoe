import React from 'react'
import { FaInstagram} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#00838f] h-[550px] rounded'>
        <div className='text-[#fff] ml-[15px] mt-[20px]'>
            <h1 className=' text-[1.3rem] font-normal'>POPULAR SEARCHES</h1>
            <span>Grocery | Constuction | Daily Needs | Courier Service | Education<br/>| Laundry Service</span>
        </div>
        <div className='text-[#fff] m-[15px]'>
            <h1 className=' text-[1.3rem] font-normal'>About PUTATOE</h1>
            <span>About us | Contact us  <br/> | Terms & Conditions</span>
        </div>
        <div className='text-[#fff] m-[15px]'>
            <h1 className=' text-[1.3rem] font-normal'>USEFUL LINKS</h1>
            <span>Recharge & Payments <br/> | Jobs & Internships | Blog Posts  <br/>| Promotions | Loans </span>
        </div>
        <div className='text-[#fff] m-[15px] flex flex-col gap-2'>
            <h1 className=' text-[1.3rem] font-normal'>CONNECT WITH US</h1>
            <div className='flex gap-10'>
            <div className='bg-[#fff] rounded-full h-[35px] w-[35px] flex justify-center items-center'><a href="https://www.facebook.com/profile.php?id=100063455366971"><FaFacebookF className='size-5 text-[#00838f] cursor-pointer '/></a></div>
            <div className='bg-[#fff] rounded-full h-[35px] w-[35px] flex justify-center items-center'><a href="https://www.linkedin.com/company/putatoe/"><FaLinkedinIn className='size-5 text-[#00838f] cursor-pointer'/></a></div>
            <div className='bg-[#fff] rounded-full h-[35px] w-[35px] flex justify-center items-center'><a href="https://www.instagram.com/put.at.toe/"><FaInstagram className='size-6 text-[#00838f] cursor-pointer'/></a></div>
            </div>
        </div>
        <div className='text-[#fff] ml-[15px] mt-[20px]'>
            <h1 className=' text-[1.3rem] font-normal'>GET OUR WITH US</h1>
            <div className='h-[200px] w-[200px] mr-[30px]'><img src="https://www.putatoe.com/static/media/playstore.f902960a94878ee0da67.png"/></div>
        </div>
    </div>
  )
}

export default Footer