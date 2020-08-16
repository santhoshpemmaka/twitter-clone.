import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import SideOption from "./SideOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SideOption active text="Home" Icon={HomeIcon} />
      <SideOption text="Explore" Icon={SearchIcon} />
      <SideOption text="Notifications" Icon={NotificationsNoneIcon} />
      <SideOption text="Messages" Icon={MailOutlineIcon} />
      <SideOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SideOption text="Lists" Icon={ListAltIcon} />
      <SideOption text="Profile" Icon={PermIdentityIcon} />
      <SideOption text="More" Icon={MoreHorizIcon} />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
