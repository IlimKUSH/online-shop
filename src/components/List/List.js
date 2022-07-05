import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productsContext } from "../../contexts/productsContext";

const List = () => {
  const { products, deleteProduct } = useContext(productsContext);

  return (
    <div>
      <div className="products__cards container">
        {products.map(item => (
          <ProductCard
            key={item.id}
            item={item}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
