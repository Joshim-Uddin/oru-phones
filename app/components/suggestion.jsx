import Image from 'next/image';
import React from 'react';
import image from '@/public/Ellipse.png'

const Suggestion = () => {
    return (
        <section className='ps-3'>
            <h3 className='md:text-2xl text-xl mt-5'>People you can also connect</h3>
            <div className='grid md:grid-cols-3 grid-cols-1 p-3 gap-4'>
            <div className="rounded-md border bg-base-100 shadow-xl flex justify-between items-center">
                <div className="card-body gap-1">
                    <h2 className="card-title">Joshim Uddin</h2>
                    <p>Full Stack Developer</p>
                    <p>@oruphones</p>
                    <div className="card-actions justify-start">
                    <button className="bg-violet-400 text-white rounded-md p-1 min:h-3 normal-case">Connect</button>
                    </div>
                </div>
                    <figure>
                        <Image src={image} alt="Image"></Image>
                    </figure>
            </div>
            </div>
        </section>
    );
};

export default Suggestion;