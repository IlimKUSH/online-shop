import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import { productsContext } from "../../contexts/productsContext";
import "./productCard.css";

const ProductCard = ({ item }) => {
  const { addToCart, checkProductInCart } = React.useContext(cartContext);


  const navigate = useNavigate();
  const { deleteProduct } = useContext(productsContext);
  const [productState, setProductState] = useState(checkProductInCart(item.id));

  return (
    <div>
      <div className="container">
        <div className="products">
          <div className="products__img-parent">
            <img className="products__img" src={item.image} alt="" />
            <div className="products__img-child">
              <svg style={{
                cursor:'pointer'
              }} onClick={() => {
              }}
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7046 2.25644C12.8299 1.13067 14.3564 0.498169 15.9482 0.498169C17.5399 0.498169 19.0664 1.13063 20.1916 2.25636C21.3174 3.38164 21.95 4.90829 21.95 6.49999C21.95 8.09174 21.3175 9.61826 20.1917 10.7435C20.1917 10.7436 20.1917 10.7435 20.1917 10.7435L11.3517 19.5835C11.1565 19.7788 10.8399 19.7788 10.6446 19.5835L1.80461 10.7435C-0.539037 8.3999 -0.539037 4.60009 1.80461 2.25644C4.14826 -0.0872086 7.94807 -0.0872087 10.2917 2.25644L10.9982 2.96289L11.7046 2.25644C11.7046 2.25641 11.7046 2.25647 11.7046 2.25644ZM15.9482 1.49817C14.6217 1.49817 13.3496 2.02528 12.4118 2.96346L11.3517 4.02355C11.258 4.11732 11.1308 4.16999 10.9982 4.16999C10.8656 4.16999 10.7384 4.11732 10.6446 4.02355L9.58461 2.96355C7.63149 1.01042 4.46484 1.01042 2.51172 2.96355C0.558594 4.91667 0.558594 8.08332 2.51172 10.0364L10.9982 18.5229L19.4846 10.0364C20.4228 9.09869 20.95 7.82648 20.95 6.49999C20.95 5.17351 20.4229 3.90138 19.4847 2.96363C18.5469 2.02544 17.2747 1.49817 15.9482 1.49817Z"
                  fill="#414141"
                />
              </svg>
            </div>
          </div>
          <div className="products__text">
            <h4>{item.price} ₽</h4>
            <p>{item.title}</p>
            <button
              className="products__text-btn"
              onClick={() => {
                addToCart(item);
                setProductState(checkProductInCart(item.id));
              }}>
              В корзину
            </button>
            <div className="product__btns">
              <svg
                className="product__btn"
                onClick={() => deleteProduct(item.id)}
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H21C21.2761 5.5 21.5 5.72386 21.5 6C21.5 6.27614 21.2761 6.5 21 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 2.5C9.17157 2.5 8.5 3.17157 8.5 4V6C8.5 6.27614 8.27614 6.5 8 6.5C7.72386 6.5 7.5 6.27614 7.5 6V4C7.5 2.61929 8.61929 1.5 10 1.5H14C15.3807 1.5 16.5 2.61929 16.5 4V6C16.5 6.27614 16.2761 6.5 16 6.5C15.7239 6.5 15.5 6.27614 15.5 6V4C15.5 3.17157 14.8284 2.5 14 2.5H10ZM5 5.5C5.27614 5.5 5.5 5.72386 5.5 6V20C5.5 20.8284 6.17157 21.5 7 21.5H17C17.8284 21.5 18.5 20.8284 18.5 20V6C18.5 5.72386 18.7239 5.5 19 5.5C19.2761 5.5 19.5 5.72386 19.5 6V20C19.5 21.3807 18.3807 22.5 17 22.5H7C5.61929 22.5 4.5 21.3807 4.5 20V6C4.5 5.72386 4.72386 5.5 5 5.5Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 10.5C10.2761 10.5 10.5 10.7239 10.5 11V17C10.5 17.2761 10.2761 17.5 10 17.5C9.72386 17.5 9.5 17.2761 9.5 17V11C9.5 10.7239 9.72386 10.5 10 10.5Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 10.5C14.2761 10.5 14.5 10.7239 14.5 11V17C14.5 17.2761 14.2761 17.5 14 17.5C13.7239 17.5 13.5 17.2761 13.5 17V11C13.5 10.7239 13.7239 10.5 14 10.5Z"
                  fill="#414141"
                />
              </svg>
              <svg
                className="product__btn"
                onClick={() => navigate(`/edit/${item.id}`)}
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.6464 1.64645C13.8417 1.45118 14.1583 1.45118 14.3536 1.64645L18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L7.35355 17.3536C7.25979 17.4473 7.13261 17.5 7 17.5H3C2.72386 17.5 2.5 17.2761 2.5 17V13C2.5 12.8674 2.55268 12.7402 2.64645 12.6464L13.6464 1.64645ZM3.5 13.2071V16.5H6.79289L17.2929 6L14 2.70711L3.5 13.2071Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 22C2.5 21.7239 2.72386 21.5 3 21.5H21C21.2761 21.5 21.5 21.7239 21.5 22C21.5 22.2761 21.2761 22.5 21 22.5H3C2.72386 22.5 2.5 22.2761 2.5 22Z"
                  fill="#414141"
                />
              </svg>
              <svg
                className="product__btn"
                onClick={() => navigate(`/details/${item.id}`)}
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 7.5C12.2761 7.5 12.5 7.72386 12.5 8V12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12V8C11.5 7.72386 11.7239 7.5 12 7.5Z"
                  fill="#414141"
                />
                <path
                  d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
                  fill="#414141"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
