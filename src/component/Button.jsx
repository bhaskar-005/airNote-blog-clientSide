import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from '../styles';
const Button = ({ className = "", text, path,...props}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    } else {
      console.log("Button clicked!");
    }
  };

  return (
    <button 
      className={`border-solid border-2 border-first_colour min-w-[100px] py-[5px] 
          text-[15px] text-first_colour font-medium rounded-[18px] hover:bg-first_colour hover:text-white 
          ${className}`}
      onClick={handleClick}
      {...props}>
      {text}
    </button>
  );
};

export default Button;
