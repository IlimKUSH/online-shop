import React, {useReducer} from "react";
import axios from "axios";

export const productsContext = React.createContext();

const INIT_STATE = {
    products: [],
    oneProduct: null,
    pages: 0,
};

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state, products: action.payload.data,
                pages: Math.ceil(action.payload.headers["x-total-count"] / 2)
            };
        case "GET_ONE":
            return {...state, oneProduct: action.payload}
        default:
            return state;
    }
}

const PRODUCTS_API = "http://localhost:8000/products"

const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function createProduct(newProduct) {
        await axios.post(`${PRODUCTS_API}`, newProduct)
        getProducts()
    }

    async function getProducts() {
        const res = await axios(`${PRODUCTS_API}${window.location.search}`);
        dispatch({
            type: "GET_PRODUCTS",
            payload: res,
        })
    }

    async function deleteProduct(id) {
        await axios.delete(`${PRODUCTS_API}/${id}`)
        getProducts()
    }

    async function getOneProduct(id) {
        const res = await axios(`${PRODUCTS_API}/${id}`)
        dispatch({
            type: "GET_ONE",
            payload: res.data
        })
    }

    async function updateProduct(id, editedProduct) {
        await axios.patch(`${PRODUCTS_API}/${id}`, editedProduct)
    }

    return <productsContext.Provider value={{
        products: state.products,
        oneProduct: state.oneProduct,
        pages: state.pages,
        createProduct,
        getProducts,
        deleteProduct,
        getOneProduct,
        updateProduct,
    }}>
        {children}
    </productsContext.Provider>
}
export default ProductContextProvider
