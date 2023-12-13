import React from "react";
import { Button } from "../index";
import { hero } from "../assets/assets";
import { Typewriter } from 'react-simple-typewriter'
const Hero = () => {
  return (
    <section className="flex sm:flex-row flex-col justify-between sm:mt-[1px] mt-[20px] sm: items-center ">
      <div className="flex justify-center flex-col">
        <div className="flex flex-col sm:gap-[30px] gap-[20px]">
          <h1 className="sm:text-start text-center font-bold sm:leading-[70px] leading-[50px] sm:text-[56px] text-[40px] text-third_colour sm: min-h-[150px]" >
            Read the most <br />
            interesting 
{/* ------------------------------------------------------------------ */}
        <span className="text-second_colour">
         <Typewriter
            words={[' Articles',' Stories',' Tech Blogs']}
            loop={null}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          /></span>
</h1>
{/* ------------------------------------------------------------------ */}

          
          <p className="sm:text-start text-center text-[#183b56b7] font-[400] max-w-[600px] sm:text-[18px]">
            Engage with a vibrant community of readers through interactive
            features such as comments and reactions. Foster meaningful
            conversations around your content and build connections with a
            global audience.
          </p>
        </div>
        <div className="flex sm:justify-start items-center justify-center mt-10">
        <Button 
        text={'Get Started'} 
        className={'bg-first_colour text-white px-8 py-[12px] hover:bg-second_colour'}
        path={'/articles'}/>
        </div>
      </div>
      <div>
        <img src={hero} alt="hero" className="w-[600px]" />
      </div>
      
    </section>
  );
};

export default Hero;
