import { AiFillGithub } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <>
            <Image
                src="/images/me.jpg"
                alt="me"
                className="mx-auto border rounded-full"
                height="140px"
                width="140px"
                layout="intrinsic"
                quality="100"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-orange ">Ryodai</span> Makino
            </h3>

            <p className="my-1 font-sans text-sm medium">A Full Stack Developer</p>

            <div className="flex items-center justify-center py-3 font-sans">
                <GoLocation className="mr-2" /> <span>Tokyo,Japan </span>
            </div>

            <div className="flex justify-around w-9/12 mx-auto my-5 text-orange md:w-full ">
                <a href="https://github.com/makidai" target="_blank">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
            </div>

            <button
                suppressHydrationWarning
                onClick={changeTheme}
                className="w-8/12 px-3 py-2 my-4 font-sans text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-orange to-red focus:outline-none hover:scale-105"
            >
                {theme === "light" ? "Dark UI" : "Light UI"}
            </button>
        </>
    );
};

export default Sidebar;
