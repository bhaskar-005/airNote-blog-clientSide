import React from 'react';
import {logo,AirNote} from '../assets/assets'
import { Link } from 'react-router-dom';
const Logo = ({
    href,
    classname="",
  
}) => {
  return (
    <div className=''>
        <Link to={href?href:'/'}> 
           <img className={`  sm:flex hidden  h-16 p-2 ${classname}`} src={AirNote} alt="logo" />
           <img src={logo} alt="logo" className={`${classname} sm:hidden h-16 `} />
        </Link>
    </div>
  );
}

export default Logo;
