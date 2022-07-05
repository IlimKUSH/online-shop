import React, {useContext, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {cartContext} from "../../contexts/cartContext";

const Cart = ({item}) => {

    const navigate = useNavigate()

    const {getCart, cart, deleteFromCart, changeCount} = useContext(cartContext)

    useEffect(() => {
        getCart()
    },[])
    console.log(cart)
    return cart ? (
        <div>
            {cart.products.map(elem => (
                <div key={elem.item.id} style={{
                    display:"flex",

                }}>
                    <p>{elem.item.title}</p>
                    <p>{elem.item.price}</p>
                    <button onClick={() => changeCount(elem.count - 1, elem.item.id)}>-</button>
                    <p>{elem.count}</p>
                    <button onClick={() => changeCount(elem.count + 1, elem.item.id)}>+</button>
                    <p>{elem.subPrice}</p>
                    <button onClick={() => deleteFromCart(elem.item.id)}>delete</button>
                    <button onClick={() => navigate(`/details/${elem.item.id}`)}>info</button>

                </div>

            ))}
            <div>
                <p>Total:{cart.totalPrice}$</p>
            </div>
        </div>

    ) : (
        <h1>Loading...</h1>
    )
};

export default Cart;
