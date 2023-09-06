import { VscListFlat } from "react-icons/vsc";

export default function CartPage() {
    return (
        <div className=" flex justify-center items-center">
            <div className="w-screen md:w-9/12 ">
                <div className="m-10 p-5 bg-gray-100 py-10">
                    <h2 className="text-4xl text-black font-medium">Cart</h2>
                    <div className="bg-gray-700 h-1 my-2"></div>
                    <div className="flex items-center py-10">
                        <VscListFlat size={"25px"} />
                        <p className="pl-2 font-semibold">
                            Your cart is currently empty
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
