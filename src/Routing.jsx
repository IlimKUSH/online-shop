import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import AddProduct from "./components/AddProduct/AddProduct";

const Routing = () => {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />    
    <Route path="/add" element={<AddProduct/>}/>
</Routes>
  );

export default Routing;
