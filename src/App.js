import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import Footer from "./components/Footer/Footer";
import ProductContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";
import TestiContextProvider from "./contexts/testiContext";
import FavContextProvider from "./contexts/favContext";

const App = () => {
    return (
        <>
            <TestiContextProvider>
            <FavContextProvider>
                <CartContextProvider>
                    <ProductContextProvider>
                        <BrowserRouter>
                            <Header/>
                            <Routing/>
                            <Footer/>
                        </BrowserRouter>
                    </ProductContextProvider>
                </CartContextProvider>
            </FavContextProvider>
            </TestiContextProvider>
        </>
    );
};

export default App;
