import React from "react";
import SearchUser from "../searchUser/SearchUser";
import PopularUserCard from "./PopularUserCard";
import { Card } from "@mui/material";

const popularUsers = [1, 1, 1, 1, 1];
const HomeRight = () => {
  return (
    <div className="pr-5">
      <SearchUser />

      <Card className="card p-5 mt-5">
        <div className="flex justify-between items-center py-5">
          <p className="font-semibold opacity-70 ">Suggestions for you</p>
          <p className="font-semibold text-xs opacity-95 ">View all</p>
        </div>

        <div>
          {popularUsers.map((item) => (
            <PopularUserCard />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HomeRight;
