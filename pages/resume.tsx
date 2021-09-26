import Bar from "../components/Bar";
import { languages, environments } from "../data";

const Resume = () => {
    return (
        <div className="px-6 py-2">
            {/* //! Education & Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 font-sans text-xl font-bold">学歴</h5>
                    <div className="">
                        <h5 className="my-2 font-sans text-sm font-bold">
                            北海道科学大学
                        </h5>
                        <p className="font-sans text-sm font-semibold">
							保険医療学部臨床工学科
                        </p>
						<p className="font-sans text-sm font-semibold">
							(2017/4 - 2019/3 2年次中退)
						</p>
                        <p className="my-3 font-sans text-sm">
                            プログラミング自体は独学で学びました.
                            YouTubeやUdemyなどのオンライン教材を主に使用しました.
                        </p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 font-sans text-xl font-bold">経歴</h5>
                    <div className="">
                        <h5 className="my-2 font-sans text-sm font-bold">
                            フルスタックエンジニア Jr.
                        </h5>
                        <p className="font-sans text-sm font-semibold">
                            WFrontier株式会社
                        </p>
						<p className="font-sans text-sm font-semibold">
							(2020/8 - 現在)
						</p>
                        <p className="my-3 font-sans text-sm">
                            買い物代行サービスTwidyのリリースに貢献しました.
							現在はスクラムリーダーとして、スプリント管理・リリースの指揮を担当しています.
                        </p>
                    </div>
                </div>
            </div>

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
        </div>
    );
};

export default Resume;
