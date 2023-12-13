import React from 'react';
import {Button} from '../index'
import { stripHtml } from "string-strip-html";
import { Link } from 'react-router-dom';

const TopArticle = ({posts}) => {

  return (
    <div className=" flex flex-col bg-[#f2faff] rounded-xl shadow py-8 gap-10">
      <h1 className="text-[35px] text-center font-bold text-third_colour">Top Articles</h1>
      <div className='flex flex-wrap sm:gap-8 gap-4 justify-center items-center '>
        {posts.slice(0,4).map((data, index) => (
          <Link key={index} to={`/article/:${data._id}`}>
          <div key={index} className="w-[300px] min-h-[560px] rounded-xl overflow-hidden shadow bg-white cursor-pointer hover_effect">
            <img className=" h-[300px] w-[360px] object-cover object-center" src={data.image} alt={data.title} />
            <div className='m-[15px] flex flex-col gap-4 mb-[20px]'>
              <h1 className="text-[24px] font-bold text-third_colour">{data.title}</h1>
              <p className="text-gray-600 text-second_colour">
                { `${(stripHtml(data.description).result).slice(0,100)}  ...`} 
                <span className='text-first_colour font-[400]'>read more</span></p>
               <div className="">
                <p className="text-sm text-gray-500 text-second_colour">by <span className='italic font-bold'>{data.author }</span>
               <span className='bg-[#E1F4EC] text-[#41c68e] px-[4px] rounded-full font-[1000] mx-[5px]'>✓</span>
                </p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <div className='flex justify-center'>
        <Button text={`More articles`} className={'px-16'} path={'/articles'}/>
      </div>
    </div>
  );
};

export default TopArticle;
