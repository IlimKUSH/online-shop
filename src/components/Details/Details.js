import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {productsContext} from "../../contexts/productsContext";

const Details = () => {
    const {id} = useParams();
    const {oneProduct, getOneProduct} =useContext(productsContext);
    useEffect(() => {
        getOneProduct(id)
    },[])
    return oneProduct ? (
        <div>
            <p>{oneProduct.title}</p>
            <p>{oneProduct.price}</p>
            <img src={oneProduct.image} width="50%" alt="product"/>
        </div>
    ) : (
        <h1>Loading...</h1>
    )
};

export default Details;
