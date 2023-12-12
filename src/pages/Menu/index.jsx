import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ARTITS_PATH,
  COMPOSERS_PATH,
  LABEL_PATH,
  PERSONS_PATH,
  PUBLISHERS_PATH,
  RECORDING_PATH,
  RELEASE_PATH,
} from "../../utils";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Sound Recordings", "sound_recording", null, [
    getItem("Releases", RELEASE_PATH),
    getItem("Recordings", RECORDING_PATH),
  ]),
  getItem("Contributors", "contributors", null, [
    getItem("Artists", ARTITS_PATH),
    // getItem("Persons", PERSONS_PATH),
    // getItem("Composers", COMPOSERS_PATH),
  ]),
  // getItem("Companies", "companies", null, [
  //   getItem("Label", LABEL_PATH),
  //   getItem("Publishers", PUBLISHERS_PATH),
  // ]),
];

const MenuBar = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(e?.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
        height: "100vh",
        position: "fixed",
      }}
      defaultSelectedKeys={[RELEASE_PATH]}
      defaultOpenKeys={["sound_recording"]}
      mode="inline"
      items={items}
    />
  );
};
export default MenuBar;
