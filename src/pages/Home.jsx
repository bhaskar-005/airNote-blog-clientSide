import React, { useState } from 'react';
import {Hero,TopArtical,Tranding,} from '../index';
import axios from 'axios';
import { useEffect } from 'react';
const Home = () => {

 const [posts ,setposts] = useState([]);

  // for fetching posts 
  const fetchPost = async () => {

    try {
      const res = await axios.get(import.meta.env.VITE_URL + "/post");
      setposts(res.data.data);
      
    } catch (error) {
      console.error(error);
    }
    
  };
  useEffect(() => {
    fetchPost();
  }, []);


  return (
    <div className='sm:mx-28 mx-4 flex flex-col gap-12'>
         <Hero/>
         <TopArtical posts = {posts} />
         <Tranding/>
    </div>
  );
}

export default Home;
