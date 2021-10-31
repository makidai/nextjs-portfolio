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
        about: "<b>HTML</b>, <b>CSS</b>, <b>jQuery</b>を使用した開発が得意。現在は<b>TypeScript</b>+<b>Next.js</b>での開発も進行中。",
    },
    {
        Icon: FaServer,
        title: "Backend  Development",
        about: "<b>Django</b>を使用した開発が得意。</br> 一人称開発で設計から実装までを担当可能。",
    },
    {
        Icon: AiOutlineApi,
        title: "API Development",
        about: "<b>GraphQL</b>を使用した開発が得意。</br> <b>Flutter</b>アプリと連携するAPIの設計・実装の経験有り。 ",
    },
    {
        Icon: SiGoogleanalytics,
        title: "Data Analysis",
        about: "<b>Pandas</b>を使用したデータ操作が得意。 </br><b>Chart.js</b>を使用したダッシュボードをリリースした経験有り。",
    },
    {
        Icon: BsCloud,
        title: "Infrastructure",
        about: "<b>Docker</b>+<b>AWS</b>を使用した環境が得意。</br><b>CloudFormation</b>でサーバー構築の経験有り。",
    },
    {
        Icon: RiComputerLine,
        title: "Whatever",
        about: "スクラムリーダーとしてエンジニアのスプリント管理とリリースの指揮を担当した経験有り。",
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
        name: "Java Script",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "React",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "Flutter",
        level: "40",
    },
    {
        Icon: BsCircleFill,
        name: "Bootstrap",
        level: "70",
    },
];

export const environments: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "AWS",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "GCP",
        level: "45",
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
        name: "Redis",
        level: "40",
    },
    {
        Icon: BsCircleFill,
        name: "GraphQL",
        level: "70",
    },
];

export const projects: IProject[] = [
    {
        id: 0,
        name: "Twidy",
        description:
            "",
        image_path: "/images/twidy.png",
        deployed_url: "https://twidy.jp/ja/",
        github_url: "https://github.com/mirumee/saleor",
        category: ["django"],
        key_techs: ["django", "OSS", "saleor"],
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
        key_techs: ["django", "Bootstrap"],
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
        key_techs: ["django", "Bootstrap"],
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
        key_techs: ["django", "OSS", "AdminLTE", "Cart.js"],
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
        key_techs: ["Next.js", "Tailwind CSS"],
    },
];
