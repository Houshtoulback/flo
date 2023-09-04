import PropTypes from "prop-types"


import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { BsFillBasketFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import { Link } from "react-router-dom";

RatingStars.propTypes = {
    rating: PropTypes.number,
};



export function RatingStars(props) {
    const { rating } = props;
    const fillStars = Math.trunc(rating);
    const halfStars = Math.ceil(rating - fillStars);
    const outlineStars = 5 - (halfStars + fillStars);
    const stars = [];
    for (let i = 0; i < fillStars; i++) {
        stars.push(<AiFillStar color={"#00AB84"} key={`i${i}`} />);
    }
    if (halfStars !== 0) {
        stars.push(<BsStarHalf color={"#00AB84"} key={"j"} size={"14px"} />);
    }
    for (let k = 0; k < outlineStars; k++) {
        stars.push(<AiOutlineStar color={"#00AB84"} key={`k${k}`} />);
    }

    return <span className="hidden sm:flex my-1 lg:my-2">{stars}</span>;
}

Tooltip.propTypes = {
    children: PropTypes.node,
    massage: PropTypes.string
};



function Tooltip(props) {
    const { children, massage } = props;

    return (
        <div className="relative group/tooltip ">
            {children}
            <span className="invisible w-32 bg-black text-white text-center rounded-md py-1 absolute z-10 bottom-full left-1/2 group-hover/tooltip:visible">
                {massage}
            </span>
        </div>
    );
}

export function LoadingShopItem() {
    return (
        <div className="bg-white p-2 rounded-2xl shadow-lg flex flex-col sm:flex-row select-none m-7">
            <div className="h-52 rounded-xl animate-pulse"></div>
            <div className="flex flex-col flex-1 gap-5 sm:p-2">
                <div className="flex flex-1 flex-col gap-3">
                    <div className="bg-gray-200 w-48 animate-pulse h-48 rounded-2xl"></div>
                    <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
                    <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
                    <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
                    <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
                </div>
                <div className="mt-auto flex gap-3">
                    <div className="bg-gray-200 w-14 h-8 animate-pulse rounded-full"></div>
                    <div className="bg-gray-200 w-14 h-8 animate-pulse rounded-full"></div>
                    <div className="bg-gray-200 w-14 h-8 animate-pulse rounded-full ml-auto"></div>
                </div>
            </div>
        </div>
    );
}

ShopItem.propTypes = {
    product: PropTypes.object,
};


export default function ShopItem(props) {
    const { product } = props;

    return (
        <div className="flex flex-col m-2 lg:m-4 items-center">
            <div className="relative group">
                <Link to={`/product/${product.slug}`}>
                    <div className="w-56 h-56 bg-gray-200">
                        <img
                            className=" group-hover:opacity-30 opacity-100 transition w-56 mt-4 object-cover"
                            src={product.image}
                        />
                    </div>
                </Link>
                <div className="group-hover:opacity-100  transition opacity-0 absolute top-6 right-6 text-center">
                    <Tooltip massage="Quick view">
                        <AiFillEye size="25px" color="#4b4c4d" />
                    </Tooltip>

                    {product.countInStock ? (
                        <Tooltip massage="Add to cart">
                            <div>
                                <BsFillBasketFill size="25px" color="#4b4c4d" />
                            </div>
                        </Tooltip>
                    ) : (
                        <Tooltip massage="Sold Out!">
                            <RiCreativeCommonsZeroFill
                                size="25px"
                                color="#4b4c4d"
                            />
                        </Tooltip>
                    )}
                </div>
            </div>
            <Link to={`/product/${product.slug}`}>
                <h2 className="mt-1 lg:mt-2 w-full text-center text-xs md:text-sm lg:font-medium capitalize ">
                    {product.name}
                </h2>
            </Link>
            <RatingStars rating={product.rating} />
            <p className="font-medium mb-5">{`$${product.price}`}</p>
        </div>
    );
}
