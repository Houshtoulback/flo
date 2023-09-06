import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
export const Store = createContext();

const initialState = {
    cart: {
        cartItems: [],
    },
};

function reducer(state, action) {
    switch (action.type) {
        case "CART_ADD_ITEM":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: [...state.cart.cartItems, action.payload],
                },
            };
        default:
            return state;
    }
}

StoreProvider.propTypes = {
    children: PropTypes.node,
};

export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
}
