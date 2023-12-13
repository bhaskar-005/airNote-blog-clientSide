import React, { useState, useEffect } from "react";
import { Cetagory } from "../index";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { stripHtml } from "string-strip-html";

const AllArticles = () => {
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);
  //for fecth posts
  const fetchPost = async () => {
    try {
      setloading(true);
      const res = await axios.get(import.meta.env.VITE_URL + "/post");
      setposts(res.data.data);
      setloading(false);
    } catch (error) {
      console.error(error);
    }
  };

  //for serch posts
  const path = useLocation();

  const searchPost = async () => {
    setloading(true);
    try {
      const searchPath = path.search.slice(8);
      const url = `${import.meta.env.VITE_URL}/post?search=${searchPath}`;
      const res = await axios.get(url);
      setposts(res.data.data);
      setloading(false);
    } catch (error) {
      console.error(error);
    }
    setloading(false);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    searchPost();
  }, [path]);

  return (
    <div className="flex flex-col sm:flex-row justify-between sm:mx-28 mx-2 gap-[25px]">
      <Cetagory />
      {posts.length === 0 && (
        <div className="text-[20px] font-[500] text-second_colour mt-[20px] min-hight ">
          No blog found for "{path.search.slice(8)}"
        </div>
      )}

      {loading ? (
        <div className="mr-[400px] mt-5 text-[16px] text-second_colour font-[500] min-hight">
          loading...
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 min-w-[200px] mt-5 min-hight">
          {posts.map((data, index) => (
            <Link
              key={index}
              to={`/article/:${data._id}`}
              className="max-w-full"
            >
              <div className="flex flex-row max-w-full min-h-[100px] rounded-xl overflow-hidden shadow2 hover:bg-white">
                <div className="sm:w-[340px] w-[220px] sm:h-[170px] h-auto ">
                  <img
                    className="w-full h-full object-cover object-center items-center"
                    src={data.image}
                    alt={data.title}
                  />
                </div>
                <div className="flex flex-col justify-between p-2 sm:p-5 gap-2">
                  <div>
                    <h1 className="text-[16px] sm:text-[22px] font-[700] text-third_colour sm:min-w-[600px] min-w-auto">
                      {data.title.slice(0)}
                    </h1>
                    <p className="text-[10px] sm:text-[17px] font-[500] text-second_colour opacity-90">
                      {stripHtml(data.description).result.slice(0, 78)} ...{" "}
                      <span className="text-first_colour font-[400] ">
                        read more
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between sm:flex-row flex-col">
                    <p className="text-[10px] sm:text-[13px] font-[500] text-third_colour  max-w-[130px] sm:max-w-[200px] opacity-90">
                      by{" "}
                      <span className="font-[700] text-first_colour italic ">
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllArticles;
