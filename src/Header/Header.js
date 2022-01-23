import React from "react";
import { facebookLogo } from "../constant";
import { Avatar, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from "@mui/icons-material/Home";
import ForumIcon from "@mui/icons-material/Forum";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={facebookLogo} alt="facebookLogo" />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <FlagIcon />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Prakul</h4>
        </div>

        <IconButton>
          <AddIcon color="action" />
        </IconButton>
        <IconButton>
          <ForumIcon color="action" />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon color="action" />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon color="action" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
