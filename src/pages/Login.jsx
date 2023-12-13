import React from 'react';
import { useForm } from "react-hook-form" //rect hook form
import { useId } from 'react';
import { Input, Button } from "../index";
import { useDispatch } from 'react-redux';
import {login,logout} from '../redux/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const {register,handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();
    const onSubmit =async (data)=>{
      try {
        const res = await axios.post(import.meta.env.VITE_URL+"/login",data,{withCredentials:true});
          console.log(res);
        if (res.status === 200) {
          dispatch(login(res.data.token));
          navigate('/');
          window.location.reload(false);
          toast.success(`Login successful`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        
        }
       } catch (error) {
        console.error(error);
         toast.info(`${error.response.data.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
       }
    }


  return (
    <div className="flex justify-center min-h-[610px]">
      <div className="flex flex-col gap-6 mt-10 sm:min-w-[360px] min-w-[260px]">
        <h1 className="sm:text-[40px] text-[35px] font-[700] text-third_colour text-center">Log In </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:gap-8 gap-5">
        <Input type={'email'} 
          lable={'Email address'} 
          placeholder={'Enter email'}
          {...register('email',{pattern:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i,
           required:true })}/>
           {errors.email && <span className="text-red_colour">Please enter a valid email *</span>}
          
        <Input 
          type={'password'} 
          lable={'Password'} 
          placeholder={'Enter password'}
          {...register('password',{minLength:8})}/>
          {errors.password && <span className="text-red_colour">Password must be at least 8 characters *</span>}
      
          <Button text={'Log In'} type="submit" className="h-[46px] bg-first_colour text-white rounded-[7px] mx-0 mt-[8px]"/>
        </form>
         
        <p className="text-[15px]"> Don't have an account? <span className="text-first_colour font-[600]"><a href="/signup"> Sign Up</a></span></p>
      
      <div className='bg-white rounded-md p-2 input'>
             <p className='text-third_colour font-[500] mb-1 text-[15px] opacity-90'>Test with our demo account</p>
             <p className='text-first_colour opacity-80 text-[13px]'> <span className='text-third_colour font-[500]'>Email:</span>  demo@gmail.com</p>
             <p className='text-first_colour opacity-80 text-[13px]'> <span className='text-third_colour font-[500]'>Password:</span> demo 123</p>
           </div>
           </div>
    </div>
  );
};

export default Login;
