import React, { useState } from 'react';
import {Logo ,Button,SearchInput} from '../index'
import { navLinks } from '../data';
import {cross, menu,search} from '../assets/assets'
import {useSelector } from 'react-redux';

const Navbar = () => {
    const [nav ,setnav] = useState(false);
    const [searchs,setsearchs] = useState(false);
    const userStatus = useSelector((state)=>state.isLogin.status );
    const userdata = useSelector((state)=>state.isLogin.userdata);
    //function for handle Search
    const handleSearch = ()=>{
        setsearchs(!searchs);
    }

  return (
   <nav className='relative _nav bg-white'>
    <div className='flex justify-between items-center sm:mx-28 mx-4'>
         <Logo/>  {/* logo */}
        <div className='sm:flex hidden gap-14'>
           
        {
  //------search input code------
       searchs?(
          <SearchInput/>
       ):(
        <ul className='flex gap-10 items-center justify-center text-third_colour '>
           { //navbar links
           navLinks.map((items)=>(
            <a href = {items.link} 
              key={items.id} 
              id={items.id} 
              className='text-[16px] font-medium hover:text-first_colour'>
                <li >{items.title}</li>
            </a>  
            ))}
        </ul>
       )

        }
        <div className='flex gap-[5px] unselectable="off" draggable="false" '>
          <div onClick={handleSearch} className='cursor-pointer bg-first_colour p-3 mr-4 rounded-full items-center justify-center w-[35px] h-[35px]'>
            <img unselectable="off" draggable="false" className='w-[20px] whiteSvg' src={searchs?cross:search}/>
          </div>
          {
            userStatus ? ( 
              <div className='flex gap-4'>
                <Button text={'create »'} path={'/createpost'}/> 
                <a href="/profile">
               <div className='flex items-center gap-2 pl-4 profile rounded-full p-[2px] cursor-pointer '>
                <p className='text-second_colour font-[500]'>Profile</p>
                <div className='w-[30px] h-[30px] rounded-full overflow-hidden '>
                  <img 
                       className='w-full h-full object-cover justify-center'
                       src={userdata.profilePhoto} 
                       alt="profile" />   {/* panding to add profile */}
                </div>
             </div>
             </a>
             </div>
            ):(
            <div className='flex  gap-3'>
            <Button text={'Sign up'} path={'/signup'}/>
            <Button text={'Log in'} className={' bg-first_colour text-white'} path={'/login'}/>
            </div>
            )
          }
          
        </div>
        </div> 
        <div className="sm:hidden flex gap-6 items-center">
          {
        userStatus ? ( 
          <a href="/profile">
               <div className='flex items-center gap-2 pl-4 profile rounded-full p-[2px] cursor-pointer '>
                <p className='text-second_colour font-[500]'>Profile</p>
                <div className='w-[30px] h-[30px] rounded-full overflow-hidden '>
                  <img 
                       className='w-full h-full object-cover justify-center'
                       src={userdata.profilePhoto} 
                       alt="profile" />   
                </div>
             </div>
             </a>
             
            ):(
        <Button text={'Sign up'} path ={'/signup'} className={'py-[4px]'}/>
        )}
        <img unselectable="on" src={nav? cross:menu} className="h-[24px]" alt="manu" onClick={()=>setnav(!nav)}/>
        </div>
    </div>
    
        {/*------ navigation for small screens ------*/}
        {
            nav? (
               <div className='w-full sm:hidden absolute bg-third_colour py-7 zindex'>
                  
                    <ul className='flex flex-col gap-6 items-center justify-center text-third_colour '>
                      <SearchInput/>
                      { //navbar links
                      navLinks.map((items)=>(
                       <a href = {items.link} 
                         key={items.id} 
                         id={items.id} 
                         className='text-[16px] font-medium text-white'>
                           <li >{items.title}</li>
                       </a>  
                   ))}
                     </ul>
            <div className='flex gap-4 m-[24px] item-center justify-center'>
              {
            userStatus ? ( 
                <Button text={'create »'} path={'/createpost'}/> 
               ):(
                <div className='flex gap-3'>
                 <Button text={'Sign up'} path={'/signup'}/>
                <Button text={'Log in'} className={' bg-first_colour text-white'} path={'/login'}/>
              </div>
              )
            }
                  </div>
             
        </div>
            ):null
         }
   </nav>

  );
}

export default Navbar;
