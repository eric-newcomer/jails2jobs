import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ForumIcon from "@material-ui/icons/Forum";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import GroupIcon from '@material-ui/icons/Group';
import EventIcon from "@material-ui/icons/Event";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "../styles/Header.css";
import rp_300dpi from "../img/rp_300dpi.png";
import HeaderOptions from "./HeaderOptions";
import { logout } from "../features/userSlice";
import { auth } from "../firebase/firebase";
import { ExitToApp } from "@material-ui/icons";

function Header() {
  //const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        {/* <h2>Restart Jobs 🌳</h2> */}
        <img src={rp_300dpi} alt="logo_main" />

        <Link to="/" style={{ textDecoration: "none" }}>
          <HeaderOptions Icon={HomeIcon} title="Home" />
        </Link>
        <Link to="/opportunities" style={{ textDecoration: "none" }}>
          <HeaderOptions Icon={BusinessCenterIcon} title="Opportunities" />
        </Link>
        <Link to="/calendar" style={{ textDecoration: "none" }}>
          <HeaderOptions Icon={EventIcon} title="Calendar" />
        </Link>
        <Link to="/forum" style={{ textDecoration: "none" }}>
          <HeaderOptions Icon={ForumIcon} title="Forum" />
        </Link>
        <Link to="/services" style={{ textDecoration: "none" }}>
          <HeaderOptions Icon={GroupIcon} title="Services" />
        </Link>
      </div>

      <div className="header__right">
        <Link to="profile" style={{ textDecoration: "none" }}>
          <HeaderOptions
            avatar="https://avatars2.githubusercontent.com/u/20120289?s=460&u=bd9cc7c182ebfd45566b8f5e5b6025980a5fb8d1&v=4"
            title="Profile"
          />
        </Link>
        <HeaderOptions Icon={ExitToApp} title="Logout" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
