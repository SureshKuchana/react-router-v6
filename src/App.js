import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Admin } from "./components/Admin/Admin";
import { Product } from "./components/Products/Product";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
