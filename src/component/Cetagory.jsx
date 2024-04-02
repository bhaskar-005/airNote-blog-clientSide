import React from "react";
import { categoryData } from "../data";
import { Link } from "react-router-dom";

const Cetagory = ({ data }) => {
  return (
    <div className="relative xl:block hidden">
      <div className="p-4 sm:p-8 mt-10 shadow min-w-[300px] min-h-[550px] lg:min-w-[400px] sticky bg-[#E5F7FF] lg:sticky right-0 top-0 rounded-xl">
        <h1 className="text-[22.5px] font-[700] text-third_colour">Tranding:</h1>
        <div>
          {
            <div className="flex flex-wrap mt-4 items-center space-x-2 gap-3 max-w-[350px]">
              {categoryData?.map((text, index) => (
                <Link key={index} to={`/articles?search=${text.name}`} className="ml-2">
                  <div
                    key={text.id}
                    className="bg-gray-300 px-3 py-1  borders2 bg-first_colour bg-opacity-0 hover:bg-opacity-10 text-second_colour text-[17px] font-[500] "
                  >
                    {text.name}
                  </div>
                </Link>
              ))}
            </div>
          }
       </div>
        
      {/* user enterd categories */}
       {
        data && (
          <div className="mt-10">
          <h1 className="text-[20px] font-[700] text-third_colour">Cetagory:</h1>
            {
              <div className="flex flex-wrap mt-4 items-center space-x-2 gap-3 max-w-[350px]">
                {data?.map((text, index) => (
                  <Link key={index} to={`/articles?search=${text.name}`} className="ml-2">
                    <div
                      key={text.id}
                      className="bg-gray-300 px-3 py-1  borders2 bg-first_colour bg-opacity-0 hover:bg-opacity-10 text-second_colour text-[17px] font-[500] "
                    >
                      {text.name}
                    </div>
                  </Link>
                ))}
              </div>
            }
          </div>
        )
       }
      </div>
    </div>
  );
};

export default Cetagory;
