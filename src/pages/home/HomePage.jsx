import React, { use, useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid2";
import { useLocation, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import MiddlePart from "../../components/middlePart/MiddlePart";
import Reels from "../../components/reels/Reels";
import CreateReelsForm from "../../components/reels/CreateReelsForm";
import Profile from "../../pages/profile/Profile";
import HomeRight from "../../components/homeRight/HomeRight";
import { getProfileAction } from "../../redux/auth/auth.action";
const HomePage = () => {
  const {auth} = useSelector((state) => state);
  const location = useLocation();
  const lgGridSize = location.pathname === "/" ? 6 : 9;

  console.log("auth : ", auth)

  return (
    <div className="px-20">
      <Grid container spacing={0}>
        <Grid size={{ xs: 0, lg: 3 }}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>

        <Grid
          className="px-5 flex justify-center"
          size={{ xs: 12, lg: lgGridSize }}
        >
          <Routes>
            <Route path="/" element={<MiddlePart />}/>
            <Route path="/reels" element={<Reels />}/>
            <Route path="/create-reels" element={<CreateReelsForm />}/>
            <Route path="/profile/:id" element={<Profile />}/>
          </Routes>

        </Grid>

        {location.pathname==='/' && <Grid className='relative' size={{lg: 3}}>
          <div className="sticky top-0 w-full">
            <HomeRight />
          </div>
        </Grid>}
      </Grid>
    </div>
  );
};

export default HomePage;
