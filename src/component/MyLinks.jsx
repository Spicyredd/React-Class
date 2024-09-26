import React from "react";
import { NavLink } from "react-router-dom";

const MyLinks = () => {
  return (
    <>
      <NavLink style={{ marginRight: "10px" }} to="/user">
        User
      </NavLink>
      <NavLink style={{ marginRight: "10px" }} to="/user/create">
        Create User
      </NavLink>

      <NavLink style={{ marginRight: "10px" }} to="/product">
        Product
      </NavLink>
      <NavLink style={{ marginRight: "10px" }} to="/product/create">
        Create Product
      </NavLink>
    </>
  );
};

export default MyLinks;
