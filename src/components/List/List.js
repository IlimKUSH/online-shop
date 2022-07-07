import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productsContext } from "../../contexts/productsContext";
import { useSearchParams } from "react-router-dom";
import { Pagination, Slider } from "@mui/material";

const List = () => {
  const { getProducts, pages, products, deleteProduct } =
    useContext(productsContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );

  const [price, setPrice] = useState([0, 10000]);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      _page: currentPage,
      _limit: 8,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [currentPage, price]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "500px",
          marginTop: "20px",
          flexDirection: "column",
        }}
        className="container">
        <p
          style={{
            fontSize: "18px",
          }}>
          По цене:
        </p>
        <div
          style={{
            width: "600px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "10px 0 20px 0",
          }}>
          <p>0</p>
          <Slider
            style={{
              width: "500px",
              color: "#70c05b",
            }}
            value={price}
            onChange={e => {
              setPrice(e.target.value);
            }}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            step={1}
          />
          <p>1000</p>
        </div>
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
      <Pagination
        style={{ marginTop: "20px" }}
        onChange={(event, page) => setCurrentPage(page)}
        page={currentPage}
        variant="outlined"
        shape="rounded"
        count={pages}
      />
    </div>
  );
};

export default List;
