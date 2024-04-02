import React, { useState, useEffect, useMemo } from "react";
import { Cetagory, Loading } from "../index";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { stripHtml } from "string-strip-html";
import { useDispatch, useSelector } from "react-redux";
import { setBlogdata } from "../redux/blogSlice";
import MaxWidthWrapper from "../component/MaxWidthWrapper";

const AllArticles = () => {
  const [loading, setloading] = useState(false);
  const [search ,setSearch] = useState(null);
  const {blogdata} = useSelector((state)=>state.blogData);
  const dispatch = useDispatch();

  //for serch posts
  const path = useLocation();
  const searchPost = async () => {
    if (blogdata && !path.search) {
      return;
    }
    setloading(true);
    try {
      const searchPath = path.search.slice(8);
      const url = `${import.meta.env.VITE_URL}/post?search=${searchPath}`;
      const res = await axios.get(url);
      dispatch(setBlogdata({blogdata:res.data.data}));
      
    } catch (error) {
      console.error(error);
  }
    setloading(false);
  };


  useEffect(() => {
    searchPost();
  }, [path]);

  return (
    <MaxWidthWrapper>
    <div>
      {blogdata?.length === 0 && (
        <div className="text-[20px] font-[500] text-second_colour mt-[20px] min-hight ">
          No blog found for "{path.search.slice(8)}" 
        </div>
      )}
   
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col sm:flex-row justify-between sm:mx-28 mx-2 gap-[25px]">
        <Cetagory />
        <div className="flex flex-col items-center gap-4 min-w-[200px] mt-5 min-hight">
          {blogdata?.map((data, index) => (
           <Link key={index} to={`/article/${data._id}`} className="max-w-full">
           <div className="flex flex-col sm:flex-row max-w-full rounded-xl overflow-hidden shadow2 hover:bg-white">
             <div className="sm:w-[340px] w-full sm:h-[170px] h-auto">
               <img
                 className="w-full h-full object-cover object-center"
                 src={data.image}
                 loading="lazy"
                 alt={data.title}
               />
             </div>
             <div className="flex flex-col justify-between p-2 sm:p-5 flex-grow">
               <div>
                 <h1 className="text-[16px] sm:text-[20px] font-[700] text-third_colour sm:min-w-[600px] min-w-auto mb-2">
                   {data.title.slice(0)}
                 </h1>
                 <p className="text-[10px] sm:text-[14px] font-[500] text-second_colour opacity-90 mb-2">
                   {stripHtml(data.description).result.slice(0, 100)} ...{" "}
                   <span className="text-first_colour font-[400]">read more</span>
                 </p>
                 <div className="flex justify-between items-center">
                   <p className="text-[10px] sm:text-[13px] font-[500] text-third_colour mr-2">
                     by{" "}
                     <span className="font-[700] text-first_colour italic">
                       {data.author}
                     </span>{" "}
                     <span className="bg-[#E1F4EC] text-[#41c68e] px-[4px] rounded-full font-[1000] mx-[5px]">
                       ✓
                     </span>
                   </p>
                   <p className="text-[10px] sm:text-[13px] font-[500] text-third_colour">
                     {new Date(data.updatedAt).toString().slice(0, 15)}
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </Link>
         
          ))}
        </div></div>
      )}
    </div>
    </MaxWidthWrapper>
  );
  
  
};

export default AllArticles;
