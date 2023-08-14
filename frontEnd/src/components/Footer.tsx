import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer(props: { light: boolean }) {
    const { light } = props;

    return (
        <div
            className={` flex flex-col items-center ${
                light ? "bg-white" : "bg-zinc-400"
            }`}
        >
            <h2
                className={`text-2xl lg:text-5xl font-bold ${
                    light ? "text-slate-700" : "text-white"
                } my-5`}
            >
                CONTACT ME
            </h2>
            <p
                className={`text-lg text-center ${
                    light ? "text-slate-500" : "text-white"
                } my-5`}
            >
                designed and programmed by HoushtoulBack, a frontEnd developer
            </p>
            <div className="flex mt-10 flex-row mb-10">
                <span className="bg-slate-500 flex justify-center items-center w-12 h-12 rounded-full m-2 hover:bg-slate-600 transition">
                    <BsGithub size="25px" />
                </span>
                <span className="bg-slate-500 flex justify-center items-center w-12 h-12 rounded-full m-2 hover:bg-slate-600 transition">
                    <BsTwitter size="25px" />
                </span>
                <span className="bg-slate-500 flex justify-center items-center w-12 h-12 rounded-full m-2 hover:bg-slate-600 transition">
                    <BiLogoGmail size="25px" />
                </span>
            </div>
        </div>
    );
}
