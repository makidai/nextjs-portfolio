import { AiFillGithub } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Image from "next/image";

const Sidebar = () => {
    return (
        <>
            <Image
                src="/avatar.jpg"
                alt="avatar"
                className="mx-auto border rounded-full"
                height="128px"
                width="128px"
                layout="intrinsic"
                quality="100"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-orange ">Ryodai</span> Makino
            </h3>
            
            <p className="my-1 text-sm medium dark:bg-dark-200 dark:bg-black-500">
                A Full Stack Developer
            </p>

            <div className="flex justify-around w-9/12 mx-auto my-5 text-orange md:w-full ">
                <a href="https://github.com/makidai">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
            </div>

            <div
                className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
                style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
            >
                <div className="flex items-center justify-center">
                    <GoLocation className="mr-2" /> <span>Tokyo,Japan </span>
                </div>
            </div>

            <button className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-orange to-red focus:outline-none hover:scale-105 ">
                Toggle Theme
            </button>
        </>
    );
};

export default Sidebar;
