import React, {useReducer} from "react";

export const favContext = React.createContext();

const INIT_STATE = {
    cart: null,
    count: 0,
};

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_FAV":
            return {
                ...state,
                fav: action.payload,
                count: action.payload.products.length,
            };
        default:
            return state;
    }
}

const FavContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    function addToFav(product) {
        let fav = JSON.parse(localStorage.getItem("fav"));
        if (!fav) {
            fav = {
                products: [],
                totalPrice: 0,
            };
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: product.price,
        };
        const isProductInCart = fav.products.some(
            item => item.item.id === newProduct.item.id
        );
        if (isProductInCart) {
            fav.products = fav.products.filter(
                item => item.item.id !== newProduct.item.id
            );
        } else {
            fav.products.push(newProduct);
        }

        // cart.products.push(newProduct);
        localStorage.setItem("fav", JSON.stringify(fav));
        getFav();
    }

    function getFav() {
        let fav = JSON.parse(localStorage.getItem("fav"));
        if (!fav) {
            fav = {
                products: [],
                totalPrice: 0,
                discount: 0,
            };
        }
        fav.totalPrice = fav.products.reduce((prev, curr) => {
            return prev + curr.subPrice;
        }, 0);
        fav.discount = Math.ceil(fav.totalPrice * 0.05);
        dispatch({
            type: "GET_FAV",
            payload: fav,
        });
    }

    function deleteFromFav(id) {
        let fav = JSON.parse(localStorage.getItem("fav"));
        if (!fav) {
            fav = {
                products: [],
                totalPrice: 0,
            };
        }
        fav.products = fav.products.filter(item => item.item.id !== id);
        localStorage.setItem("fav", JSON.stringify(fav));
        getFav();
    }

    function checkProductInFav(id) {
        let fav = JSON.parse(localStorage.getItem("cart"));
        if (!fav) {
            fav = {
                products: [],
                totalPrice: 0,
            };
        }
        const isProductInFav = fav.products.some(item => item.item.id === id);
        return isProductInFav;
    }

    function changeCount(count, id) {
        if (count <= 0) {
            return;
        }
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav.products = fav.products.map(item => {
            if (item.item.id === id) {
                item.count = count;
                item.subPrice = count * item.item.price;
            }
            return item;
        });
        localStorage.setItem("cart", JSON.stringify(fav));
        getFav();
    }

    return (
        <favContext.Provider
            value={{
                fav: state.fav,
                count: state.count,
                getFav,
                addToFav,
                deleteFromFav,
                changeCount,
                checkProductInFav,
            }}>
            {children}
        </favContext.Provider>
    );
};

export default FavContextProvider;
