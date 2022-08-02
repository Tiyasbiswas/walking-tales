import React, {useState, useEffect } from 'react';
import { BrowserRouter,Route, Routes,Link } from 'react-router-dom';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import FindPartner from './components/FindPartner';
import "react-toastify/dist/ReactToastify.css";
import Blog from './components/Blog';
import Chat from './components/Chat';
import Home from './Home';
import { UserContext } from './context/UserContext';
import useFindUser from './context/useFindUser';

function App() { 
  const { 
    user, 
    setUser, 
    isLoading } = useFindUser();
    {
      !localStorage.getItem('token') ? <Link to='/' /> : <Link to='userprofile'/>
   }  
  return (
    <>
    <BrowserRouter>
    
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/findpartner' element={<FindPartner/>}/>       
     </Routes>
     
     </BrowserRouter>
    </>
  )
}
export default App;