/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Dropdown } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DPhoto } from "../../assets/dummy";
import { storeData } from "../../helpers";
import { MenuBar } from "../../pages";
import { TOKEN, USER } from "../../utils";
import "./Sidebar.css";

const items = (navigate) => [
  {
    label: (
      <a
        onClick={() => {
          storeData(TOKEN, "");
          storeData(USER, "");
          navigate("/", { replace: true });
        }}
      >
        Logout
      </a>
    ),
    key: "0",
  },
];

const Sidebar = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="container_sidebar">
      <div className="top">
        <p className="title">{"Catalog Manager"}</p>

        <Dropdown menu={{ items: items(navigate) }}>
          <div className="container_profile">
            <p>{"Admin"}</p>

            <img src={DPhoto} />
          </div>
        </Dropdown>
      </div>

      <div className="bottom">
        <MenuBar />

        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
