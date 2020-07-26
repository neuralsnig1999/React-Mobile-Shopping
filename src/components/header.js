import React from "react";
import {
  GiShoppingCart,
  FaUserCircle,
  RiArrowDropDownLine,
} from "react-icons/all";
// import data from '../db.json'

const Header = (props) => {
  console.log("props", props);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px",
        border: "solid 1px",
      }}
    >
      <h1 style={{ padding: "0px 0px 0px 12px" }}>Mob Online</h1>
      <div
        style={{
          display: "flex",
          margin: "3px",
          justifyContent: "space-around",
        }}
      >
        <FaUserCircle size="50px" />
        <p style={{ padding: "0px 0px 0px 12px" }}>User name</p>
        <RiArrowDropDownLine size="50px" />
        <GiShoppingCart size="50px" />
      </div>
    </div>
  );
};

export default Header;
