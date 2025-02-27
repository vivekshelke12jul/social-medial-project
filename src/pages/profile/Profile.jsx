import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import { Box, Tab, Tabs } from "@mui/material";
import Card from "@mui/material/Card";
import PostCard from "../../components/post/PostCard";
import UserReelCard from "../../components/reels/UserReelCard";
import ProfileModal from "./ProfileModal";

const tabs = [
  { value: "posts", label: "posts" },
  { value: "reels", label: "reels" },
  { value: "saved", label: "saved" },
  { value: "reposts", label: "reposts" },
];
const posts = [1, 1, 1, 1, 1];
const reels = [1, 1, 1, 1, 1, 1];
const savedPosts = [1, 1];
const Profile = () => {
  const { auth } = useSelector((state) => state);
  const { id } = useParams();
  const [value, setValue] = React.useState("posts");

  const [open, setOpen] = React.useState(false);
  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="h-full w-full rounded-t-md"
            src="https://cdn.pixabay.com/photo/2024/05/15/07/59/flowers-8763039_1280.jpg"
            alt=""
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          {true ? (
            <Button onClick={handleOpenProfileModal} sx={{ borderRadius: "20px" }} variant="outlined">
              Edit Profile
            </Button>
          ) : (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Follow
            </Button>
          )}
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">{auth.user?.firstName}</h1>
            <p>@{auth.user?.firstName}</p>
          </div>
          <div className="flex gap-3 items-center py-3">
            <span>69 posts</span>
            <span>{auth.user?.followers.length} followers</span>
            <span>{auth.user?.following.length} following</span>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              magni.
            </p>
          </div>
        </div>
        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item) => (
                <Tab value={item.value} label={item.label} />
              ))}
            </Tabs>
          </Box>
          <div className="flex justify-center">
            {value === "posts" ? (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((item) => (
                  <div className="border border-slate-100 rounded-md">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "reels" ? (
              <div className="flex justify-center flex-wrap gap-2 my-10">
                {reels.map((item) => (
                  <UserReelCard />
                ))}
              </div>
            ) : value === "saved" ? (
              <div className="space-y-5 w-[70%] my-10">
                {savedPosts.map((item) => (
                  <div className="border border-slate-100 rounded-md">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : (
              "Reposts"
            )}
          </div>
        </section>
      </div>

      <section>
        <ProfileModal open={open} handleClose={handleClose}/>
      </section>

    </Card>
  );
};

export default Profile;
