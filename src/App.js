import React, {useState, useEffect } from 'react';
import { BrowserRouter,Route, Routes,Link } from 'react-router-dom';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import FindPartner from './components/FindPartner';
import WorkoutHistory from './components/WorkoutHistory';
import "react-toastify/dist/ReactToastify.css";
import Blog from './components/Blog';
import MainChat from './components/MainChat';
import Home from './Home';
import Contact from './components/Contact';
import Feedbackdata from './components/Feedbackdata';
import About from './components/About';
import FindFriends from './components/FindFriends';


function App() { 
  
  return (
    <>
    <BrowserRouter>
    
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/chat' element={<MainChat/>}/>
        <Route path='/findpartner' element={<FindPartner/>}/>
        <Route path='/workouthistory' element={<WorkoutHistory/>}/>
        <Route path='/contact' element={<Contact/>}/>   
        <Route path='/feedbackdata' element={<Feedbackdata/>}/>       
        <Route path='/about' element={<About/>}/>    
        <Route path='/findfriends' element={<FindFriends/>}/>


    
     </Routes>
     
     </BrowserRouter>
    </>
  )
}
export default App;