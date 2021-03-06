import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";

import Image from "next/image";

const ProjectCard: FunctionComponent<{
    project: IProject;
}> = ({
    project: {
        name,
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs,
    },
}) => {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div>
            <Image
                src={image_path}
                alt={name}
                // className="cursor-pointer"
                // onClick={() => setShowDetail(true)}
                layout="responsive"
                height="150"
                width="200"
            />
            <p className="my-2 font-sans text-xs text-center text-semibold">
                {name}
            </p>
            <div className="flex flex-wrap mt-5 space-x-2 font-sans text-xs tracking-wider">
                {key_techs.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-1 my-1 bg-white border rounded-md border-orange dark:bg-dark-100"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {showDetail && (
                <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                    <div>
                        <Image
                            src={image_path}
                            alt={name}
                            layout="responsive"
                            height="150"
                            width="200"
                        />
                        <div className="flex justify-center my-4 space-x-3">
                            <a
                                href={github_url}
                                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                            >
                                <AiFillGithub />{" "}
                                <span className="font-sans">Github</span>
                            </a>
                            <a
                                href={deployed_url}
                                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                            >
                                <AiFillProject />{" "}
                                <span className="font-sans">Project</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-3 font-sans text-xl font-medium md:text-2xl">
                            {name}
                        </h2>
                        <h3 className="mb-3 font-sans font-medium">
                            {description}
                        </h3>

                        <div className="flex flex-wrap mt-5 space-x-2 font-sans text-sm tracking-wider">
                            {key_techs.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => setShowDetail(false)}
                        className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
                    >
                        <MdClose size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
