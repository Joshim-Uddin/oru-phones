import React from 'react';
import image from '@/public/Ellipse.png'
import Image from 'next/image';
import Suggestion from '@/app/components/suggestion';

const page = () => {
    return (
        <div className='md:absolute md:top-28 top-32 md:w-9/12 w-11/12 mx-auto'>
            <header className='bg-[#1E2875] md:h-24 h-12 rounded-md'>
                <h2 className='text-white md:text-3xl text-xl pt-4 ps-3'>My Connections</h2>
            </header>
            <section className='grid md:grid-cols-3 grid-cols-1 p-3 gap-4'>
            <div className="rounded-md border bg-base-100 shadow-xl flex justify-between items-center">
                <div className="card-body gap-1">
                    <h2 className="card-title">Joshim Uddin Mondol</h2>
                    <p>Full Stack Developer</p>
                    <p>@oruphones</p>
                    <div className="card-actions justify-start">
                    <button className="bg-violet-400 text-white rounded-md p-1 min:h-3 normal-case">Remove Connection</button>
                    </div>
                </div>
                
                    <figure>
                        <Image src={image} alt="Image"></Image>
                    </figure>
                
            </div>
            <div className="rounded-md border bg-base-100 shadow-xl flex justify-between items-center">
                <div className="card-body gap-1">
                    <h2 className="card-title">Joshim Uddin</h2>
                    <p>Full Stack Developer</p>
                    <p>@oruphones</p>
                    <div className="card-actions justify-start">
                    <button className="bg-violet-400 text-white rounded-md p-1 min:h-3 normal-case">Remove Connection</button>
                    </div>
                </div>
                
                    <figure>
                        <Image src={image} alt="Image"></Image>
                    </figure>
                
            </div>
            <div className="rounded-md border bg-base-100 shadow-xl flex justify-between items-center">
                <div className="card-body gap-1">
                    <h2 className="card-title">Joshim Uddin</h2>
                    <p>Full Stack Developer</p>
                    <p>@oruphones</p>
                    <div className="card-actions justify-start">
                    <button className="bg-violet-400 text-white rounded-md p-1 min:h-3 normal-case">Remove Connection</button>
                    </div>
                </div>
                
                    <figure>
                        <Image src={image} alt="Image"></Image>
                    </figure>
                
            </div>
            </section>
            <Suggestion />
        </div>
    );
};

export default page;