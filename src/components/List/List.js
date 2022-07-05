import React, {useContext, useEffect, useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
import {productsContext} from "../../contexts/productsContext";
import {useSearchParams} from "react-router-dom";
import Search from "../../img/search.svg";
import {Pagination, Slider} from "@mui/material";

const List = () => {
    const {getProducts,pages} = useContext(productsContext)

    const [searchParams, setSearchParams] = useSearchParams();

    const [search, setSearch] = useState(
        searchParams.get("q") ? searchParams.get("q") : "");

    const [currentPage, setCurrentPage] = useState(
        searchParams.get("_page" ? +searchParams.get("_page") : 1)
    );

    const {products, deleteProduct} = useContext(productsContext);

    const [price, setPrice] = useState([0,1000])
    // console.log(price)
    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        setSearchParams({
            q: search,
            _page: currentPage,
            limit: 4,
            price_gte: price[0],
            price_lte: price[1],
        });
    }, [search, currentPage, price]);

    useEffect(() => {
        getProducts();
    }, [searchParams]);

    return (
        <div>
            <div className="header__search">
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    type="text"
                    placeholder="Найти товар"
                />
                <img src={Search} alt="search"/>
            </div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:'500px'
            }} className="container">
                <Slider
                    style={{
                        color: "#70c05b",
                        margin: "20px 0",
                    }}
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value)}}
                    valueLabelDisplay="auto"
                    min={0}
                    max={1000}
                    step={10}
                />
            </div>
            <div className="products__cards container">
                {products.map(item => (
                    <ProductCard
                        key={item.id}
                        item={item}
                        deleteProduct={deleteProduct}
                    />
                ))}
            </div>
            <Pagination onChange={(event,page) => setCurrentPage(page)} page={currentPage} count={pages} variant="outlined" shape="rounded" />
        </div>
    );
};

export default List;
