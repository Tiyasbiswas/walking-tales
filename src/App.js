import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import FindPartner from './components/FindPartner';
import "react-toastify/dist/ReactToastify.css";
import Blog from './components/Blog';
import Chat from './components/Chat';
import Home from './Home';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blog' element={<Blog />} />

          {/* protected routes */}
          <Route path='/chat' element={<Chat />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/findpartner' element={<FindPartner />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}
export default App;