import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import { Cetagory, Loading } from "../index";
import { useSelector } from "react-redux";
import { dotsicon, trash, update } from "../assets/assets";
import {toast} from 'react-toastify';
import MaxWidthWrapper from "../component/MaxWidthWrapper";


const Article = () => {
  const [post, setPost] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate();
  const { id } = useParams();
  const userStatus = useSelector((state) => state.isLogin.userdata);
  const fetchPost = async () => {
    try {
      const url = `${import.meta.env.VITE_URL}/post/${id}`;
      const res = await axios.get(url);
      setPost(res.data.getpost);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);



// for delete post 
  const handleRemove = async(id)=>{
    try {
      const storedToken = localStorage.getItem('token')
      const res = await axios.delete(`${import.meta.env.VITE_URL}/post/delete/${id}`,
      { 
        headers: {
          token: `${storedToken}`,
        },
        withCredentials: true
      });

      if (res.status==200) {
        navigate('/articles')
        toast.success(`Blog removed.`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(`${error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
  const handleUpdate = async(id)=>{
    navigate(`/edit/${id}`);
  }

     // Check if post is still loading
  if (!post) {
    return <Loading/>
  }

  return (
    <MaxWidthWrapper>
    <div className="flex justify-around sm:mx-28 mx-2 ">
      <Cetagory data={post.category} />
      <div className="sm:w-[60%] w-auto px-3 md:px-[200px] mt-8 rounded-[7px] shadow ">
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-third_colour md:text-3xl">
              {post.title}
            </h1>

            <>
              <button
                id="dropdownDelayButton"
                data-dropdown-toggle="dropdownDelay"
                data-dropdown-delay={500}
                data-dropdown-trigger="click"
                type="button"
                onClick={toggleDropdown}
              >
                {userStatus?.id === post?.userId ? (
                  <div className=" bg-[#F0F1F3] hover:bg-[#d9dbdf] rounded-full p-[4px] rotate-90 cursor-pointer">
                    <img
                      src={dotsicon}
                      alt=":"
                      className="w-[18px] h-[18px]"
                      draggable="false"
                    />
                  </div>
                ) : null}
              </button>

              <div
                id="dropdownDelay"
                className={`z-10 ${
                  isDropdownOpen ? "" : "hidden"
                } absolute bg-white divide-y rounded-lg shadow w-44 mt-2 borders top-36  sm:right-[100px] right-[20px]`}
              >
                <ul
                  className="text-sm p-1 flex flex-col gap-2"
                  aria-labelledby="dropdownDelayButton"
                >
                  <li 
                  onClick={()=> handleUpdate(post._id)}
                  className=" px-4 py-3 text-[13px] flex justify-between hover:bg-second_colour hover:bg-opacity-10 rounded-[6px] cursor-pointer ">
                    <p>Edit blog</p>
                    <img src={update} />
                  </li>
                  <li 
                    className="px-4 py-3 text-[13px] flex justify-between bg-red_colour bg-opacity-10 hover:bg-opacity-30 rounded-[6px] cursor-pointer "
                    onClick={()=> handleRemove(post._id)}>
                    <p>Delete</p>
                    <img src={trash} />
                  </li>
                </ul>
              </div>
            </>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p className="text-first_colour italic font-[500]">
            @<span>{post.author}</span>
          </p>
          <div className="flex space-x-2">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
          </div>
        </div>
        <img
          src={post.image}
          className="w-full  mx-auto mt-8 rounded-[7px] "
          alt=""
        />
        {<div className="mt-8 browser-css">{parse(post.description)}</div>}
        <div className="flex items-center mt-8 space-x-4 font-semibold"></div>
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export default Article;