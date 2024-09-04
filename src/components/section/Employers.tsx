import React from 'react';
import Image from "next/image";
import Heading from "../common/Heading";

const profileItems = [
    { name: 'Networking', angle: 0 },
    { name: 'Skills', angle: 36 },
    { name: 'Experience', angle: 72 },
    { name: 'Portfolio', angle: 108 },
    { name: 'Education', angle: 144 },
    { name: 'Publications', angle: 180 },
    { name: 'Goals', angle: 216 },
    { name: 'Achievements', angle: 252 },
    { name: 'Languages', angle: 288 },
    { name: 'Projects', angle: 324 },
];

function Employers() {
  return (
    <div className="mt-24 grid lg:grid-cols-2 justify-between gap-12 items-center">
      <div className='w-fit bg-gray p-14 lg:p-24 rounded-xl'>
        <div className="p-12 relative flex items-center justify-center">
          <div className="p-5 border-[8px] lg:w-52 lg:h-52 w-40 h-40 border-secondary rounded-full flex items-center justify-center">
            <div className="w-h-24 h-24 flex items-center justify-center p-6 lg:p-12 border rounded-full">
              <Image src={'/icon.png'} alt="" width={80} height={80} />
            </div>
          </div>
          {profileItems.map((item, index) => (
            <div
              key={index}
              className="absolute w-full h-full flex items-center justify-center"
              style={{ transform: `rotate(${item.angle}deg)` }}
            >
              <div className="w-full h-full relative">
                <div
                  className="absolute top-[40px]  left-1/2 -ml-2 w-5 h-5 bg-primary rounded-full"
                />
                <span
                  className={`absolute text-blue-200 top-[0px] lg:-top-[15px] left-1/2 py-0.5 text-xs lg:text-sm ${item.angle > 150 ? 'border-t' : 'border-b'}`}
                  style={{
                    transform: `translate(-50%, -50%) rotate(-${item.angle}deg)`,
                  }}
                >
                  {item.name}
                </span>
              </div>
            </div>
          ))}  
        </div>
      </div>
      
      <div className='space-y-8'>
        <Heading title="Be the candidate employers are looking for" subTitle="stand out in the job market" category="Profile" />
        <p className='lg:text-lg text-secondary'>Create a comprehensive profile and start receiving interview invites and job offers that align with your unique skills. <br /> Don’t miss out on your dream job—get started today and make your profile stand out.</p>
        <button className='bg-primary py-2.5 px-3.5 rounded-lg'>
            Create now
        </button>
    </div>
    </div>
  );
}

export default Employers;