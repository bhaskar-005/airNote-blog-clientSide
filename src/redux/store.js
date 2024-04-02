import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import blogSlice from './blogSlice';

const store = configureStore({
    reducer:{
       isLogin: authSlice,
       blogData : blogSlice
    }
})
export default store;