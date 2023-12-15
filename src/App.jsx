import react, { useState } from "react";
import { Navbar ,Footer, Loading} from "./index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";
import AllArticles from "./pages/AllArticles";
import Article from "./pages/Article";
import EditPost from './pages/EditPost';
import ProfilePage from "./pages/ProfilePage";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch ,useSelector} from 'react-redux';
import {login,logout} from './redux/authSlice';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';
import PrivetRourtes from "./pages/PrivetRourtes";


function App() {
    const [loading ,setloading] = useState(false);
    //to refecth user on reload
    const dispatch = useDispatch();
  
    const fetchUser = async () => {
      setloading(true)
      try {
        const storedToken = localStorage.getItem('token'); 
  
        const res = await axios.post(import.meta.env.VITE_URL + "/refetch",{ token: storedToken.toString() } , { withCredentials: true } );
        
        if (res.status === 200) {
          const decodedUserData = res.data.decoded;
          dispatch(login({userdata:decodedUserData}));
        }
      } catch (error) {
        console.error(error);
      }
      setloading(false);
    };
    useEffect(() => {
      fetchUser();
    }, []);

   
  return (
     <div>
      {
        loading ? (<Loading/>):(
          <><ToastContainer />
          <Navbar />
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/login" element={<Login />} />
             <Route path="/signup" element={<SignUp />} />
             <Route path="/articles" element={<AllArticles />} />
             <Route path="/article/:id" element={<Article />} />
             <Route path="/about" element={<About />} />
             <Route path='*' element={<NotFound />} />
    
             <Route path="/" element={ <PrivetRourtes/> }>
                <Route path="createpost" element={<Create />} />
                <Route path="edit/:id" element={<EditPost/>} />
                <Route path="profile" element={<ProfilePage />} />
             </Route>
             
             
             
          </Routes>
          <Footer/></>
        )
      }
     
    </div>
  );
}

export default App;
