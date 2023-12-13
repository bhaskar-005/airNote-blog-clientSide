import React from 'react';
import {logo,AirNote} from '../assets/assets'
const Logo = ({
    href,
    classname="",
  
}) => {
  return (
    <div className=''>
        <a href={href?href:'/'}> 
           <img className={`  sm:flex hidden  h-16 p-2 ${classname}`} src={AirNote} alt="logo" />
           <img src={logo} alt="logo" className={`${classname} sm:hidden h-16 `} />
        </a>
    </div>
  );
}

export default Logo;
