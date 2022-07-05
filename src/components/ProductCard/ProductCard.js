import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {productsContext} from "../../contexts/productsContext";
import {cartContext} from "../../contexts/cartContext";

const ProductCard = ({item}) => {
    const { addToCart, checkProductInCart } = React.useContext(cartContext);

    const navigate = useNavigate();
    const[productState,setProductState] = useState(
        checkProductInCart(item.id)
    )
    const {deleteProduct} = useContext(productsContext)
    return (
        <div>
            <div className="container">
                <img src={item.image} alt=""/>
                <p>{item.price}</p>
                <p>{item.title}</p>
                <button onClick={() => deleteProduct(item.id)}>Delete</button>
                <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
                <button onClick={() => navigate(`/details/${item.id}`)}>More</button>
                <button onClick={() => {
                    addToCart(item);
                    setProductState(checkProductInCart(item.id))
                }}>Buy</button>
            </div>
        </div>
    );
};

export default ProductCard;
