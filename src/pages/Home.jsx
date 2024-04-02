import React, { useState } from 'react';
import {Hero,TopArtical,Tranding,} from '../index';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogdata } from '../redux/blogSlice';
import MaxWidthWrapper from '../component/MaxWidthWrapper';
const Home = () => {

 const blogdata = useSelector((state)=>state.blogData.blogdata);
 const dispatch = useDispatch();

  // for fetching posts 
  const fetchPost = async () => {
     if (blogdata) {
      console.log(blogdata);
      return;
     }
    
    try {
      const res = await axios.get(import.meta.env.VITE_URL + "/post");
      dispatch(setBlogdata({blogdata:res.data.data}));
      
      
    } catch (error) {
      console.error(error);
    }
    
  };
  useEffect(() => {
    fetchPost();
  }, []);


  return (
    <MaxWidthWrapper>
    <div className='sm:mx-28 mx-4 flex flex-col gap-12'>
         <Hero/>
         <TopArtical posts = {blogdata} />
         <Tranding/>
    </div>
    </MaxWidthWrapper>
  );
}

export default Home;
