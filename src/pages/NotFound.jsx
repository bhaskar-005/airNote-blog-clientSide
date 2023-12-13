import React from 'react';
import Button from '../component/Button';
const NotFound = () => {
  return (
    <div className='flex justify-center items-center min-h-[540px] text-center '>
       <div>
        <h1 className='text-[20px] font-medium'>
          page not found 404</h1>
         <Button 
         text={'Home'} 
         path={'/'}
         className='mt-4' />
       </div>
    </div>
  );
}

export default NotFound;
