import { useParams } from "react-router-dom";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { RatingStars } from "../components/ShopItem";

import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

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
    product: productType[];
    error: string | null;
}

// eslint-disable-next-line
const reducer = (state: State, action: any) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return {
                ...state,
                product: action.payload,
                loading: false,
            };
        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default function ProductPage() {
    const params = useParams();
    const { slug } = params;

    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        loading: true,
        error: "",
        product: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/products/slug/${slug}`
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
    }, [slug]);

    return loading ? (
        <div>Loading...</div>
    ) : error ? (
        <div>{error}</div>
    ) : (
        <div className="py-28">
            <div className="flex justify-evenly container mx-auto">
                <img className="max-w-xl" src={product.image} />
                <div className="flex flex-col  max-w-3xl flex-1 py-10">
                    <div className="uppderDiv border-bottom pb-5">
                        <div className="route">
                            Home / Indoor Plants / Aluminum Plan
                        </div>
                        <h2 className="capitalize text-3xl font-bold py-5 text-slate-800">
                            {product.name}
                        </h2>
                        <h3 className="text-2xl font-bold text-gray-600">
                            {`$${product.price}`}
                        </h3>
                        <RatingStars rating={product.rating} />
                        <p>{`reviews "${product.numReviews}"`}</p>
                        <p className="py-5">{product.description}</p>
                        <div className="">
                            <input
                                className="w-24 border-2 py-2 mr-5"
                                type="number"
                                name=""
                                id=""
                            />
                            <button className="text-white py-3 px-5 mt-7 font-bold bg-green-600 hover:bg-green-700 hover:shadow-md transition">
                                add to cart
                            </button>
                        </div>
                    </div>
                    <div className="lowerDiv">
                        <span>{`category: ${product.category}`}</span>
                        <p className="text-lg font-bold text-neutral-600 py-2 pt-4">
                            free shipping on orders over $50!
                        </p>
                        <div className="text-slate-600">
                            <p>No-Risk Money Back Guarantee!</p>
                            <p>No Hassle Refunds </p>
                            <p>Secure Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
