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
          </div>
          <div className="products__text">
            <h4>{item.price} ₽</h4>
            <p>{item.title}</p>
            <button
              onClick={() => {
                addToCart(item);
                setProductState(checkProductInCart(item.id));
              }}>
              В корзину
            </button>
          </div>
        </div>
        <button onClick={() => deleteProduct(item.id)}>Delete</button>
        <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
        <button onClick={() => navigate(`/details/${item.id}`)}>More</button>
      </div>
    </div>
  );
};

export default ProductCard;
