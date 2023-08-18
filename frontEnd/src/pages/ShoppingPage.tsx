import { useEffect, useReducer } from "react";
import axios from "axios";
import ShopItem from "../components/ShopItem";

interface productType {
    name: string;
    slug: string;
    category: string;
    image: string;
    price: number;
    countInStock: number;
    grower: string;
    rating: number;
    numReviews: number;
    description: string;
}

interface State {
    loading: boolean;
    products: productType[];
    error: string | null;
}

// eslint-disable-next-line
const reducer = (state: State, action: any) => {
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

    return (
        <div>
            <h1>Featured Products</h1>
            <div className="flex flex-wrap justify-center">
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    products.map((product: productType) => {
                        return (
                            <ShopItem product={product} key={product.slug} />
                        );
                    })
                )}
            </div>
        </div>
    );
}
