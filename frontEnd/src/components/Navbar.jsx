import PropTypes from "prop-types"

import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ImMenu } from "react-icons/im";


NavItem.propTypes = {
    content: PropTypes.node,
    link: PropTypes.string,
};

function NavItem(props) {
    const { content, link } = props;

    return (
        <Link to={link}>
            <div className="p-5 font-bold text-lg">{content}</div>
        </Link>
    );
}

Navbar.propTypes = {
    cartItems: PropTypes.number,
};


export default function Navbar(props) {
    const { cartItems } = props;
    return (
        <div
            className={
                "bg-white w-full h-20 flex justify-between items-center px-5 lg:px-20 xl:px-32 border-bottom"
            }
        >
            <div>
                <img src="/assets/greenLogo.jpg" className="w-28" />
            </div>

            <div className={"hidden md:flex text-green-700"}>
                <NavItem content="Home" link="/" />
                <NavItem content="Shop" link="/shop" />
                <NavItem content="About Us" link="/about-us" />
                <NavItem content="Testimonials" link="/testimonials" />
                <div className="relative">
                    <NavItem
                        content={<FaShoppingCart color="#00AB84" size="25px" />}
                        link="/cart"
                    />
                    {cartItems > 0 && (
                        <span className="absolute top-5 right-5 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-rose-500 text-white">
                            {cartItems}
                        </span>
                    )}
                </div>
            </div>
            <div className="md:hidden">
                <NavItem
                    content={<ImMenu color="#00AB84" size="35px" />}
                    link="/"
                />
            </div>
        </div>
    );
}
