import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Admin } from "./components/Admin/Admin";
import { Products } from "./components/Products/Products";
import { css } from "@emotion/css";
import { Nav } from "./components/Common/Nav";
import { ProductIndex } from "./components/Products/ProductIndex";

const AppStyles = css`
  margin: 50px auto;
  width: 380px;
  .container {
    background: #1d1e26;
    border: 4px solid #9580ff;
    border-radius: 6px;
    padding: 25px;
  }
`;

const App = () => {
  return (
    <div className={AppStyles}>
      <Router>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<Products />}>
              <Route path="/" element={<ProductIndex />} />
            </Route>
            <Route path="/admin" element={<Admin />} />
            {/* <Route path="*" element={<div>Not Found</div>} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
