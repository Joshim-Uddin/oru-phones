import React from 'react';
import Image from 'next/image';
import {BsBell, BsChevronRight, BsChevronDown} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import profile from '@/public/Ellipse.png'
import logo from '@/public/image12.png'
import Link from 'next/link';

const layout = ({children}) => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className='flex items-center justify-between px-2 w-full md:border-none border-b border-gray-300 shadow-md shadow-gray-300 mb-5'>
          <div className='flex items-center gap-3 md:hidden'>
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden"> <FaBars className='md:hidden block'/></label>
            <Image src={logo} alt='logo'></Image>
          </div>
          <div className='md:absolute top-0 right-5 md:border-b md:w-full md:shadow-md md:border-gray-400 py-2 flex items-center justify-end gap-5 md:pe-10'>
            <div><BsBell  className='text-2xl'/></div>
            <div className='flex justify-between items-center gap-5 md:border py-1 px-2 rounded-md'>
              
              <div className='flex items-center gap-3'>
              <Image src={profile} alt='profile image' className='rounded-md w-16'></Image>
                <div>
                <span className='md:block hidden text-sm'>Welcome Back,</span>
                <h4 className='md:block hidden text-xl'>Md. Joshim Uddin</h4>
                </div>
              </div>
              <BsChevronDown  className='md:block hidden'/>
            </div>
          </div>
         
          </div>
          {children}
        
        </div> 
        <div className="drawer-side h-[160vh]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu relative p-4 md:w-64 w-56 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className='ps-8 py-2 text-xl bg-gray-50 rounded-md mb-5'>Dashboard</li>
            <div className='flex items-center w-full mb-4'><BsChevronRight /><li className='text-[#1A1558] md:text-xl text-base rounded-md w-11/12 hover:border hover:border-black'><Link href="/dashboard/profile" >My Profile</Link></li></div>
            <div className='flex items-center w-full'><BsChevronRight /><li className='text-[#1A1558] md:text-xl text-base rounded-md w-11/12 hover:border hover:border-black'><Link href="/dashboard/connections">My Connections</Link></li></div>
            <div className='absolute bottom-2'>
            <button className="btn">Log Out</button>
          </div>
        
          </ul>
          
        </div>
      </div>
    );
};

export default layout;