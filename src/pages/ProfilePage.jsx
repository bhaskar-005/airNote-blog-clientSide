import React, { useEffect, useState } from 'react';
import {Input} from '../index';
import { logout, trash } from '../assets/assets';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';


const ProfilePage = () => {
    const [loading , setloading] = useState(false)
    const navigate = useNavigate();
    const [data , setdata] = useState();
   
    const userdata = useSelector((state)=>state. isLogin.userdata);
   // for fatching userinfo 
    const getProfileData = async()=>{
        try {
          const req = await axios.get(`${import.meta.env.VITE_URL}//profile/${userdata.id}`,{withCredentials:true}) 
          setdata(req.data.findUser);
           
        } catch (error) {
           console.error(error);
        }
    }
    //logout function
    const handleLogout = async()=>{
        try {
          const req = await axios.get(`${import.meta.env.VITE_URL}/logout`,{withCredentials:true});
          if (req.status ==200){
            navigate('/');
            window.location.reload(false);
          }
        } catch (error) {
            
        }
    }
    useEffect(()=>{
     getProfileData();
   },[userdata])

  if (!data) {
    return <div className='min-h-[500px] text-center text-[20px]'>loading...</div>;
  }

  return (
    <div className=' flex min-h-[600px] justify-center '>
       <div className='bg-first bg-white mt-8 flex flex-col gap-10 sm:p-10 p-6 rounded-[7px] shadow border1'>
        <div className='flex justify-center items-center'>
        <div className='h-[110px] w-[110px] rounded-full overflow-hidden bg-second_colour flex items-center justify-center'>
                <div className='h-[100px] w-[100px] rounded-full overflow-hidden '>
              <img className='w-full h-full object-cover' src={data.profilePhoto} alt="" />
        </div> 
        </div>
        </div>
    
       <div className='flex flex-col gap-5'>
        <Input lable = {'Firstname '} value={data.firstName}/>
        <Input lable={"Lastname"} value={data.lastName}/>
        <Input lable = {'Email'} value={data.email}/>
       </div>

       <div className='flex gap-10 mt-10'>
          <button className={`flex items-center gap-1 justify-between border-[#ca1f1c] border-[2px] text-[#ca1f1c] hover:bg-[#f1807e] hover:text-white font-[600] bg-opacity-100 px-4 sm:min-w-[170px] min-w-auto sm:py-4 py-2 rounded-[7px] text-[14px] hover:bg-opacity-100 
          cursor-block`}
          >
            <p>Delete Account</p>
             <img src={trash} />
          </button>
          <button
          onClick={handleLogout}
          className='flex justify-center gap-5 items-center bg-first_colour px-4 sm:py-4 py-2 rounded-[7px] text-white text-[15px] hover:bg-opacity-70 sm:min-w-[170px] min-w-auto'> 
             <p>logout</p>
             <img src={logout} className='h-5 whiteSvg'/>
           </button>
       </div>
        
       </div>
    </div>
  );
}

export default ProfilePage;
