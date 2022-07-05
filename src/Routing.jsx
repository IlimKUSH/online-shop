import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";
import AddProduct from "./components/AddProduct/AddProduct";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default Routing;
