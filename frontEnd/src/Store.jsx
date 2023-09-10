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
        case "CART_ADD_ITEM": {
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find(
                (item) => item._id === newItem._id
            );
            const cartItems = existItem
                ? state.cart.cartItems.map((item) =>
                      item._id === existItem._id ? newItem : item
                  )
                : [...state.cart.cartItems, newItem];

            return { ...state, cart: { ...state.cart, cartItems } };
        }
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
