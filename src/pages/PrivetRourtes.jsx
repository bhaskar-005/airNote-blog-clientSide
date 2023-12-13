import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {Button} from '../index'

const PrivateRoutes = () => {
    const userdata = useSelector((state) => state.isLogin.userdata);

    if (!userdata) {
        return (
            <div className='min-h-[600px] flex flex-col items-center justify-center'>
                 <h1 className="text-[23px] font-[500] text-center text-third_colour">Please login to access these routes</h1>
                 <Button text={'Login'} className='mt-10' path={'/login'}/>
            </div>
       )
    }

    return <Outlet />;
};

export default PrivateRoutes;
