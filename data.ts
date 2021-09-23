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
        level: "80",
    },
	{
		Icon: BsCircleFill,
		name: "Django",
		level: "80",
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
        name: "COVID Tracker",
        description:
            "This app shows a statistical view about corona virus over the world",
        image_path: "/images/covid.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
        github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
        category: ["react"],
        key_techs: ["React", "Chart.js", "Material UI"],
    },
    {
        name: "Algorithm Visualizer",
        image_path: "/images/algoVisual.png",
        deployed_url: "https://visual-algorithm.web.app/",
        github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
        category: ["react"],
        description:
            "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
        key_techs: ["React", "firebase", "Framer Motion"],
    },

    {
        name: "Dev Talks",
        image_path: "/images/dev.jpg",
        deployed_url: "https://dev-talks.herokuapp.com/",
        github_url: "https://github.com/Dey-Sumit/Dev-talks",
        category: ["node", "mongo", "react"],
        description:
            "Social Media app for developers who can share project,create posts,etc...",
        key_techs: [
            "React",
            "Redux",
            "Node",
            "Express",
            "Mongo",
            "REST API",
            "Bootstrap",
        ],
    },

    {
        name: "Realtime Chat App",
        image_path: "/images/chatapp.jpg",
        deployed_url: "https://sumit-chat.netlify.app/",
        github_url:
            "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
        category: ["node", "react"],
        description:
            "Basic Realtime Chat App where one can create a room can talk to each other",
        key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
    },

    {
        name: "Tweeter Clone",
        image_path: "/images/tweetme.jpg",
        deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
        github_url: "https://github.com/Dey-Sumit/tweetme",
        category: ["django", "react"],
        description:
            "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
        key_techs: ["React", "Django", "Django REST API"],
    },

    {
        name: "Color Classification using tf.js",
        image_path: "/images/color.jpg",
        deployed_url: "!#",
        github_url: "https://github.com/Dey-Sumit/color-classification",
        category: ["express"],
        description:
            "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
        key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
    },
    {
        name: "YouTube using YouTube ",
        image_path: "/images/youtubeClone.png",
        deployed_url: "https://not-utube.web.app/",
        github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
        category: ["express"],
        description:
            'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
        key_techs: [
            "React",
            "Redux",
            "Firebase Auth",
            "YouTube API",
            "Sass",
            "Bootstrap",
        ],
    },
    {
        name: "Football App",
        image_path: "/images/football.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: ["react"],
        description:
            "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_techs: [
            "React",
            "Redux",
            "Firebase Auth",
            "API",
            "Sass",
            "Bootstrap",
        ],
    },
];
