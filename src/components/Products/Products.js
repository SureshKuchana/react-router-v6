import React from "react";
import { css } from "@emotion/css";
import { Outlet } from "react-router-dom";
const productCssStyles = css`
  display: flex;
  flex-direction: column;
  .logo {
    width: 125px;
    margin: 0 auto 25px;
  }
`;

export const Products = () => {
  return (
    <>
      <div className={productCssStyles}>
        <img src="/assets/img/logo.svg" alt="u" className="logo" />
        Products List
        <Outlet />
      </div>
    </>
  );
};
