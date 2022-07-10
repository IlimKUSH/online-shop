import React, {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {favContext} from "../../contexts/favContext";
import "./Fav.css"

const Cart = ({item}) => {
    const navigate = useNavigate();

    const {getFav, fav, deleteFromFav} = useContext(favContext)

    useEffect(() => {
        getFav();
    }, []);
    return fav ? (
        <div>
            <div className="container">
                <div className="path">
                    <p onClick={() => navigate("/")}>Главная</p>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
                            fill="#414141"
                        />
                    </svg>
                    <p>Избранное</p>
                </div>
                <div className="cart">
                    <h2>Избранное</h2>
                    <div className="cart__content">
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}
                        >
                            {fav.products.map(elem => (
                                <dv className="favs__container" key={elem.item.id}>
                                    <div className="fav__container__info">
                                        <div className="fav__img__parent">
                                        <img className="fav__img" src={elem.item.image} alt="" width="100px"/>
                                        </div>
                                        <div className="fav__info">
                                            <p className="fav__info__price">{elem.item.price} ₽</p>
                                            <p className="fav__info__title">{elem.item.title}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <svg
                                            className="product__btn"
                                            onClick={() => deleteFromFav(elem.item.id)}
                                            width="30"
                                            height="30"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H21C21.2761 5.5 21.5 5.72386 21.5 6C21.5 6.27614 21.2761 6.5 21 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6Z"
                                                fill="#414141"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10 2.5C9.17157 2.5 8.5 3.17157 8.5 4V6C8.5 6.27614 8.27614 6.5 8 6.5C7.72386 6.5 7.5 6.27614 7.5 6V4C7.5 2.61929 8.61929 1.5 10 1.5H14C15.3807 1.5 16.5 2.61929 16.5 4V6C16.5 6.27614 16.2761 6.5 16 6.5C15.7239 6.5 15.5 6.27614 15.5 6V4C15.5 3.17157 14.8284 2.5 14 2.5H10ZM5 5.5C5.27614 5.5 5.5 5.72386 5.5 6V20C5.5 20.8284 6.17157 21.5 7 21.5H17C17.8284 21.5 18.5 20.8284 18.5 20V6C18.5 5.72386 18.7239 5.5 19 5.5C19.2761 5.5 19.5 5.72386 19.5 6V20C19.5 21.3807 18.3807 22.5 17 22.5H7C5.61929 22.5 4.5 21.3807 4.5 20V6C4.5 5.72386 4.72386 5.5 5 5.5Z"
                                                fill="#414141"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10 10.5C10.2761 10.5 10.5 10.7239 10.5 11V17C10.5 17.2761 10.2761 17.5 10 17.5C9.72386 17.5 9.5 17.2761 9.5 17V11C9.5 10.7239 9.72386 10.5 10 10.5Z"
                                                fill="#414141"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M14 10.5C14.2761 10.5 14.5 10.7239 14.5 11V17C14.5 17.2761 14.2761 17.5 14 17.5C13.7239 17.5 13.5 17.2761 13.5 17V11C13.5 10.7239 13.7239 10.5 14 10.5Z"
                                                fill="#414141"
                                            />
                                        </svg>
                                        <svg
                                            className="product__btn"
                                            onClick={() => navigate(`/details/${elem.item.id}`)}
                                            width="30"
                                            height="30"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5Z"
                                                fill="#414141"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12 7.5C12.2761 7.5 12.5 7.72386 12.5 8V12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12V8C11.5 7.72386 11.7239 7.5 12 7.5Z"
                                                fill="#414141"
                                            />
                                            <path
                                                d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
                                                fill="#414141"
                                            />
                                        </svg>
                                    </div>
                                </dv>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <h1>Loading...</h1>
    );
};

export default Cart;
