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
        about: "<b>HTML</b>, <b>CSS</b>, <b>jQuery</b>を主に使用しており、現在は <b>TypeScript</b>+<b>Next.js</b>での開発も進めています.",
    },
    {
        Icon: FaServer,
        title: "Backend  Development",
        about: "<b>Django</b>での開発が得意です.</br> 複数のアプリを一人称の開発でリリースした経験があります.",
    },
    {
        Icon: AiOutlineApi,
        title: "API Development",
        about: "<b>GraphQL</b>での開発が得意です.</br> <b>Flutter</b>アプリとのAPI連携の経験があります. ",
    },
    {
        Icon: SiGoogleanalytics,
        title: "Data Analysis",
        about: "<b>Pandas</b>でのデータ操作が得意です. </br><b>Chart.js</b>を使用したダッシュボードのリリース経験があります.",
    },
    {
        Icon: BsCloud,
        title: "Infrastructure",
        about: "<b>Docker</b>+<b>AWS</b>を主に使用しており,</br><b>CloudFormation</b>を使用したサーバー構築の経験があります.",
    },
    {
        Icon: RiComputerLine,
        title: "Whatever",
        about: "スクラムリーダーとしてエンジニアのスプリント管理とリリースの指揮を担当しております. ",
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
