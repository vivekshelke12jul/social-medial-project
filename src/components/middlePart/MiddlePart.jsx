import React from "react";
import { Avatar, Card } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ImageIcon from '@mui/icons-material/Image';
import AddIcon from '@mui/icons-material/Add';
import VideoCamIcon from '@mui/icons-material/VideoCam';
import ArticleIcon from '@mui/icons-material/Article';
import StoryCircle from "./StoryCircle";

import PostCard from "../post/PostCard";

const story = [1,1,1,1,1]
const posts = [1,1,1,1,1]
const MiddlePart = () => {

  const handleOpenCreatePostModal = () => {
    console.log('post modal open');
  };

  return (
    <div className="px-20">
      <section className="p-5 flex justify-center items-center rounded-b-md">

        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar sx={{ width: "5rem", height: "5rem" }}>
            <AddIcon sx={{ fontSize: "3rem" }}/>
          </Avatar>
          <p>new</p>
        </div>

        {story.map((item) => <StoryCircle/>)}
      </section>

      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar/>
          <input readOnly className="outline-none w-[90%] rounded-full px-5 bg-transparent border-[#3b4054] border" type="text" />
        </div>
        <div className="flex justify-center space-x-9 mt-5">

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ImageIcon/>
            </IconButton>
            <span>media</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <VideoCamIcon/>
            </IconButton>
            <span>video</span>
          </div>
          
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ArticleIcon/>
            </IconButton>
            <span>article</span>
          </div>
          
        </div>
      </Card>
            
      <div className="mt-5 space-y-5">
        {posts.map((item) => <PostCard/>)}
      </div>
    </div>
  );
};

export default MiddlePart;
