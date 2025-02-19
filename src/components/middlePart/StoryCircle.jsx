import React from 'react'
import { Avatar } from '@mui/material'
const StoryCircle = () => {
  return (
    <div className="flex flex-col justify-center items-center mr-4 cursor-pointer">
      <Avatar 
        sx={{ width: "5rem", height: "5rem" }}
        src="https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg"
      >
      </Avatar>
        <p>vivek12</p>
    </div>
  )
}

export default StoryCircle