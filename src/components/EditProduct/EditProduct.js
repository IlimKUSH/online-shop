import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {productsContext} from "../../contexts/productsContext";

const EditProduct = () => {
    const {getOneProduct, oneProduct, updateProduct, getProducts} = useContext(productsContext);
    const navigate = useNavigate()
    const {id} = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        getOneProduct(id)
    }, []);
    useEffect(() => {
        if (oneProduct) {
            setTitle(oneProduct.title);
            setPrice(oneProduct.price);
            setImage(oneProduct.image);
        }
    }, [oneProduct])

    function handleSave() {
        const editedProduct = {
            title,
            price,
            image,
        };
        updateProduct(id, editedProduct)
        getProducts()
        navigate('/')
    }

    return (
        <div style={{
            display:"flex",

        }}>
            <input onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Название" type="text"/>
            <input onChange={(e) => setPrice(+e.target.value)} value={price} placeholder="Цена" type="text"/>
            <input onChange={(e) => setImage(e.target.value)} value={image} placeholder="Картинка" type="text"/>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default EditProduct;
