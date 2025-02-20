import React from "react";
import { Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Login from "./Login";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";
const authentication = () => {
  // this is a comment

  return (
    <div>
      <Grid container>
        <Grid className="img-container h-screen overflow-hidden" item size={7}>
          <img
            className="h-full w-full"
            src="https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_1280.png"
            alt=""
          />
        </Grid>

        <Grid className="img-container h-screen overflow-hidden" item size={5}>
          <div className="h-full px-20 flex flex-col justify-center items-center">
            <Card className="card p-8">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="logo text-center">SociaLife</h1>
                <p className="test-center text-sm w-[70&]">
                  Connect with friends and the world around you on SociaLife
                </p>
              </div>

              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default authentication;
