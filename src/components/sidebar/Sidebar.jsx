import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { navigationMenu } from "./SidebarNavigation";
import Divider from "@mui/material/Divider";
import { Avatar, Card } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Sidebar = () => {
  const navigate = useNavigate();
  const {auth} = useSelector((state) => state);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigate = (item)=>{
    console.log(item.title)
    if(item.title === 'Profile'){
      navigate(`/profile/${auth.user?.id}`)
    }else{
      navigate(item.path)
    }
  }

  return (
    <Card className="card h-screen flex flex-col justify-between py-5">
      <div className="space-y-8 pl-5">
        <div>
          <span className="logo font-bold text-xl">SocialLife</span>
        </div>

        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div onClick={()=>handleNavigate(item)} className="flex space-x-3 items-center cursor-pointer">
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>

        <Divider />

        <div className="pl-5 pt-5 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer">
            <Avatar
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="vivek"
            />
            <div>
              <p className="font-bold">{auth.user?.firstName}</p>
              <p className="opacity-70">@{auth.user?.firstName}</p>
            </div>
          </div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
