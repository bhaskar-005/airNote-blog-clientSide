import React from 'react';
import { tech,socialLinks } from '../data';
const About = () => {
  return (
    <div className='flex justify-center items-center '>
      <div className='bg-white shadow2 rounded-[10px] mt-10 max-w-[1000px] sm:mx-10 mx-2 sm:p-10 p-4 flex flex-col gap-5'>
       <h1 className='text-third_colour text-[24px] font-[700] '>What Is AirNote ?</h1>
       <p className='text-second_colour text-[15px] font-[500] opacity-80'>AirNote is a really easy and neat blog app. It helps you write and share your thoughts in a simple way, even if you're new to blogging. The design is clean and straightforward, making it perfect for both beginners and experienced writers. Expressing yourself is super easy with AirNote – no techy stuff to worry about!</p>
      <div>
        <h1 className='text-third_colour text-[24px] font-[700] '>Features :</h1>
        <ul className='text-second_colour text-[15px] font-[500] list-disc mx-6 mt-2 opacity-80'>
          <li>Responsive UI for enjoyable reading.</li>          
          <li>Secure User Authentication</li>
          <li>Effortless Blog Creation</li>
          <li>Smooth content updates and deletions. </li>
        </ul>
      </div> 
      {/* tech */}
      <div className='mt-6'>
           <h1 className='text-third_colour text-[24px] font-[700] '>Social Links:</h1>
           <p className='text-second_colour text-[15px] font-[500] opacity-80'>Feel free to reach me out.</p>
             <div className='mt-7 flex flex-wrap gap-6'>
             {
               socialLinks.map((data)=>(
                <a href={data.link} target='_blank'>
                 <button className='flex items-center bg-first_colour input bg-opacity-5 hover:bg-opacity-10 px-4 py-2 justify- gap-3 rounded-[7px]'>
                    <div className='sm:w-[27px] w-[21px]'><img src={data.img} className='w-full h-full'/></div>
                    <h1 className='sm:text-[17px] text-[14px] text-third_colour font-[600]'>{data.name}</h1>
                 </button>
                 </a>
               ))
             }
       </div>
      </div>
       {/* tech */}
       <div className='mt-6'>
           <h1 className='text-third_colour text-[24px] font-[700] '>AirNote Tech Stack:</h1>
             <div className='mt-7 flex flex-wrap gap-6'>
             {
               tech.map((data)=>(
                <a href={data.link} target='_blank'>
                 <button className='flex items-center bg-first_colour input bg-opacity-5 hover:bg-opacity-10 px-4 py-2 justify- gap-3 rounded-[7px]'>
                    <div className='sm:w-[27px] w-[21px]'><img src={data.img} className='w-full h-full'/></div>
                    <h1 className='sm:text-[17px] text-[14px] text-third_colour font-[600]'>{data.name}</h1>
                 </button>
                 </a>
               ))
             }
       </div>
      </div>
      <p className='text-second_colour text-[15px] font-[500] mt-10 text-center'>© Copyright 2023. build from scratch By Bhaskar bhandari.</p>
    </div>
    </div>
  );
}

export default About;
