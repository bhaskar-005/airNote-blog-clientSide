import React, { useEffect } from "react";
import { Input, Button } from "../index";
import { useForm } from "react-hook-form" //rect hook form
import axios from 'axios'
import { useNavigate } from "react-router-dom";
//for tosts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const navigate = useNavigate();
    const {register,handleSubmit, formState: { errors }} = useForm()
    const onSubmit = async(data)=>{
     try {
      const res = await axios.post(import.meta.env.VITE_URL+"/signup",data);
        
      if (res.status===200) {
        toast.info("Now you can Login !", {
          position: toast.POSITION.TOP_RIGHT,
        }); 
        navigate('/login');
         
      }
     } catch (error) {
       toast.info(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
     }
      
    }
  return (
    <div className="flex justify-center min-h-[610px] mt-4">
      
      <div className="flex flex-col gap-4 sm:min-w-[360px] min-w-[260px]">
        <h1 className="sm:text-[40px] text-[35px] font-[700] text-third_colour text-center">Sign Up </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:gap-7 gap-5">
        <Input lable={'firstName'}  
          placeholder={'Enter name'}
          {...register('firstName',{required:true})}/>
          {errors.name && <span className="text-red_colour">Please enter your name *</span>}
        <Input lable={'lastName'}  
          placeholder={'Enter name'}
          {...register('lastName',{required:true})}/>
          {errors.name && <span className="text-red_colour">Please enter your name *</span>}
        <Input type={'email *'} 
          lable={'Email address'} 
          placeholder={'Enter email'}
          {...register('email',{pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ,
           required:true })}/>
           {errors.email && <span className="text-red_colour">Please enter a valid email *</span>}
          
        <Input 
          type={'password'} 
          lable={'Password '} 
          placeholder={'Enter password'}
          {...register('password',{minLength:8})}/>
          {errors.password && <span className="text-red_colour">Password must be at least 8 characters *</span>}
        
          <Button text={'Register'} type="submit" className="h-[46px] bg-first_colour text-white rounded-[7px] mx-0 mt-[8px]"/>
        </form>
        
        <p className="text-[15px]"> You have an account? <span className="text-first_colour font-[600]"><a href="/login"> Login now</a></span></p>
      </div>
    
    </div>
  );
};

export default SignUp;
