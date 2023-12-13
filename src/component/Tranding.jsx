import React from 'react';
import { arrow } from '../assets/assets';
const Tranding = () => {
  return (
    <div className='flex sm:flex-row flex-col bg-first_colour min-h-[260px] item-center my-[20px] justify-between text-[#fcfcfcb6] rounded-xl'>
        <div className='flex flex-col sm:m-[40px] m-[24px] sm:max-w-[70%] max-w-[90%]'>
           <h1 className='sm:text-[40px] text-[36px] font-[700] mb-6 text-[#fcfcfc]'>Share your knowledge with others.</h1>
           <p className='text-[16px]'>Start your blogging journey on AirNotion, where sharing your knowledge is a breeze. With its user-friendly platform, you can easily create and manage your blog. Whether you're an expert or just getting started, AirNotion makes it simple to share your insights and ideas with the world. Join now and embark on a seamless blogging experience!</p>
        </div>
        <div className='flex justify-start items-center m-[40px]'>
          <a href="/createpost">
            <button className='bg-white h-[46px] w-[200px] text-first_colour text-[17px] font-[600] border-none rounded-2xl hover:bg-[#eeeeee]'>Start Creating</button>
        </a>
      </div>
    </div>
  );
}

export default Tranding;
