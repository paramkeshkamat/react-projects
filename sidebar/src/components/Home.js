import React, { useContext } from "react";
import { AppContext } from "../context";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const Home = () => {
  const { openSidebar, openModal } = useContext(AppContext);
  return (
    <div className="Home">
      <button className="sidebar-toggle" onClick={openSidebar}>
        <MenuRoundedIcon />
      </button>
      <button className="modal-toggle" onClick={openModal}>
        Show Modal
      </button>
    </div>
  );
};

export default Home;
