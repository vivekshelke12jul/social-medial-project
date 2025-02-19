import React from "react";
import { Avatar } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import StoryCircle from "./StoryCircle";
const story = [1,1,1,1,1,1]

const MiddlePart = () => {
  return (
    <div className="px-20">
      <div className="p-5 flex justify-center items-center rounded-b-md">

        <div className="flex flex-col justify-center items-center mr-4 cursor-pointer">
          <Avatar sx={{ width: "5rem", height: "5rem" }}>
            <AddIcon sx={{ fontSize: "3rem" }}/>
          </Avatar>
          <p>new</p>
        </div>

        {story.map((item) => <StoryCircle/>)}
      </div>
    </div>
  );
};

export default MiddlePart;
