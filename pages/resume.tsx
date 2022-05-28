import Bar from "../components/Bar";
import { languages, environments } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, pageAnimation } from "../animation";

const Resume = () => {
    return (
        <motion.div
            className="px-6 py-2"
            variants={pageAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* //! Education & Experience */}
            <motion.div className="grid gap-6 md:grid-cols-2">
                <motion.div
                    variants={fadeInUp}
                    animate="animate"
                    initial="initial"
                >
                    <h5 className="my-3 font-sans text-xl font-bold">学歴</h5>
                    <div className="">
                        <h5 className="my-2 font-sans text-sm font-bold">
                            ・北海道科学大学 (2017/4 - 2019/3 中退)
                        </h5>
                        <p className="font-sans text-sm font-semibold">
                            保険医療学部臨床工学科
                        </p>
                        <p className="my-3 font-sans text-sm">
                            臨床工学技士を目指し大学に入学。
                            特待生に選出される。
                        </p>
                    </div>
                    <div className="">
                        <h5 className="my-2 font-sans text-sm font-bold">
                            ・帯広三条高校 (2014/4 - 2017/3 卒業)
                        </h5>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    animate="animate"
                    initial="initial"
                >
                    <h5 className="my-3 font-sans text-xl font-bold">経歴</h5>
                    <div className="">
                        <p className="font-sans text-sm font-semibold">
                            ・WFrontier株式会社 (2020/8 - 現在)
                        </p>
                        <h5 className="my-2 font-sans text-sm font-bold">
                            フルスタックエンジニア・スクラムマスター
                        </h5>
                        <p className="my-3 font-sans text-sm">
                            ネットスーパーTwidyのリリースから倒産寸前までを経験。
                        </p>
                    </div>
                    <div className="">
                        <p className="font-sans text-sm font-semibold">
                            ・株式会社Canvas (2020/3 - 2020/8)
                        </p>
                        <h5 className="my-2 font-sans text-sm font-bold">
                            SES(サーバー保守・運用)
                        </h5>
                        <p className="my-3 font-sans text-sm">
                            銀行系サーバーの保守用shellscriptの実装を経験。
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            <div className="grid gap-9 md:grid-cols-2">
                <div>
                    <h5 className="my-3 font-sans text-xl font-bold">
                        開発言語&フレームワーク
                    </h5>
                    <div className="my-2">
                        {languages.map((language, i) => (
                            <Bar value={language} key={i} />
                        ))}
                    </div>
                </div>

                <div>
                    <h5 className="my-3 font-sans text-xl font-bold">
                        開発環境
                    </h5>
                    <div className="my-2">
                        {environments.map((environment, i) => (
                            <Bar value={environment} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;
