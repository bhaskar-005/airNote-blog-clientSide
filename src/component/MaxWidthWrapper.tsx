import React from 'react';

const MaxWidthWrapper = ({children}) => {
  return (
    <div className='w-full flex justify-center'>
       <div className='w-[1500px]'>{children}</div>
    </div>
  );
}

export default MaxWidthWrapper;
