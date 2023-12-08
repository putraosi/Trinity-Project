/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { DPhoto } from "../../assets/dummy";
import { MenuBar } from "../../pages";
import "./Sidebar.css";

const Sidebar = ({ children }) => {
  return (
    <div className="container_sidebar">
      <div className="top">
        <p className="title">{"Catalog Manager"}</p>

        <div className="container_profile">
          <p>{"Adimn"}</p>

          <img src={DPhoto} />
        </div>
      </div>

      <div className="bottom">
        <MenuBar />

        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
