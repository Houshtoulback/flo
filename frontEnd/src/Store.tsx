import { ReactNode, createContext, useReducer } from "react";

const initialState = {
    cart: {
        cartItems: [],
    },
};
export const Store = createContext(initialState);

function reducer(state: any, action: any) {
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

export function StoreProvider(props: { children: ReactNode }) {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
}
