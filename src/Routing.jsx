import React from "react";
import {Route, Routes} from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";
import EditProduct from "./components/EditProduct/EditProduct";
import Details from "./components/Details/Details";

import AddProduct from "./components/AddProduct/AddProduct";


const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/add" element={<AddProduct/>}/>
            <Route path="/edit/:id" element={<EditProduct/>}/>
            <Route path="/details/:id" element={<Details/>}/>

        </Routes>
    );
}

export default Routing;
