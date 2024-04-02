import { createSlice } from "@reduxjs/toolkit";

const initialState={
     blogdata:null,
}
const blogSlice = createSlice({
    name: 'blogdata',
    initialState,
    reducers:{
        setBlogdata: (state, action) => {
            state.blogdata = action.payload.blogdata;
        }
    }
})

export const {setBlogdata} = blogSlice.actions;
export default blogSlice.reducer;
