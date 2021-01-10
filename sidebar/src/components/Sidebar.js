import React, { useContext } from "react";
import { AppContext } from "../context";
import { links, social } from "../data";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext);
  return (
    <div className={`${isSidebarOpen ? "Sidebar show-sidebar" : "Sidebar"}`}>
      <div className="sidebar-header">
        <h1 className="logo">Logo</h1>
        <button className="close-sidebar" onClick={closeSidebar}>
          <CloseRoundedIcon style={{ color: "Red" }} />
        </button>
      </div>
      <ul className="nav-links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url} target="_blank" rel="noreferrer">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
