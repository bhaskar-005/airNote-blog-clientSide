import React from 'react';

const BlogPostCard = ({data}) => {
  return (
    <Link
             key={index}
              to={`/article/${data._id}`}
              className="max-w-full"
            >
              <div className="flex flex-row max-w-full min-h-[100px] rounded-xl overflow-hidden shadow2 hover:bg-white">
                <div className="sm:w-[340px] w-[220px] sm:h-[170px] h-auto ">
                  <img
                    className="w-full h-full object-cover object-center items-center"
                    src={data.image}
                    loading="lazy"
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
  );
}

export default BlogPostCard;
