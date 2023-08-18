import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { ImMenu } from "react-icons/im";

function NavItem(props: { content: React.ReactNode; link: string }) {
    const { content, link } = props;

    return (
        <Link to={link}>
            <div className="p-5 font-bold text-lg">{content}</div>
        </Link>
    );
}

export default function Navbar() {
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
                <NavItem
                    content={<FaShoppingCart color="#00AB84" size="25px" />}
                    link="/shopping-cart"
                />
            </div>
            <div className="md:hidden">
                <NavItem
                    content={<ImMenu color="#00AB84" size="35px" />}
                    link="/shopping-cart"
                />
            </div>
        </div>
    );
}
