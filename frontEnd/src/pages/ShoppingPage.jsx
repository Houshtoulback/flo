import { useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

import ShopItem, { LoadingShopItem } from "../components/ShopItem";
import MessageBox from "../components/MessageBox";

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, products: action.payload, loading: false };
        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default function ShoppingPage() {
    const [{ loading, error, products }, dispatch] = useReducer(reducer, {
        loading: true,
        error: "",
        products: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/products"
                );
                dispatch({ type: "FETCH_SUCCESS", payload: response.data });
            } catch (e) {
                dispatch({
                    type: "FETCH_FAIL",
                    payload: "problem with fetching data",
                });
            }
        };
        fetchData();
    }, []);

    const componentArr = [];
    for (let i = 0; i < 18; i++) {
        componentArr.push(<LoadingShopItem key={i} />);
    }

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>shop</title>
            </Helmet>
            <h1>Featured Products</h1>

            <div className="flex flex-wrap justify-center">
                {loading ? (
                    <div className="flex flex-wrap justify-center">
                        {componentArr}
                    </div>
                ) : error ? (
                    <MessageBox variant="red">{error}</MessageBox>
                ) : (
                    products.map((product) => {
                        return (
                            <ShopItem product={product} key={product.slug} />
                        );
                    })
                )}
            </div>
        </div>
    );
}
