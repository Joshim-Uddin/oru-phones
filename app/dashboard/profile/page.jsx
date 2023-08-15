import React from 'react';
import Ellipse from '@/public/Ellipse.png'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { BiSolidPolygon } from 'react-icons/bi';
import logo from '@/public/image12.png'

const Profile = () => {
    return (
        <main className='md:absolute top-28 w-9/12'>
           <section className='bg-[#1E2875] rounded-md px-10 text-white md:h-56'>
                <p className='py-4'>My Profile</p>
           </section>
           <div className='bg-white rounded-lg shadow-md md:p-8 p-4 -mt-16 w-11/12 mx-auto grid grid-cols-2 md:gap-12 gap-4'>
             <section className='flex flex-col gap-8'>
             <div className='flex justify-between items-center mb-10'>
                <Image src={Ellipse} alt="user image"></Image>
                <button className="h-10 px-3 py-2 text-center bg-gray-200 text-md rounded-md normal-case">Upload Photo</button>
                </div>
                <div className='flex flex-col gap-8 border shadow-md p-5 rounded-lg'>
                    <div className='flex items-center justify-between'>
                       <div>
                       <label htmlFor="name">Your Name</label>
                        <p>Md. Joshim Uddin</p>
                       </div>
                       <button className="h-10 px-3 py-2 text-center bg-gray-200 text-md rounded-md normal-case">Edit</button>
                    </div>
                    <div className='flex items-end justify-between'>
                       <div>
                       <label htmlFor="name">Your Email</label>
                        <p>joshimuddin@gmail.com</p>
                       </div>
                       <button className="h-10 px-3 py-2 text-center bg-gray-200 text-md rounded-md normal-case">Edit</button>
                    </div>
                    <div className='flex items-end justify-between'>
                       <div>
                       <label htmlFor="name">Phone Number</label>
                        <p>+8801712113334</p>
                       </div>
                       <button className="h-10 px-3 py-2 text-center bg-gray-200 text-md rounded-md normal-case">Edit</button>
                    </div>
                    
                </div>
                <div className='border shadow-md p-5 rounded-lg'>
                    <div className='flex justify-between'>
                    <h4>About <span className='text-[#413B89] font-semibold'>Joshim Uddin</span></h4>
                    <button className="h-10 px-3 py-2 text-center bg-gray-200 text-md rounded-md normal-case">Edit</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eaque, aliquid quasi quo alias quas nisi suscipit, est recusandae autem totam quis reiciendis officia cum. Impedit reprehenderit assumenda error accusantium.</p>
                </div>
                <div className='border shadow-md p-5 rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <h4 className='font-semibold'>Skills</h4>
                    <button className="h-10 px-3 py-2 text-center bg-gray-200 text-md rounded-md normal-case">Edit</button>
                    </div>
                    <ul className='flex flex-col gap-5'>
                        <li>Nextjs</li>
                        <li>Typescript</li>
                    </ul>
                </div>
             </section>
             <section className='flex flex-col gap-4'>
                <div className='flex items-center justify-between gap-10 p-4 border shadow-md rounded-md'>
                    <div>
                    <h6 className='text-xl font-semibold mb-3'>Professional Details</h6>
                    <p>This are the professional details shown to users in the app.</p>
                    </div>
                    <div className='relative'>
                    <FaStar className='text-6xl transform rotate-12 text-[#2684FC]'/>
                    <FaStar className='text-4xl transform -rotate-3 text-[#413B89] absolute top-7 right-2'/>
                    </div>
                </div>
                <div id='certifications'>
                    <div className='flex items-center justify-between mb-4'>
                    <h6 className='text-xl font-semibold mb-3'>Certifications</h6>
                    <button className="h-10 px-3 py-2 text-center bg-gray-200 text-md rounded-md normal-case">Edit</button>
                    </div>
                    <div className='border shadow-md rounded-full grid grid-cols-3 justify-evenly items-center p-4'>
                        <div className='relative ps-5'>
                            <BiSolidPolygon className='text-6xl text-amber-400'/>
                            <FaStar className='text-xl text-white absolute top-5 left-10'/>
                        </div>
                        <div className='ps-5'>
                            <p>Python</p>
                            <small>Coding Ninjas</small>
                        </div>
                    </div>
                </div>
                <div id='Experience'>
                    <div className='flex items-center justify-between mb-4'>
                    <h6 className='text-xl font-semibold mb-3'>Experience</h6>
                    <button className="h-10 px-3 py-2 text-center bg-gray-200 text-md rounded-md normal-case">Edit</button>
                    </div>
                    <div className='flex flex-col gap-4'> 
                    <div className='border shadow-md rounded-md flex gap-4 items-center p-4 relative'>
                        
                        <div>
                            <p className='text-sm font-semibold text-center'>7 years (2014-21) </p>
                            <p className='text-sm text-center'>Oruphones</p>
                        </div>                            
                        <div>
                            <p className='text-sm font-semibold text-center'>Full Time </p>
                            <p className='text-sm  text-center'>-- Full Stack Developer </p>
                        </div>                            
                        <Image src={logo} alt='logo' className='absolute right-3'></Image> 
                    </div>
                    <div className='border shadow-md rounded-md flex gap-4 items-center p-4 relative'>
                        
                        <div>
                            <p className='text-sm font-semibold text-center'>6 months (2014) </p>
                            <p className='text-sm text-center'>Oruphones</p>
                        </div>                            
                        <div>
                            <p className='text-sm font-semibold text-center'>Intern </p>
                            <p className='text-sm  text-center'>-- Full Stack Developer </p>
                        </div>                            
                        <Image src={logo} alt='logo' className='absolute right-3'></Image> 
                    </div>
                    </div>
                    
                </div>
                <div id='education'>
                    <div className='flex items-center justify-between py-5 mb-4'>
                    <h6 className='text-xl font-semibold'>Education</h6>
                    <button className="h-10 px-3 py-2 text-center bg-gray-200 text-md rounded-md normal-case">Edit</button>
                    </div>
                    <div className='border shadow-md rounded-md p-4'>
                        <div className='relative ps-5'>
                            <h5 className='text-blue-400 font-semibold mb-3'>IIT Hyderabad</h5>
                            <div className='flex justify-between items-center mb-3'>
                            <p>(2010-14)</p>
                            <p>Btech</p>
                            </div>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
             </section>
           </div>
           <div>
            
           </div>
        </main>
    );
};

export default Profile;