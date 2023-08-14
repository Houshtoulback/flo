import image1 from "../assets/person.jpg";
import image3 from "../assets/woman-planting-plant-in-pot.jpg";
import image4 from "../assets/pic55-free-img.png";

import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidQuoteAltRight } from "react-icons/bi";

export default function Blog() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 p-10 bg-slate-200">
            <div className="flex w-1/2 ">
                <img className="" src={image1} />
                <img className="" src={image3} />
            </div>
            <div className=" p-8 lg:p-28">
                <p className="text-lg capitalize text-green-800">
                    We help gardens thrive!
                </p>
                <h3 className="text-2xl lg:text-5xl capitalize font-bold my-10 ">
                    nonummy cum convallis
                </h3>
                <p className="leading-7 text-slate-600">
                    Elementum tristique mi montes nibh deserunt magna. Netus
                    assumenda molestias nisi porro, nascetur molas. Habitant
                    urna fugiat wisi nceptos sodales magna. Molestie suspendisse
                    faucibus justo! Sollicitudin tempore unde, dolorem,
                    blanditiis a nam beatae nihil bibendum, taciti.
                </p>
                <span className="inline-block  mt-10">
                    <BiSolidQuoteAltRight color="#00AB84" />
                </span>
                <p className="text-lg font-bold">
                    Tempore ut mauris aenean cillum ultrices nunc aliqu auris
                    aenean mpore utma.
                </p>
                <img className="my-5" src={image4} />
                <div className="flex">
                    <span className="inline-block px-2">
                        <AiFillInstagram size="30px" />
                    </span>
                    <span className="inline-block px-2">
                        <BiLogoFacebookCircle size="30px" />
                    </span>
                </div>
            </div>
        </div>
    );
}
