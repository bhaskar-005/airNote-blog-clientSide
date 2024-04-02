import React, { useEffect, useState } from 'react';
import { Input } from '../index';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const navigate = useNavigate();
  const [search ,setSearch] = useState('');
  const location = useLocation();

  const submitHandler = (e) => { 

    if (search.length==0) {
      return
    }
    else{
      e.preventDefault();
      navigate(`articles?search=${search}`);
    }
    
  };
  useEffect(() => {
    if (location.search) {
      setSearch(location.search.slice(8));
    }
  }, [location.search]);
  return (
    <div className='flex items-center h-[36px]' >
       <form className='flex h-[36px]' onSubmit={submitHandler}>
          <Input 
          placeholder={'search..'} 
          InputClassName={'item-center mx-[6px]'}
          onchangeHandler={e => setSearch(e.target.value)}
          value={search}
          />
           <button type='submit' className='bg-first_colour text-white px-4 rounded-[6px] text-[12px] hover:bg-second_colour'>search</button>
       </form>
    </div>
  );
}

export default SearchInput;
