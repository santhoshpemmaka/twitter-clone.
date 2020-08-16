import React from "react";
import "./SideOption.css";

function SideOption({ active, text, Icon }) {
  return (
    <div className={`sideOption ${active && "sideOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SideOption;
