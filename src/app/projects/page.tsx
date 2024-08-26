import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
    const Projects = [
        {
            title: "Play to earn",
            description:
                "Play to earn is an online gaming platform that specializes in " +
                "providing a variety of betting and gambling options, including sports betting, eSports, and casino games. " +
                "The platform allows users to place bets on a wide range of events and games, offering an engaging and interactive " +
                "experience for both casual and serious bettors. Play to earn emphasizes security, user experience, and a seamless betting process, " +
                "making it a popular choice for users looking to participate in online gaming and betting activities.",
            tags: [
                "Jira",
                "Postman",
                "Swagger",
                "Kafka",
                "AWS",
                "Mongodb",
                "MySQL",
                "Rudderstack",
                "Jmeter ",
                "Intercom",
                "Contenful",
                "Oddin",
                "MTS",
                "Betradar",
                "Console log",
            ],
            link: "https://ubet.io/",
        },
        {
            title: "Xoai Shop - A comprehensive ecommerce shopping website",
            description:
                "Xoai Shop is a fully-featured ecommerce platform built using Django and Postgresql on the backend, with a modern frontend powered by Next.js and TypeScript. The site is styled with TailwindCSS for responsive design and uses Redis for caching to improve performance. The development and deployment process is streamlined with Docker and CI/CD integration via Github Actions, ensuring reliability and scalability.",
            tags: [
                "Django",
                "Postgresql",
                "Nextjs",
                "Typescript",
                "Tailwindcss",
                "Redis",
                "Docker",
                "CI/CD (Github Actions)",
            ],
            link: "https://github.com/hungdhv97/xoai_shop",
        },
        {
            title: "Farah Portfolio - Personal portfolio website",
            description:
                "Farah Portfolio is a personal portfolio website showcasing a developer's skills, projects, and experiences.",
            tags: ["Nextjs", "Typescript", "Shadcn Ui"],
            link: "https://github.com/hungdhv97/hungthai_portfolio",
        },
        {
            title: "FNFBot - Automation tool for the Friday Night Funkin game",
            description:
                "FNFBot is a specialized tool designed to assist players of the popular rhythm game Friday Night Funkin. " +
                "The tool provides automated gameplay assistance, allowing users " +
                "to improve their performance. The application is user-friendly, with an intuitive interface" +
                " that makes it accessible even to those with limited technical experience.",
            tags: ["FunctionalTesting", "IntegrationTesting","PerformanceTesting","SecurityTesting","CompatibilityTesting","UsabilityTesting", "ErrorHandling",
            "RegressionTesting","UserInteractionTesting","LoadTesting"],
            link: "https://github.com/hungdhv97/FNFNewBot",
        },
        {
            title: "Liveon",
            description:
                "A social network website providing match information about\n" +
                " sports and cryptocurrency. ",
            tags: ["Django", "Scrapy", "Celery"],
            link: "https://github.com/hungdhv97/story-django",
        },
        {
            title: "WORKFLOW STUDIO",
            description:
                "The Web3 Workflow Studio provided by Morpheus Labs is a low-code workflow automation platform " +
                "that enables seamless integration between Web2 and Web3 systems. " +
                "This platform is particularly useful for non-technical users, " +
                "allowing them to create and manage complex workflows with minimal effort.",
            tags: ["Blockchain","Workflow", "Shadcn-ui", "Low-Code Development","Template-Based Testing","Smart Contract Validation"],
            link: "https://wfstudio.morpheuslabs.io/",
        },
        {
            title: "Fellaz - an ICO (Initial Coin Offering) and INO (Initial NFT\n" +
                " Offering) launchpad",
            description:
                "Fellaz is a Web3 platform focused on transforming entertainment through decentralized technology. It offers NFT-based memberships, " +
                "ticketing, and community ownership, empowering creators to develop content across various media. The platform also supports onboarding" +
                " entertainment projects into " +
                "the Web3 space using its Launchpad and is powered by the Fellaz Token ($FLZ). Developed with C# and Selenium, " +
                "it automates the tedious tasks involved in claiming airdrops, saving users time and effort. The tool is user-friendly " +
                "and can handle multiple airdrops simultaneously, making it a valuable asset for crypto enthusiasts.",
            tags: ["Smart contract", "ICO","INO","Entertainment","Fellaz"],
            link: "https://fellaz.io/",
        },
        {
            title: "VASP Lambda",
            description:
                " VASP Lambda: manages information of VASP member including\n" +
                " analytics transaction TravelRule, monthly statement, billing, personal\n" +
                " account.",
            tags: ["Reactjs", "Javascript"],
            link: "https://github.com/hungdhv97/covid-19-tracker-app",
        },
        {
            title: "Virtual Voice Assistant - A Vietnamese voice assistant",
            description:
                "The Virtual Voice Assistant is an AI-powered tool designed to assist Vietnamese speakers with various tasks. Developed in Python using Jupyter Notebook, the assistant leverages voice models and Shadcn UI to interact with users in a natural and intuitive manner. It supports a wide range of commands, helping users perform daily tasks efficiently.",
            tags: ["Python", "JupiterNotebook", "VoiceModel", "Shadcn Ui"],
            link: "https://github.com/taqui-786/crousal-maker",
        },
        {
            title: "LFW",
            description:
                "LFW.Fi Earn is designed to maximize your crypto earnings through various DeFi strategies such as staking, " +
                "liquidity provision, and unlimited swapping via LFW.Fi’s cross-chain DEX solution. It offers high-efficiency " +
                "returns while ensuring robust security, allowing you to grow and protect your assets. With the added flexibility of cross-chain swapping, " +
                "users can easily exchange assets across different blockchains within a secure and user-friendly environment.",
            tags: ["Swap","Stake","Unstake","Superchage Pool"],
            link: "https://lfw-dev.netlify.app/home",
        },
        {
            title: "Coway",
            description:
                "Crime Scene is a Unity3D-based project that simulates a 3D crime scene, providing users with an interactive environment to explore and investigate. The demo is designed to demonstrate the capabilities of Unity3D in creating realistic simulations for training or entertainment purposes. Users can navigate the scene, gather clues, and solve the mystery.",
            tags: ["Unity3D"],
            link: "https://github.com/hungdhv97/Crime-Scene-Demo",
        },
    ];

    return (
        <div className="relative flex h-full w-full flex-col items-start gap-5 overflow-hidden">
            <Badge className="gap-2">
                <Layers className="h-5 w-5" />
                Projects
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>My Projects</Heading>
                <FramerWrapper y={0} x={200}>
                    <p className="w-full font-nunito text-xl text-justify text-primary max-sm:text-base">
                        I have participated in various projects across gaming platforms, blockchain, e-commerce,
                        and information management. I tested and developed features for online gaming platforms, ensured security and performance for
                        blockchain platforms and smart contracts, optimized online shopping processes on e-commerce systems,
                        and built large-scale data management systems to help businesses manage information efficiently.
                    </p>
                </FramerWrapper>
            </div>
            <div className="flex w-full flex-row flex-wrap gap-3 max-lg:flex-col text-justify">
                {Projects.map((val, indx) => {
                    return <ProjectCards key={indx} value={val} num={indx} />;
                })}
            </div>
        </div>
    );
};

export default projectsPage;
