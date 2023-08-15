import React from 'react';
import Ellipse from '@/public/Ellipse.png'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const Profile = () => {
    return (
        <main className='md:absolute top-28 w-9/12'>
           <section className='bg-[#1E2875] rounded-md px-10 text-white md:h-56'>
                <p className='py-4'>My Profile</p>
           </section>
           <div className='bg-white rounded-lg shadow-md md:p-8 p-4 -mt-16 w-11/12 mx-auto grid grid-cols-7 md:gap-12 gap-4'>
             <section className='col-span-4'>
             <div className='flex justify-between items-center'>
                <Image src={Ellipse} alt="user image"></Image>
                <button className="btn normal-case">Upload Photo</button>
                </div>
                <div className='flex flex-col gap-5 border shadow-md p-5 rounded-lg'>
                    <div className='flex items-end justify-between'>
                       <div>
                       <label htmlFor="name">Your Name</label>
                        <p>Md. Joshim Uddin</p>
                       </div>
                       <button className="btn normal-case">Edit</button>
                    </div>
                    <div className='flex items-end justify-between'>
                       <div>
                       <label htmlFor="name">Your Email</label>
                        <p>joshimuddin@gmail.com</p>
                       </div>
                       <button className="btn normal-case">Edit</button>
                    </div>
                    <div className='flex items-end justify-between'>
                       <div>
                       <label htmlFor="name">Phone Number</label>
                        <p>+8801712113334</p>
                       </div>
                       <button className="btn normal-case">Edit</button>
                    </div>
                    
                </div>
                <div className='border shadow-md p-5 rounded-lg'>
                    <div className='flex justify-between'>
                    <h4>About <span className='text-[#413B89] font-semibold'>Joshim Uddin</span></h4>
                    <button className="btn normal-case">Edit</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eaque, aliquid quasi quo alias quas nisi suscipit, est recusandae autem totam quis reiciendis officia cum. Impedit reprehenderit assumenda error accusantium.</p>
                </div>
                <div className='border shadow-md p-5 rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <h4 className='font-semibold'>Skills</h4>
                    <button className="btn normal-case">Edit</button>
                    </div>
                    <ul className='flex flex-col gap-5'>
                        <li>Nextjs</li>
                        <li>Typescript</li>
                    </ul>
                </div>
             </section>
             <section className='col-span-3'>
                <div className='flex items-center justify-between gap-10 p-4 border shadow-md rounded-md'>
                    <div>
                    <h6>Professional Details</h6>
                    <p>This are the professional details shown to users in the app.</p>
                    </div>
                    <div className='relative'>
                    <FaStar className='text-6xl transform rotate-12 text-[#2684FC]'/>
                    <FaStar className='text-4xl transform -rotate-3 text-[#413B89] absolute top-7 right-2'/>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
             </section>
           </div>
           <div>
            
           </div>
        </main>
    );
};

export default Profile;