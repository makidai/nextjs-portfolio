import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import { BsCloud } from "react-icons/bs";
import { IProject, Service, Skill } from "./types";
import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about: "UI・UXデザインから実装までを経験。TypeScript+Next.jsを使用したPoCレベルの実装経験有。",
    },
    {
        Icon: FaServer,
        title: "Backend  Development",
        about: "設計から実装までを経験。Djangoを使用したデザインパターンやパフォーマンスを考慮した実装が可能。",
    },
    {
        Icon: AiOutlineApi,
        title: "API Development",
        about: "GraphQLのshema定義から実装までを経験。パフォーマンス考慮した実装とセキュリティを考慮した認証周りの設計が可能。 ",
    },
    {
        Icon: SiGoogleanalytics,
        title: "Data Analysis",
        about: "pandasとplotlyのライブラリを使用した分析とデータビジュアライゼーションの経験有。",
    },
    {
        Icon: BsCloud,
        title: "Infrastructure",
        about: "EC2からFargateへの移行経験有。AWSのサービスやElasticSearchの経験はまだ浅く、調べながら実装可能なレベル。",
    },
    {
        Icon: RiComputerLine,
        title: "Management",
        about: "エンジニア4名チームのスクラムマスターの経験有。実装・テスト・評価・リリースのフローを構築。",
    },
];

export const languages: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "Python",
        level: "90",
    },
	{
		Icon: BsCircleFill,
		name: "Django",
		level: "90",
	},
    {
        Icon: BsCircleFill,
        name: "TypeScript",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "React・NextJS",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "Go",
        level: "40",
    },
    {
        Icon: BsCircleFill,
        name: "ReactNative",
        level: "50",
    },
];

export const environments: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "AWS",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "ElasticSearch",
        level: "50",
    },
    {
        Icon: BsCircleFill,
        name: "Docker",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "PostgreSQL",
        level: "50",
    },
    {
        Icon: BsCircleFill,
        name: "Redis・Celery",
        level: "50",
    },
    {
        Icon: BsCircleFill,
        name: "GraphQL",
        level: "80",
    },
];

export const projects: IProject[] = [
    {
        id: 0,
        name: "Twidyネットスーパー",
        description:
            "",
        image_path: "/images/twidy.png",
        deployed_url: "https://twidy.jp/ja/",
        github_url: "https://github.com/mirumee/saleor",
        category: ["django"],
        key_techs: ["Django"],
    },
    {
        id: 1,
        name: "商品管理ダッシュボード",
        description:
            "",
        image_path: "/images/admin_site.png",
        deployed_url: "",
        github_url: "",
        category: ["django"],
        key_techs: ["Django"],
    },
    {
        id: 2,
        name: "メルマガ配信ツール",
        description:
            "",
        image_path: "/images/mail_magazine.png",
        deployed_url: "",
        github_url: "",
        category: ["django"],
        key_techs: ["Django"],
    },
    {
        id: 3,
        name: "データ分析用ダッシュボード",
        description:
            "",
        image_path: "/images/dashboard.png",
        deployed_url: "",
        github_url: "",
        category: ["django"],
        key_techs: ["Django"],
    },
    {
        id: 4,
        name: "ポートフォリオサイト",
        description:
            "",
        image_path: "/images/portfolio.png",
        deployed_url: "",
        github_url: "",
        category: ["react"],
        key_techs: ["React"],
    },
];
