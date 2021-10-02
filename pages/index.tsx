import { motion } from "framer-motion";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import { pageAnimation, stagger, fadeInUp } from "../animation";

const index = () => {
    return (
        <motion.div
            className="flex flex-col flex-grow px-6 pt-1"
            variants={pageAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h6 className="my-3 font-sans text-sm">
                都内のWeb系スタートアップでフルスタックエンジニア兼スクラムリーダーを担当しています.
            </h6>
            <div
                className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
                style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
            >
                <h4 className="my-3 font-sans text-xl font-semibold tracking-wide">
                    My Skills
                </h4>

                <motion.div
                    className="grid gap-6 my-3 font-sans text-sm md:grid-cols-2"
                    variants={stagger}
                    animate="animate"
                    initial="initial"
                >
                    {services.map((service) => (
                        <motion.div
                            variants={fadeInUp}
                            className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
                            key={service.title}
                        >
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default index;
