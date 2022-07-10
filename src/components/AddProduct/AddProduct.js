import React, { useContext, useState } from "react";
import { productsContext } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { createProduct } = useContext(productsContext);
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  function handleSave() {
    const newProduct = {
      title,
      price,
      image,
    };
    if (!title.trim() || !price || !image.trim()) {
      alert("Заполните поля!");
    } else {
      createProduct(newProduct);
      navigate("/");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <input
        style={{ marginTop: 15 }}
        onChange={e => setTitle(e.target.value)}
        value={title}
        placeholder="Название"
        type="text"
      />
      <input
        style={{ marginTop: 15 }}
        onChange={e => setPrice(+e.target.value)}
        value={price}
        placeholder="Цена"
        type="number"
      />
      <input
        style={{ marginTop: 15 }}
        onChange={e => setImage(e.target.value)}
        value={image}
        placeholder="Картинка"
        type="text"
      />
      <button style={{ marginTop: 15 }} onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default AddProduct;
