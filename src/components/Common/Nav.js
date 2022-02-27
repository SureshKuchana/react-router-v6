import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/css";

const NavStyles = css`
  margin-bottom: 15px;
  a {
    color: #fff;
    padding: 6px 12px;
    text-decoration: none;
    border-radius: 4px;
    &.active {
      color: #50fa7b;
      border: 2px solid #50fa7b;
    }
  }
`;

export const Nav = () => (
  <nav className={NavStyles}>
    <NavLink to={"/"} end activeclassname="active">
      Products
    </NavLink>
    <NavLink
      to={"/admin"}
      activeclassname="active"
      activestyle={{ fontStyle: "italic", fontWeight: 900 }}
    >
      Admin
    </NavLink>
  </nav>
);
