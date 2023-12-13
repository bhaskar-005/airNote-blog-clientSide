import React, { useState } from 'react';
import { Input } from '../index';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const navigate = useNavigate();
  const [search ,setsearch] = useState('')
  const submitHandler = (e) => { 

    if (search.length==0) {
      return
    }
    else{
      e.preventDefault();
      navigate(`articles?search=${search}`);
    }
    
  };
  return (
    <div className='flex items-center h-[36px]' >
       <form className='flex h-[36px]' onSubmit={submitHandler}>
          <Input 
          placeholder={'search..'} 
          InputClassName={'item-center mx-[6px]'}
          onchangeHandler={e => setsearch(e.target.value)}
          />
           <button type='submit' className='bg-first_colour text-white px-4 rounded-[6px] text-[12px] hover:bg-second_colour'>search</button>
       </form>
    </div>
  );
}

export default SearchInput;
