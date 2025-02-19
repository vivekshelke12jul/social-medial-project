import React from 'react'

import { Grid2 } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

import Sidebar from '../../components/sidebar/Sidebar'
import MiddlePart from '../../components/middlePart/MiddlePart'
import Reels from '../../components/reels/Reels'
import CreateReelsForm from '../../components/reels/CreateReelsForm'
import Profile from '../../pages/profile/Profile'
import HomeRight from '../../components/homeRight/HomeRight'
const HomePage = () => {
  return (
    <div className="home-container px-20 h-screen w-screen">

      <div className="sidebar-item sticky top-0">
        <Sidebar/>
      </div>

      <div className="mid-item">

        <Routes>
          <Route path="/" element={<MiddlePart />}/>
          <Route path="/reels" element={<Reels />}/>
          <Route path="/create-reels" element={<CreateReelsForm />}/>
          <Route path="/profile/:id" element={<Profile />}/>
        </Routes>

      </div>

      <div className="right-item sticky top-0 w-full">
        <HomeRight/>
      </div>

    </div>
  )
}

export default HomePage