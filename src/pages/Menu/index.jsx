import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ARTITS_PATH, RECORDING_PATH, RELEASE_PATH } from "../../utils";

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
    getItem("Recordings", RECORDING_PATH),
    getItem("Releases", RELEASE_PATH),
  ]),
  getItem("Contributors", "contributors", null, [
    getItem("Artists", ARTITS_PATH),
  ]),
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
      defaultSelectedKeys={[ARTITS_PATH]}
      defaultOpenKeys={["sound_recording"]}
      mode="inline"
      items={items}
    />
  );
};
export default MenuBar;
